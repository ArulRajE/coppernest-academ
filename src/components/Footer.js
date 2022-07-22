import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'react-scroll/modules/components/Link'
import { FaFacebook, FaLinkedin, FaInstagram, FaPinterest, FaPhoneAlt, FaEnvelope, FaAngleRight } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

export const Footer = () => {
    return (
        <>
            <Container fluid className='bg-gray py-5'>
                <Container>
                    <Row className='px-lg-5 footer'>
                        <Col xs={12} sm={6} md={4}>
                            <h4>Categories</h4>
                            <ul className='footer-nav'>
                                <li><FaAngleRight /><Link to='about' smooth={true} duration={100} offset={-145}>About</Link></li>
                                <li><FaAngleRight /><Link to='courses' smooth={true} duration={100} offset={-145}>Courses</Link></li>
                                <li><FaAngleRight /><Link to='blogs' smooth={true} duration={100} offset={-145}>Blogs</Link></li>
                                <li><FaAngleRight /><Link to='contactUs' smooth={true} duration={100} offset={-145}>Contact Us</Link></li>
                            </ul>

                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <h4>Get In Touch</h4>
                            <p><FaPhoneAlt className='me-1' />+91 8147896159</p>
                            <p><FaEnvelope className='me-1' />support@coppernestacadem.com</p>
                            <p><IoLocationSharp className='me-1' />Bangalore - 560001</p>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <h4>Follow Us On</h4>
                            <FaFacebook className='me-4' />
                            <FaLinkedin className='me-4' />
                            <FaInstagram className='me-4' />
                            <FaPinterest className='me-4' />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='bg-black py-4'><p className='text-center text-white'>Copyright 2022. All Rights Reserved</p></Container>
        </>
    )
}