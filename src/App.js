import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Navbar, Nav, NavLink, NavItem } from 'reactstrap'
//import './App.css'
import Home from './components/Home'
import BookList from './components/BookList'
import NewsContainer from './containers/NewsContainer'
import ProfileContainer from './containers/ProfileContainer'
import LoginContainer from './containers/LoginContainer'
import PrivateRoute from './containers/PrivateRoute'
import NotFound from './components/NotFound'

const App = () => (
  <Router>
    <div>
      <Navbar color="light" light expand="md">
        <Nav navbar>
          <NavItem>
            <NavLink tag={Link} to="/">На главную</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/news">Новости</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/books">Книги</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/movies">Фильмы</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about">О приложении</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
          <NavItem >
            <NavLink tag={Link} to="/login" >Войти</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/profile">Профиль</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <hr />
      <div className="centerBlock">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={NewsContainer} />
          <Route path="/books" component={BookList} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/about" render={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>

  </Router>
)

const About = () => <p>Тестовое приложение. Сделано на ReactJS+Router+Redux+Bootstrap</p>

export default App
