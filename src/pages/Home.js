import React from 'react'
import { HeroSlider } from '../components/HeroSlider/HeroSlider'
import { NavBar } from '../components/navbar/NavBar'

export const Home = () => {

  return (
    <div id="home">
      <NavBar />
      <HeroSlider />
    </div>
  )
}
