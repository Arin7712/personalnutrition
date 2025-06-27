'use client'
import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";


const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const testimonials = {
  "Dr.Andrew Huberman": {
    quote:
      "“I’ve been using P-NUT since 2012 because it’s the simplest, most straightforward way for me to get my bases of important vitamins, minerals, and probiotics.”",
    role:
      "NEUROSCIENTIST, HOST OF THE HUBERMAN LAB PODCAST, Personal Nutrition PARTNER",
  },
  "Allyson Felix": {
    quote:
      "“P-NUT gives me the energy and recovery I need to stay at the top of my game.”",
    role: "OLYMPIAN, WORLD CHAMPION SPRINTER",
  },
  "Sir Lewis Hamilton": {
    quote:
      "“As a Formula 1 driver, I rely on P-NUT for my performance and recovery needs.”",
    role: "FORMULA 1 DRIVER, WORLD CHAMPION",
  },
  "Jeremy Jauncey": {
    quote:
      "“P-NUT fits perfectly into my travel-heavy lifestyle and keeps me feeling my best.”",
    role: "FOUNDER OF BEAUTIFUL DESTINATIONS, HEALTH ADVOCATE",
  },
};

const fadeVariant = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const Testimonials3 = () => {
const [selected, setSelected] = useState<keyof typeof testimonials>("Dr.Andrew Huberman");

  return (
    <div className="flex flex-col md:px-[6rem] px-6 pt-[6rem]">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col md:gap-[4rem] gap-10 md:w-[70%]">
          <div className="space-y-4">
            <h1 className={`md:text-5xl font-light text-3xl ${font.className}`}>
              Sun Seekers
            </h1>
            <p className="text-sm text-zinc-600">
              The world’s top performers PersonalNutrtion.com
            </p>
          </div>

          <div className="flex flex-wrap md:gap-10 gap-4 items-center text-sm">
            {Object.keys(testimonials).map((name) => (
              <button
                key={name}
                onClick={() => setSelected(name as keyof typeof testimonials)}
                className={`px-3 py-1 transition ${
                  selected === name ? "underline" : ""
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="md:hidden block flex justify-center">
            <Image src="/video1.png" alt="video" width={300} height={300} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected + "_quote"}
              variants={fadeVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p
                className={`${font.className} md:text-3xl font-light md:w-[70%] text-xl leading-relaxed`}
              >
                {testimonials[selected].quote}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected + "_role"}
              variants={fadeVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p className="w-[60%] text-zinc-600 md:text-md text-sm">
                {testimonials[selected].role}
              </p>
            </motion.div>
          </AnimatePresence>
        <Button className="text-black w-fit bg-transparent border-[1px] rounded-full px-10 py-4 shadow-none uppercase text-xs hover:bg-[#022425] hover:text-[#ffffff]">See more celebrities</Button>
        </div>



        <div className="md:block hidden">
          <Image src="/video1.png" alt="video" width={400} height={400} />
        </div>
      </div>

    </div>
  );
};

export default Testimonials3;
