import React from 'react'
import HeroSection from '../components/HeroSection'
import Countup from '../components/Countup'
import GuaranteeSection from '../components/GuaranteeSection'
import FaqSection from '../components/FaqSection'
import HowItWorks from '../components/HowItWorks'
import ItemsToDeliver from '../components/ItemsToDeliver'
import About from '../components/About'


function Home() {
  return (
   
  <div >
    <HeroSection />
    <Countup />
    <About />
    <ItemsToDeliver />
    <HowItWorks />
    <GuaranteeSection />
    <FaqSection />

  </div>

  )
}

export default Home
