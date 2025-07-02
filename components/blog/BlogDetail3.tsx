"use client";
import Aos from "aos";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

export const BlogDetail3 = () => {
  const graphRef = useRef(null);

  // Scroll rotation setup
  const { scrollYProgress } = useScroll({
    target: graphRef,
    offset: ["start end", "end start"], // when the element enters/leaves the screen
  });

  // Rotate from 0 to 360 degrees
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full pt-[6rem] md:pt-[10rem] md:px-0 px-6">
      <h1
        data-aos="fade-up"
        className={`md:w-[50%] md:text-5xl text-4xl  text-center ${font.className}`}
      >
        What next ?
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-sm md:w-[50%] leading-relaxed text-center"
      >
        It is crucial to understand and honour the unique constitution of each
        individual. Once we do so, we begin the journey to achieve optimal
        health and longevity. It’s time we say no to one-size-fits-all approach
        towards meals. Know yourself to discover what foods work the best for
        your body.
      </p>
      <div className="w-full pt-[6rem]">
        <Image src="/mu.png" alt="bullet" width={200} height={20} className="object-contain w-full h"/>
      </div>
    </div>
  );
};
