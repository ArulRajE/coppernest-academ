import register from '../assets/images/register.jpg'
import React from 'react'
import { Container, Row, Col, Form, Button, Stack } from 'react-bootstrap'

export const ContactUs = () => {

  return (
    <Container id='contactUs' fluid className='bg-light py-5'>
      <Container name="con">

        <Row>
        <Col xs={12} sm={6} md={6}>
          <img src={register} alt='register' className='img-fluid'/>
          </Col>
          <Col xs={12} sm={6} md={6} className='shadow p-5'>
            <Form >
              <Stack direction="horizontal" gap={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'100%'}}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'100%'}}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter Last Name" />
                </Form.Group>
                
              </Stack>
              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" placeholder="Enter Phone Number" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
