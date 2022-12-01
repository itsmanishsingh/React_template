import React from 'react'
import Navbar from './Navbar'
import FooterSection from './FooterSection'
import HeroSection from './HeroSection'
import AppSection from './AppSection'
import CardSection from './CardSection'
import Card from './Card'

const  App = ()=> {
  return (
    <div>
        {/* <h1>Manish Singh</h1> */}
        <Navbar />
        <HeroSection />
        <AppSection />
        <CardSection />
        {/* <Card ImageUrl={"https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/> */}
        {/* <Card ImageUrl={"https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/> */}
        <FooterSection />
    </div>
  )
}

export default App