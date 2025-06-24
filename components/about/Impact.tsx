'use client';

import { Noto_Serif } from 'next/font/google';
import React from 'react';
import { Button } from '../ui/button';
import { motion, Variants } from 'framer-motion';

const font = Noto_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300'],
  display: 'swap',
});

const fadeInUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut' as const,
    },
  },
});

const Impact = () => {
  return (
    <div className="flex flex-col gap-6 bg-[url(/aboutbg2.png)] md:bg-[url(/aboutimpact.png)] text-white bg-no-repeat bg-cover md:pb-0 pb-[6rem] justify-end md:justify-center w-full h-[100vh] md:px-[6rem] px-6 mt-6  md:mt-[6rem]">
      
      <motion.h1
        className={`${font.className} md:text-5xl text-3xl font-light`}
        variants={fadeInUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Our Impact
      </motion.h1>

      <motion.p
        className="text-sm leading-loose max-w-md"
        variants={fadeInUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Our 15,000 plus members have healed and discovered their optimal health naturally. 35 doctors have become our partners, empowering their community of health-seekers with the power of food. We are reaching the younger generation through their schools. These children are growing up knowing that food is on their side.
      </motion.p>

      <motion.div
        variants={fadeInUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Button className="w-fit bg-white text-black rounded-full px-6 text-xs uppercase">
          what we care about
        </Button>
      </motion.div>
      
    </div>
  );
};

export default Impact;
