import { Noto_Serif } from "next/font/google";
import React from "react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-[3rem] items-center  text-center pt-[10rem] md:pt-[6rem] md:px-[6rem] px-6">
      <div className="space-y-6 max-w-3xl flex flex-col items-center">
        <h1
          className={`${font.className} md:text-4xl text-3xl font-light`}
        >
           A Personalized Food Sensitivity Report 
        </h1>
        <p className="text-sm max-w-md">
Foods and plants can heal you, we are here to help you discover those that do.  Built from insights from 15,000+ clients, our approach makes centuries of wisdom easy to apply in your daily life. Through a simple, non-invasive assessment—including a scan of your tongue (a window into gut health)—we deliver tailored recommendations, food plans, and practical steps that work with your body, not against it.        </p>
      </div>
    </div>
  );
};

export default Hero;
