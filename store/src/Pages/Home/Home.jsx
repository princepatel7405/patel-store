import React from 'react'
import HeroSection from '../../components/HeroSection'
import Services from '../../components/Services'
import Trusted from '../../components/Trusted'

const Home = () => {
  return (
    <div>
      <HeroSection name="PATEL STORE"/>
      <Services/>
      <Trusted/>
    </div>
  )
}

export default Home