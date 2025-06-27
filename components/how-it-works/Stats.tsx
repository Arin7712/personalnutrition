"use client";
import { stats } from "@/constants";
import Aos from "aos";
import { Noto_Serif } from "next/font/google";
import React, { useEffect } from "react";
import { NumberTicker } from "../magicui/number-ticker";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Stats = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex flex-col md:gap-[6rem] gap-[2rem] items-center justify-center text-center w-full md:px-0 px-6 pt-[6rem]">
      <h1 data-aos="fade-up" className={`md:w-[50%] font-light md:text-5xl text-3xl  text-center ${font.className}`}>
        Product Research Findings
      </h1>

      <div className="grid md:grid-cols-4 grid-cols-2 place-items-start gap-4 md:gap-30">
        {
            stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-6">
                    <div className={`rounded-lg p-10 bg-[#BED9F336] flex justify-center font-light items-center text-center text-5xl size-[10rem] ${font.className}`}>
                        <NumberTicker value={stat.value}/>%
                    </div>
                    <p className="md:w-[12rem] w-[10rem] font-light md:text-2xl text-sm text-[#022425]">{stat.name}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Stats;
