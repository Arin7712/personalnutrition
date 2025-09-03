"use client";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bullet from "@/public/bullet.png";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Feature = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  return (
    <div
      ref={ref}
      className="flex flex-col md:gap-[6rem] gap-[2rem] items-center justify-center md:text-center w-full pt-[6rem] md:px-[6rem] px-6"
    >
      <motion.h1
        className={`md:text-4xl text-3xl md:max-w-xl font-light ${font.className}`}
        {...fadeIn(0)}
      >
        Key Improvements Of One Of The Clients
      </motion.h1>{" "}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {[
          {
            title: "WEIGHT:",
            desc: "66.7 kg down to 61.4 kg",
            bg: "/bullet2.png",
          },
          { title: "HbA1c:", desc: "7.5% to 6.1%", bg: "bullet.png" },
          {
            title: "Wait and hips",
            desc: "Substantial reductions",
            bg: "/bullet2.png",
          },
          {
            title: "FASTING BLOOD SUGAR:",
            desc: "154 down to 103",
            bg: "/bullet.png",
          },
          {
            title: "TRIGLYCERIDES:",
            desc: "192 down to 150",
            bg: "/bullet2.png",
          },
          {
            title: "VITAMIN D:",
            desc: "9.98 increased to 12.98",
            bg: "/bullet.png",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            style={{ backgroundImage: `url(${item.bg})` }}
            className={`border md:border-none bg-no-repeat bg-center p-6 md:p-[4rem] rounded-lg bg-cover flex flex-col item-center justify-center`}
            {...fadeIn(index * 0.2)}
          >
            <h1
              className={`${font.className} text-lg md:text-3xl font-light uppercase`}
            >
              {item.title}
            </h1>
            <p className="text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
