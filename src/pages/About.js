import { Col, Container, Row } from 'react-bootstrap'
import banner3 from '../assets/images/banner3.png'

export const About = () => {
  return (
    <Container id="about" className='my-5'>
      <Row>
        <Col xs={12} sm={6}>
          <h1 className="p-2">What We Offer</h1>
          <p className="text-justify">Coppernest Technologies India is the frontline runners in the field of Emerging Technologies, young and dynamic award wining company incorporated in the year 2018 by a Team of dedicated Professional experts having a vision of developing best in class Innovation technologies.</p>
          <p className='text-justify'>Coppernest Technologies India is the frontline runners in the field of Emerging Technologies, young and dynamic award wining company incorporated in the year 2018 by a Team of dedicated Professional experts having a vision of developing best in class Innovation technologies.</p>
        </Col>
        <Col xs={12} sm={6}><img src={banner3} className='img-fluid' alt='about' /></Col>
      </Row>
    </Container>
  )
}
