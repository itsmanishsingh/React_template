import React from 'react'
import Navbar from './Navbar'
import FooterSection from './FooterSection'
import HeroSection from './HeroSection'
import AppSection from './AppSection'
import CardSection from './CardSection'
// import Card from './Card'

const  App = ()=> {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <AppSection />
        <CardSection />
        <FooterSection />
    </div>
  )
}

export default App