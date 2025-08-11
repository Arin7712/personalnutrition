import { Noto_Serif } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Product3 = () => {
  return (
    <div className="flex md:flex-row flex-col md:pb-0 pb-[6rem] md:gap-0 gap-10  justify-between items-center md:pt-[6rem] md:px-[6rem] px-6">
      <div className='md:w-[25%] space-y-6'>
        <h1 className={`${font.className} text-3xl font-light`}>Uncover your ayurvedic body type and how to heal and thrive</h1>
      </div>

      <div>
        <Image src='/product1.png' alt='report' width={350} height={400} />
      </div>

      <div className=' md:w-[30%] flex flex-col gap-6 items-start'>
                <h1 className={`${font.className} text-3xl font-light`}>Personalised Sensitivity Report</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend venenatis est, eu blandit augue ultricies in. Ut quis </p>
        <Button className='gradient-green-1 text-xs rounded-full px-10 py-6 hover:cursor-pointer uppercase md:w-full w-fit'>Buy now</Button>

      </div>
    </div>
  )
}

export default Product3
