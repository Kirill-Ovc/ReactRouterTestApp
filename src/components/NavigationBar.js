import React from 'react'
import { Navbar, Nav, NavLink, NavItem } from 'reactstrap'
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <Navbar color="light" light expand="sm">
      <Nav navbar>
        {props.routes.filter(route => route.isNavBar).map(route =>
          <NavItem>
            <NavLink tag={Link} exact={route.isExact} to={route.path}>{route.name}</NavLink>
          </NavItem>
        )}
      </Nav>
      <Nav navbar className="ml-auto">
        {props.routes.filter(route => !route.isNavBar).map(route =>
          <NavItem>
            <NavLink tag={Link} to={route.path}>{route.name}</NavLink>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  )
}

export default NavigationBar