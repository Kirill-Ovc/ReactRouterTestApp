import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Label, Input, Col, Alert } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
  state = {
    redirectToPreviousRoute: false,
    username: '',
    password: '',
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = this.state

    this.props.logIn(
      {
        username,
        password
      },
      () => {
        this.setState({ redirectToPreviousRoute: true })
      }
    )
  }
  handleChange = e => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.name

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }))
  }
  renderForm = () => {
    const { username, password } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="login" sm={2} >Login</Label>
          <Col sm={5}>
            <Input
              value={username}
              onChange={this.handleChange}
              type="text" name="username" id="login" placeholder="UserName" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2} >Password</Label>
          <Col sm={5}>
            <Input
              value={password}
              onChange={this.handleChange}
              type="password" name="password" id="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Confirm
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <hr />
        <FormGroup check row>
          <Col sm={{ size: 10 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
  render() {
    const { location, errorMsg } = this.props
    const { from, errorMsg: errorMsg2 } = location.state || { from: { pathname: '/' } }
    const { redirectToPreviousRoute } = this.state
    if (redirectToPreviousRoute) {
      return <Redirect to={from} />
    }
    return (
      <React.Fragment>
        {(errorMsg || errorMsg2) &&
          <Alert color="danger">{(errorMsg || errorMsg2)}</Alert>
        }
        {this.renderForm()}
      </React.Fragment>
    )
  }
}

LoginPage.propTypes = {
  logIn: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
}

export default LoginPage