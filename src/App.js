import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './containers/PrivateRoute'
import NotFound from './components/NotFound'
import { routes } from './routes'
import NavigationBar from './components/NavigationBar'

const App = () => {
  const appPath = window.location.pathname.replace(/\/$/, "");
  const renderSwitch = () => (
    <Switch>
      {routes.map(route => {
        const RouteType = route.isPrivate ? PrivateRoute : Route
        return (
          <RouteType
            key={route.path}
            exact={route.isExact}
            path={appPath + route.path}
            component={route.component || NotFound}
          />
        )
      })}
      <Route component={NotFound} />
    </Switch>
  );
  return (
    <Router>
      <div>
        <NavigationBar routes={routes} appPath={appPath} />
        <hr />
        <div className="centerBlock">
          {renderSwitch()}
        </div>
      </div>
    </Router>
  )
}

export default App
