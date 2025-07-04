'use client'

import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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

const fadeIn = (isInView: boolean, delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: isInView ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.5, delay },
});

const Testimonials3 = () => {
  const [selected, setSelected] = useState<keyof typeof testimonials>("Dr.Andrew Huberman");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col md:px-[6rem] px-6 pt-[6rem]">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col md:gap-[4rem] gap-10 md:w-[70%]">
          <motion.div {...fadeIn(isInView, 0)}>
            <h1 className={`md:text-5xl font-light text-3xl ${font.className}`}>
              Sun Seekers
            </h1>
            <p className="text-sm text-zinc-600">
              The world’s top performers PersonalNutrtion.com
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap md:gap-10 gap-4 items-center text-sm" {...fadeIn(isInView, 0.2)}>
            {Object.keys(testimonials).map((name) => (
              <button
                key={name}
                onClick={() => setSelected(name as keyof typeof testimonials)}
                className={`px-3 py-1 transition ${selected === name ? "underline" : ""}`}
              >
                {name}
              </button>
            ))}
          </motion.div>

          <motion.div className="md:hidden block flex justify-center" {...fadeIn(isInView, 0.3)}>
            <Image src="/video1.png" alt="video" width={300} height={300} />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected + "_quote"}
              {...fadeIn(isInView, 0.4)}
            >
              <p className={`${font.className} md:text-3xl font-light md:w-[70%] text-xl leading-relaxed`}>
                {testimonials[selected].quote}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected + "_role"}
              {...fadeIn(isInView, 0.5)}
            >
              <p className="w-[60%] text-zinc-600 md:text-md text-sm">
                {testimonials[selected].role}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div {...fadeIn(isInView, 0.6)}>
            <Button className="text-black w-fit bg-transparent border-[1px] rounded-full px-10 py-4 shadow-none uppercase text-xs hover:bg-[#022425] hover:text-[#ffffff]">
              See more celebrities
            </Button>
          </motion.div>
        </div>

        <motion.div className="md:block hidden" {...fadeIn(isInView, 0.4)}>
          <Image src="/video1.png" alt="video" width={400} height={400} />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials3;
