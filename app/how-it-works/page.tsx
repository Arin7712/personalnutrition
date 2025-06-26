import ComparisonTable from '@/components/how-it-works/ComparisonTable'
import ComparisonTableMobile from '@/components/how-it-works/ComparissonTableMobileView'
import Hero from '@/components/how-it-works/Hero'
import Pricing from '@/components/how-it-works/Pricing'
import Testimonials from '@/components/how-it-works/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Pricing/>
      <Testimonials/>
      <div> 
      <ComparisonTable/>
      </div>

    </div>
  )
}

export default page
