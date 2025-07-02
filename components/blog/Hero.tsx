"use client";

import React, { useEffect } from "react";
import { Noto_Serif } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="flex flex-col gap-6 md:items-start items-center md:text-start text-center md:justify-center justify-start md:pt-[2rem] pt-[6rem] md:w-[50%] md:h-[100vh] md:px-[6rem] px-6">
      <h1
        data-aos="fade-up"
        className={`${font.className} md:text-5xl sm:text-5xl text-3xl`}
      >
        By being a little <span className="text-highlight">mindful</span>, you
        can make food work <span className="text-highlight">harder</span> for
        you
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-sm sm:w-[85%] w-[90%]"
      >
        Food is not only essential for survival but also a familiar comforter,
        has cultural significance, and is a bonding element at social occasions.
        We hardly think beyond the tantalizing smell and appetizing look of a
        dish before we take a helping. Only if we were a little more mindful, we
        could make food work harder for us. Food can be much more than the
        energy and nutrition storehouse we turn to 3 times a day.
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="md:block flex w-full text-xs text-neutral-500"
      >
        <p>By author name</p>
        <p>000000</p>
      </div>
    </div>
  );
};

export default Hero;
