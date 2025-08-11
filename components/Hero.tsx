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
    <div className='flex flex-col gap-6 md:items-start items-center md:text-start text-center md:justify-center justify-start md:pt-0 pt-[6rem] md:w-[50%] md:h-[100vh] md:px-[6rem] px-6'>
      <h1 data-aos="fade-up" className={`${font.className} md:text-[55px] sm:text-5xl text-3xl`}>Interpret Your Gut To <span className='text-highlight'>Interpret</span> Your Health</h1>
      <p data-aos="fade-up" data-aos-delay="200" className='text-sm sm:w-[85%] w-[90%]'>Your gut holds the key to your health. Through tongue analysis and dosha reading, we design a personalized food intelligence report suited to your unique nutrition needs, for optimal gut health.</p>
         <div data-aos="fade-up" data-aos-delay="400" className='md:block flex w-full'>
        <Button className='gradient-green-1 text-xs rounded-full px-10 py-6 hover:cursor-pointer uppercase md:w-auto w-full'>Get your personalized food guide</Button>
      </div>
      <Link href='/' className='flex items-center gap-4 text-xs underline' data-aos="fade-up" data-aos-delay="600">What is a food sensitivity?
      <CircleArrowRight className='size-3'/>
      </Link>
    </div>
  )
}

export default Hero;
