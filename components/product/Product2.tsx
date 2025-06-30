import { Noto_Serif } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Product2 = () => {
  return (
    <div className="flex md:flex-row md:py-0 py-[6rem] flex-col md:gap-0 gap-10  justify-between items-center md:pt-[6rem] md:px-[6rem] px-6">
      <div className='md:w-[35%] space-y-6'>
        <h1 className={`${font.className} text-3xl font-light`}>What goes in your monhtly subscribtion?</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend venenatis est, eu blandit augue ultricies in. Ut quis </p>
      </div>

      <div>
        <Image src='/report.png' alt='report' width={400} height={400} />
      </div>

      <div className='text-md md:w-[35%] flex flex-col gap-6 items-start'>
        <p>1. Monthly diagnosis and follow-up sessions with our expert ayurveda doctor</p>
        <p>2. Bi-weekly sessions with our nutritionist</p>
        <p>3. Join a community of like-minded individuals for educational content, interactive discussions, and support for your health goals.</p>
        <p>4. Yoga sessions in collaboration with the world-renowned Ananda Yoga</p>
        <p>5. Exclusive access to webinars and special wellness events</p>
        <p>6. Post-program maintenance guide</p>
      </div>
    </div>
  )
}

export default Product2
