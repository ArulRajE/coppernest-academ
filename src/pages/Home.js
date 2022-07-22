import React from 'react'
import { HeroSlider } from '../components/HeroSlider/HeroSlider'
import { NavBar } from '../components/navbar/NavBar'
import { About } from './About'

export const Home = () => {

  return (
    <div id="home">
      <NavBar />
      <HeroSlider />
      <About />
    </div>
  )
}
