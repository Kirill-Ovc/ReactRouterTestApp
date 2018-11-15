import React from 'react'
import { Alert, NavLink } from 'reactstrap'

const About = () => {
  return (
    <div>
      <p> Тестовое приложение. Сделано на ReactJS + Router + Redux + Bootstrap</p>
      <Alert color="info">
        <NavLink href="https://github.com/Kirill-Ovc/ReactRouterTestApp">GitHub</NavLink>
      </Alert>
    </div>
  )
}

export default About