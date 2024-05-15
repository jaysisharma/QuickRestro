import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Home/Hero'
import Dish from '../components/Home/Dish'
import BussinessLunch from '../components/Home/BussinessLunch'
import FastDelivery from '../components/Home/FastDelivery'
import Reviews from '../components/Home/Reviews'

const Home = () => {
  return (
    <div className=' bg-[#141414]'>
        <Navbar/>
        <Hero  />
        <Dish />
        <BussinessLunch/>
        <FastDelivery/>
        <Reviews/>
    </div>
  )
}

export default Home