import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import thumbnail from '../assets/images/thumbnail.jpg'
import vision from '../assets/videos/vision.mp4'

 export const Vision = () => {
    return (
        <Container fluid className='py-5 bg-light' id='vision'>
            <Container>
                <Row>
                    <Col xs={12} sm={6}>
                        <video style={{ height: 360, width: '100%' }} poster={thumbnail} controls>
                            <source src={vision}
                                type="video/mp4"></source>
                            Sorry, your browser doesn't support videos.
                        </video>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h1 className='p-2' >Vision</h1>
                        <p className='text-justify'>Our vision in growth by creating a family environment and culture driven by innovation technologies and our top priority to make customer satisfaction and to building the relationship.</p>
                        <h1 className='p-2' >Mission</h1>
                        <p className='text-justify'>Coppernest Academ provides state of the art advance training in emerging technology trends to drive greater opportunities, which in turn will enforce higher and fundamental more robust growth.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
