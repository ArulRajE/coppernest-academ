import React from 'react'
import { Card,Button } from 'react-bootstrap'

export const Cards = props => {
  return (
    <Card>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        Coppernest Academ provides state of the art advance training in emerging technology trends.
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  )
}
