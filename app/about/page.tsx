import About from '@/components/About'
import Approach from '@/components/about/Approach'
import CTA from '@/components/about/CTA'
import CTA2 from '@/components/about/CTA2'
import FounderStory from '@/components/about/FounderStory'
import Hero from '@/components/about/Hero'
import Impact from '@/components/about/Impact'
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
      <CTA/>
      <Approach/>
      <Impact/>
      <CTA2/>
      <Community/>
    </div>
  )
}

export default page
