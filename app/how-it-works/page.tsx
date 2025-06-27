import Community from '@/components/Community'
import FAQ from '@/components/FAQ'
import { About } from '@/components/how-it-works/About'
import BarGraph from '@/components/how-it-works/BarGraph'
import ComparisonTable from '@/components/how-it-works/ComparisonTable'
import ComparisonTableMobile from '@/components/how-it-works/ComparissonTableMobileView'
import Feature from '@/components/how-it-works/Feature'
import Hero from '@/components/how-it-works/Hero'
import KeyBenefits from '@/components/how-it-works/KeyBenefits'
import KeyBenefits2 from '@/components/how-it-works/KeyBenefits2'
import Pricing from '@/components/how-it-works/Pricing'
import Science from '@/components/how-it-works/Science'
import Stats from '@/components/how-it-works/Stats'
import Test from '@/components/how-it-works/Test'
import Testimonials from '@/components/how-it-works/Testimonials'
import WorkQuiz from '@/components/how-it-works/WorkQuiz'
import Quiz from '@/components/Quiz'
import Testimonials2 from '@/components/Testimonials'
import Testimonials3 from '@/components/Testimonials3'
import React from 'react'

const barData = [
  { label: "Weight (kgs)", before: 82, after: 77 },
  { label: "Waist (cms)", before: 110, after: 93 },
  { label: "Hip (cms)", before: 120, after: 113 },
  { label: "HbA1c (%)", before: 9, after: 6 },
  { label: "Blood Sugar", before: 145, after: 135 },
  { label: "Triglycerides", before: 175, after: 145 },
  { label: "HDL Cholesterol", before: 80, after: 50 },
  { label: "LDL Cholesterol", before: 80, after: 115 },
  { label: "Vitamin D", before: 12, after: 24 },
];


const page = () => {
  return (
    <div>
      <Hero/>
      <Pricing/>
      <Testimonials/>
      <About/>
      <Stats/>
      <BarGraph data={barData}/>
      <Feature/>
      <KeyBenefits2/>
      <Testimonials2/>
      <WorkQuiz/>
      <Science/>
      <div> 
      <ComparisonTable/>
      </div>
      <KeyBenefits/>
      <FAQ/>
      <Test/>
      <Testimonials3/>
      <Community/>
    </div>
  )
}

export default page
