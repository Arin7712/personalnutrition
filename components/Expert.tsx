import { Noto_Serif } from 'next/font/google';
import Image from 'next/image';
import React from 'react'


const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Expert = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full md:px-[6rem] px-6">
      <h1
        data-aos="fade-up"
        className={`md:w-[50%] md:text-5xl text-4xl  text-center ${font.className}`}
      >
        Our experts and doctors
      </h1>
      <p data-aos="fade-up" data-aos-delay="200" className="text-sm md:w-[40%] text-center">
        Meet the hearts and souls of P-Nut. Their combined experience in nutrition science, Vedic wisdom, and Ayurveda is XXXXX years.
      </p>

      <div className='pt-[4rem]'>
        <Image src='/experts.png' alt='expert' width={1200} height={400} className='rounded-lg'/>
        </div>

        <div>
            <div className="flex flex-col md:flex-row py-[6rem]">
                    <div className="flex flex-col md:gap-[4rem] gap-10 md:w-[50%]">
                      <div className="space-y-4">
                        <h1
                          className={`md:text-4xl text-3xl ${font.className}`}
                        >
                          As Science Evolves So Does Our Approach To Nutrition
                        </h1>

                      </div>
            
   
            
                      <div className='space-y-8'>
                        <p className='md:text-md md:w-[70%] text-sm'>
                          Just like fingerprints, our nutrition requirements are unique. They are a sum total of our metabolic rate, gut health, stress levels, lifestyle, immune system, age, gender, body constitution, genetics, and medical history. Dividing food requirements into macronutrients like carbs, fats, and proteins, or into micronutrients, is not exhaustive.
                        </p>
                        <p className='md:text-md md:w-[70%] text-sm'>
                            Our research through modern science, in-depth study of ancient wisdom, and experience with 15,000+ clients have earned us unparalleled knowledge in personalised nutrition and health. </p>
                        <p className='md:text-md md:w-[70%] text-sm'>
                            Just as nature has made you unique, it has made precise food and herbs to keep you healthy. Discover them with us. 
                        </p>
                      </div>
                      <div>
                        <p className="w-[60%] text-zinc-600 md:text-md text-sm underline">
                          Read our public research
                        </p>
                      </div>
                    </div>
            
                    <div className="flex md:w-[50%]  justify-center items-center">
                      <Image src="/mock5.png" alt="video" width={500} height={400} />
                    </div>
                  </div>
            </div>     
    </div>
  )
}

export default Expert
