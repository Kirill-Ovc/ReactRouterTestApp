import React from 'react'
import { Navbar, Nav, NavLink, NavItem } from 'reactstrap'
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  const { appPath } = props
  return (
    <Navbar color="light" light expand="sm">
      <Nav navbar>
        {props.routes.filter(route => route.isNavBar).map((route, index) =>
          <NavItem key={index} >
            <NavLink tag={Link} exact={route.isExact ? 1 : 0} to={appPath + route.path}>{route.name}</NavLink>
          </NavItem>
        )}
      </Nav>
      <Nav navbar className="ml-auto">
        {props.routes.filter(route => !route.isNavBar).map((route, index) =>
          <NavItem key={index} >
            <NavLink tag={Link} to={appPath + route.path}>{route.name}</NavLink>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  )
}

export default NavigationBar