import About from '@/components/About'
import Approach from '@/components/about/Approach'
import FounderStory from '@/components/about/FounderStory'
import Hero from '@/components/about/Hero'
import Philosophy from '@/components/about/Philosophy'
import Community from '@/components/Community'
import Event from '@/components/Event'
import Products from '@/components/Products'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <FounderStory/>
      <Philosophy/>
      <About/>
      <Products/>
      <Event/>
      <Approach/>
      <Community/>
    </div>
  )
}

export default page
