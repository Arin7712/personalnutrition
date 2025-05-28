import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-[90vh] bg-[url(/footer.png)] bg-cover bg-center bg-no-repeat flex flex-col justify-between py-[6rem] items-center'>
      <div className='flex flex-col w-[100%] md:justify-center md:items-center px-6 md:px-[4rem]'>
        <Image src="/logo.png" alt="logo" width={140} height={200} />
        <div className='flex md:flex-row flex-col py-[4rem] md:justify-between md:gap-0 gap-10 md:items-center md:w-[60%]'>
        <div className='flex flex-col gap-4 uppercase text-xs md:text-sm'>
            <p>About</p>
            <p>Product</p>
            <p>Our report</p>
            <p>Reviews</p>
        </div>
                <div className='flex flex-col gap-4 uppercase text-xs md:text-sm'>
            <p>Contact us</p>
            <p>Bajaj House, 97 </p>
            <p>support@personalnutrition.com</p>
            <p>9205956100</p>
        </div>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-between px-6 md:px-[6rem] w-full text-xs'>
        <div>
            <p>© All rights reserved</p>
        </div>
        <div className='flex gap-4 text-xs uppercase'>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQs</p>
            <p>Cancellation Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
