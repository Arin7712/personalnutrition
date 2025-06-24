import About from '@/components/About'
import FounderStory from '@/components/about/FounderStory'
import Hero from '@/components/about/Hero'
import Community from '@/components/Community'
import Event from '@/components/Event'
import Products from '@/components/Products'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <FounderStory/>
      <About/>
      <Products/>
      <Event/>
      <Community/>
    </div>
  )
}

export default page
