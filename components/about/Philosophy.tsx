'use client';

import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

// Animation variant factory
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

const Philosophy = () => {
  return (
    <div className="flex md:flex-row flex-col gap-[6rem] md:justify-between items-stretch w-full md:h-[100vh] md:px-[6rem] px-6 pt-[6rem] md:pt-[10rem]">

      {/* Left Block */}
      <div className="md:w-[50%] space-y-6 h-full flex flex-col justify-between">
        <motion.div
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image src="/about1.png" alt="about" width={600} height={400} />
        </motion.div>

        <div className="space-y-3">
          <motion.p
            className="uppercase text-sm"
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our philosophy
          </motion.p>
          <motion.h1
            className={`${font.className} text-3xl font-light`}
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Health is a matter of discovering your superfoods
          </motion.h1>
          <motion.p
            className="text-sm leading-loose mt-auto"
            variants={fadeInUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Food is the medicine we need to heal. But, when it comes to
            nutrition, one size doesn’t fit all...
          </motion.p>
        </div>
      </div>

      {/* Right Block */}
      <div className="md:w-[50%] space-y-6 h-full flex flex-col justify-between">
        <motion.div
          variants={fadeInUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image src="/about2.png" alt="about" width={600} height={400} />
        </motion.div>

        <div className="space-y-3">
          <motion.p
            className="uppercase text-sm"
            variants={fadeInUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our approach
          </motion.p>
          <motion.h1
            className={`${font.className} text-3xl font-light`}
            variants={fadeInUp(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We go personal
          </motion.h1>
          <motion.p
            className="text-sm leading-loose md:mt-[7%]"
            variants={fadeInUp(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We personalize the plan to the last atom possible...
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
