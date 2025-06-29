'use client';

import { Noto_Serif } from 'next/font/google';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const font = Noto_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300'],
  display: 'swap',
});

const fadeIn = (isInView: boolean, delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: isInView ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.6, delay },
});

const Science = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="md:px-[6rem] px-6">
      <div className="flex flex-col md:flex-row md:py-[6rem] py-[2rem]">
        <div className="flex flex-col md:gap-[4rem] gap-6 md:w-[50%]">
          <motion.div className="space-y-4" {...fadeIn(isInView, 0)}>
            <h1 className={`md:text-4xl text-3xl font-light ${font.className}`}>
              As Science Evolves So Does Our Approach To Nutrition
            </h1>
          </motion.div>

          <div className="space-y-8">
            <motion.p
              className="md:text-md md:w-[70%] text-sm leading-loose"
              {...fadeIn(isInView, 0.2)}
            >
              Just like fingerprints, our nutrition requirements are unique. They are a sum total of our metabolic rate, gut health, stress levels, lifestyle, immune system, age, gender, body constitution, genetics, and medical history. Dividing food requirements into macronutrients like carbs, fats, and proteins, or into micronutrients, is not exhaustive.
            </motion.p>
            <motion.p
              className="md:text-md md:w-[70%] text-sm leading-loose"
              {...fadeIn(isInView, 0.35)}
            >
              Our research through modern science, in-depth study of ancient wisdom, and experience with 15,000+ clients have earned us unparalleled knowledge in personalised nutrition and health.
            </motion.p>
            <motion.p
              className="md:text-md md:w-[70%] text-sm leading-loose"
              {...fadeIn(isInView, 0.5)}
            >
              Just as nature has made you unique, it has made precise food and herbs to keep you healthy. Discover them with us.
            </motion.p>
          </div>

          <motion.div {...fadeIn(isInView, 0.65)}>
            <p className="w-[60%] md:text-md text-sm underline">
              Read our public research
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex md:w-[50%] justify-center items-center md:pt-0 pt-[4rem]"
          {...fadeIn(isInView, 0.8)}
        >
          <Image src="/mock5.png" alt="video" width={550} height={400} />
        </motion.div>
      </div>
    </div>
  );
};

export default Science;
