'use client'

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-[3rem] items-center md:text-start text-center md:justify-center justify-start pt-[10rem] md:pt-[6rem] md:h-[100vh] md:px-[6rem] px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        <Image src="/abouthome.png" alt="aboutrect" width={280} height={250} />
      </motion.div>

      <motion.div
        className="space-y-3 flex flex-col text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h1
          className="uppercase"
          variants={fadeIn}
          transition={{ delay: 0.7 }}
        >
          Our purpose
        </motion.h1>
        <motion.p
          className="max-w-md text-center text-sm"
          variants={fadeIn}
          transition={{ delay: 1 }}
        >
          We are shaping a physical and digital community movement, rooted in
          ayurvedic wisdom and validated by research and science, focused on
          helping people thrive and heal faster and for longer through food and
          nutrition.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
