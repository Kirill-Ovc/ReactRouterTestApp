import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { appProdPath } from '../routes'

const needAuth = 'Необходимо авторизоваться для просмотра этой страницы'
const appPath = appProdPath

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuth ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: appPath + '/login',
                state: {
                  from: props.location,
                  errorMsg: needAuth,
                },
              }}
            />
          )
      }
    />
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.sessionReducer.user,
  }
}

export default connect(mapStateToProps)(PrivateRoute)