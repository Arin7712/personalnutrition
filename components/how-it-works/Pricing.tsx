"use client";

import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const report = [
  "You Lorem ipsum dolor sit amet, consectetu adipiscing elit phasellus",
  "You Lorem ipsum dolor sit amet, consectetu adipiscing elit phasellus",
  "You Lorem ipsum dolor sit amet, consectetu adipiscing elit phasellus",
  "You Lorem ipsum dolor sit amet, consectetu adipiscing elit phasellus",
  "You Lorem ipsum dolor sit amet, consectetu adipiscing elit phasellus",
];

// Base fade-in variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2, // sequential delay
      ease: "easeOut" as const,
    },
  }),
};

const Pricing = () => {
  return (
    <div className="flex flex-col items-center gap-[6rem]">
      <div className="flex md:flex-row flex-col gap-[6rem] md:justify-center w-full md:px-[6rem] px-6 pt-[6rem]">
        {[1, 2].map((_, boxIndex) => (
          <motion.div
            key={boxIndex}
            className="rounded-lg bg-zinc-50 max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={boxIndex}
          >
            <motion.div
              className="overflow-hidden rounded-t-lg"
              variants={fadeInUp}
              custom={boxIndex + 0.1}
            >
              <Image
                src="/workbg.png"
                alt="Work"
                width={500}
                height={400}
                className="rounded-t-lg"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-6 p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h1
                className={`${font.className} font-light text-3xl`}
                variants={fadeInUp}
                custom={boxIndex + 0.2}
              >
                {boxIndex === 0
                  ? "Personalised Sensitivity Report"
                  : "Membership"}
              </motion.h1>

              <motion.p
                className={`text-sm max-w-xs ${
                  boxIndex !== 0 ? "md:pt-[8%]" : ""
                }`}
                variants={fadeInUp}
                custom={boxIndex + 0.3}
              >
                {boxIndex === 0
                  ? "Our easy, at-home tests give us an inside look at your unique biology."
                  : "Get your results and start eating in a way that makes you feel better."}
              </motion.p>

              <div className="space-y-6 pt-2">
                {report.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2"
                    variants={fadeInUp}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="rounded-full bg-black p-2 text-white text-xs">
                      0{i + 1}
                    </div>
                    <p className="text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <Button className="gradient-green-1  text-xs rounded-full px-10 py-6 hover:cursor-pointer uppercase md:w-auto w-fit">
        Choose your plan
      </Button>
    </div>
  );
};

export default Pricing;
