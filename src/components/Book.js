import React from 'react'
import {
  Card, CardText, CardTitle, Button
} from 'reactstrap';

export default class Book extends React.Component {
  render() {
    return (
      <div style={{ width: '300px' }}>
        <Card body >
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>ReadMore</Button>
        </Card>
      </div>
    )
  }
}