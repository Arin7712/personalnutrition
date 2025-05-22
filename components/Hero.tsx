'use client'

import React, { useEffect } from 'react'
import { Noto_Serif } from 'next/font/google';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CircleArrowRight } from 'lucide-react';
import AOS from 'aos';
import "aos/dist/aos.css";



const font = Noto_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300'],
  display: 'swap',
})


const Hero = () => {
    
useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
    return (
    <div className='flex flex-col gap-6 items-start justify-center md:w-[50%] h-[80vh] md:px-[4rem] px-6'>
      <h1 data-aos="fade-up" className={`${font.className} md:text-6xl text-5xl`}>Interpret Your Gut To <span className='text-highlight'>Interpret</span> Your Health</h1>
      <p data-aos="fade-up" data-aos-delay="200" className='text-sm w-[85%]'>Your gut holds the key to your health. Through tongue analysis and dosha reading, we design a personalized food intelligence report suited to your unique nutrition needs, for optimal gut health.</p>
         <div data-aos="fade-up" data-aos-delay="400">
        <Button className='gradient-green-1 text-black text-xs rounded-full px-10 py-6 hover:cursor-pointer uppercase'>Get your personalized food guide</Button>
      </div>
      <Link href='/' className='flex items-center gap-4 text-xs underline' data-aos="fade-up" data-aos-delay="600">What is a food sensitivity?
      <CircleArrowRight className='size-3'/>
      </Link>
    </div>
  )
}

export default Hero;
