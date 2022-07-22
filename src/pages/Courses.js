import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import banner3 from '../assets/images/banner3.png'
import banner4 from '../assets/images/banner4.png'
import banner5 from '../assets/images/banner5.png'
import { Cards } from '../components/Cards'

 export const Courses = () => {
  return (
    <Container id='courses'>
      <Row className='text-center my-5 g-4'>
        <h1 className='mb-5'>Explore our courses</h1>
        <Col xs={12} sm={6} md={4}>
          <Cards title='Architectural Intelligence' src={banner3} />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards title='Python' src={banner4} />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards title='Data Analytics' src={banner5} />
        </Col>
      </Row>
    </Container>
  )
}