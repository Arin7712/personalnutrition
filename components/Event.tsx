'use client';

import { Noto_Serif } from "next/font/google";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

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

const Event = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full pt-[6rem] md:px-[6rem] px-6">
      <motion.h1
        className={`md:w-[50%] md:text-5xl text-4xl text-center ${font.className}`}
        variants={fadeInUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        P-NUT events
      </motion.h1>

      <motion.p
        className="text-sm md:w-[40%] text-center"
        variants={fadeInUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        A lot is happening at our end. Big shifts, new development, and exciting
        meetups.
      </motion.p>

      <motion.div
        variants={fadeInUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Button className="rounded-full hover:bg-[#022425] hover:text-[#ffffff] uppercase text-xs bg-white border-[1px] px-10 md:py-2 py-4 md:px-6 border-black">
          See more
        </Button>
      </motion.div>

      {/* Mobile carousel (scrollable) & desktop static layout */}
      <div className="w-full">
        <div className="flex md:flex-row flex-nowrap md:justify-center gap-4 md:gap-6 py-[3.5rem] md:py-[6rem] overflow-x-auto md:overflow-x-visible scrollbar-hide">
          {[1, 2, 3].map((n, i) => (
            <motion.div
              key={i}
              variants={fadeInUp(0.6 + i * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="min-w-[280px] md:min-w-0 flex-shrink-0"
            >
              <Image
                src={`/event${n}.png`}
                alt={`event${n}`}
                width={400}
                height={400}
                className="rounded-lg md:block hidden"
              />
              <Image
                src={`/event${n}.png`}
                alt={`event${n}`}
                width={300}
                height={300}
                className="rounded-lg md:hidden block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
