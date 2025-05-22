import { Noto_Serif } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const font = Noto_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300'],
  display: 'swap',
})

const Testimonials = () => {
  return (
    <div className='flex flex-col md:px-[6rem] px-6 pt-[6rem]'>
      <div className='flex flex-col md:flex-row justify-center'>
        <div className='flex flex-col md:gap-[4rem] gap-10 md:w-[70%]'>
            <div className='space-y-4'>
                <h1 className={`md:text-5xl text-3xl ${font.className} md:block hidden`}>Celebrities Testimonials</h1>
                                <h1 className={`md:text-5xl text-3xl ${font.className} md:hidden block`}>Sun Seekers</h1>
                <p className='text-sm text-zinc-600'>The world’s top performers PersonalNutrtion.com</p>
            </div>

            <div className='flex flex-wrap md:gap-10 gap-4 items-center text-sm text-zinc-600'>
                <p>Dr.Andrew Huberman</p>
                <p>Allyson Felix</p>
                <p>Sir Lewis Hamilton</p>
                <p>Jeremy Jauncey</p>
            </div>

        <div className='md:hidden block flex justify-center'>
            <Image src='/video1.png' alt='video' width={400} height={400} />
        </div>

            <div>
                <p className={`${font.className} md:text-3xl md:w-[70%] text-xl`}>“I’ve been using P-NUT since 2012 because it’s the simplest, most straightforward way for me to get my bases of important vitamins, minerals, and probiotics.”</p>
            </div>
            <div>
                <p className='w-[60%] text-zinc-600 md:text-md text-sm'>NEUROSCIENTIST, HOST OF THE HUBERMAN LAB PODCAST, Personal Nutrition PARTNER</p>
            </div>
        </div>

        <div className='md:block hidden'>
            <Image src='/video1.png' alt='video' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
