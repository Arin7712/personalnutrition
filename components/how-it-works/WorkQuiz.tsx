import { Noto_Serif } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const WorkQuiz = () => {
  return (
    <div className='flex md:flex-row flex-col w-full md:h-screen mt-[6rem]'>
        <div className='md:w-[50%]'>
            <Image src='/quizbg.png' alt='quiz' width={500} height={500} className='object-cover w-full h-full'/>
        </div>
        <div className='bg-[url(/workellipse.png)] bg-cover bg-center bg-no-repeat md:w-[50%] px-[4rem] md:px-[10rem] md:h-[100vh] md:py-0 py-[6rem] flex flex-col gap-6 justify-center items-center'>
            <h1 className={`${font.className} text-4xl text-center font-light`}>Is this Right For You ?</h1>
                      <Button className="bg-[#CAF948] rounded-full uppercase text-xs w-fit px-10 py-4">
            Take the quiz now
          </Button>
        </div>
    </div>
  )
}

export default WorkQuiz
