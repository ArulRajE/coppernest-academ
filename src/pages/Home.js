import React from 'react'
import { Footer } from '../components/Footer'
import { HeroSlider } from '../components/HeroSlider/HeroSlider'
import { NavBar } from '../components/navbar/NavBar'
import { About } from './About'
import { ContactUs } from './ContactUs'
import { Courses } from './Courses'

export const Home = () => {

  return (
    <div id="home">
      <NavBar />
      <HeroSlider />
      <About />
      <Courses />
      <ContactUs />
      <Footer />
    </div>
  )
}
