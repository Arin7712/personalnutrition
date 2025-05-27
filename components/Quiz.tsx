import { Noto_Serif } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button';

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Quiz = () => {
  return (
    <div className='flex md:flex-row flex-col w-full h-screen'>
        <div className='md:w-[50%]'>
            <Image src='/quizbg.png' alt='quiz' width={500} height={500} className='object-cover w-full h-full'/>
        </div>
        <div className='bg-[url(/quizradient.png)] bg-cover bg-center bg-no-repeat md:w-[50%] px-[4rem] md:px-[10rem] h-[100vh] md:py-0 py-[6rem] flex flex-col gap-6 justify-center items-center'>
            <h1 className={`${font.className} text-4xl text-center`}>Still not Sure If this Is this right for you?</h1>
                      <Button className="bg-[#CAF948] rounded-full text-black uppercase text-xs md:w-full w-fit">
            Take the quiz now
          </Button>
        </div>
    </div>
  )
}

export default Quiz
