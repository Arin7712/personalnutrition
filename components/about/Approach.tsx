'use client';

import { Noto_Serif } from "next/font/google";
import React from "react";
import { motion, Variants } from "framer-motion";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const steps = [
  "15,000 clients and counting",
  "No trends or food fats",
  "Built",
  "Pesticides & Herbicides",
  "Natural testing",
  "Sensory experience",
];

// Animation variant generator
const fadeInUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut" as const,
    },
  },
});

const Approach = () => {
  return (
    <div className="flex flex-col gap-6 md:justify-center w-full md:h-[100vh] md:px-[6rem] px-6 pt-[6rem]">

      <div className="flex flex-col items-center justify-center gap-6">
        <motion.h1
          className={`md:w-[50%] md:text-5xl text-4xl font-light text-center ${font.className}`}
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          How we validate our approach
        </motion.h1>

        <motion.p
          className="text-sm md:w-[40%] text-center"
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          In the journey to health and wellness, consistent rituals make the
          most long lasting change; we advocate for this. Holistic, gentle and
          built over time. We encourage you to support us with commitment and
          belief.
        </motion.p>
      </div>

      <motion.div
        className="border-b-[1px] pt-[4rem] pb-4"
        variants={fadeInUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className={`${font.className} text-2xl font-light`}>
          Enduring Ayurvedic Knowledge
        </h1>
      </motion.div>

      <div className="flex md:flex-row flex-col justify-between pt-6">

        <motion.div
          className="md:w-[50%] text-sm md:hidden block"
          variants={fadeInUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="max-w-lg">
            Dummy text about the saftey protocols that you put in place. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed odio tortor,
            ultricies nec dignissim quis, feugiat vel lorem. Sed venenatis nibh
            sit amet felis suscipit, quis ornare quam feugiat. Maecenas ut
            ullamcorper orci. In viverra pellentesque lorem at hendrerit.
            Aliquam ullamcorper bibendum felis,.
          </p>
        </motion.div>

        <div className="space-y-6 md:w-[40%] md:pt-0 pt-6">
          {steps.map((item, i) => (
            <motion.p
              key={i}
              className={`${font.className} text-xl font-light border-b pb-2`}
              variants={fadeInUp(0.5 + i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {item}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="md:w-[50%] text-sm md:block hidden"
          variants={fadeInUp(1.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="max-w-lg">
            Dummy text about the saftey protocols that you put in place. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed odio tortor,
            ultricies nec dignissim quis, feugiat vel lorem. Sed venenatis nibh
            sit amet felis suscipit, quis ornare quam feugiat. Maecenas ut
            ullamcorper orci. In viverra pellentesque lorem at hendrerit.
            Aliquam ullamcorper bibendum felis,.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Approach;
