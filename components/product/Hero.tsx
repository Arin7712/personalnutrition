import { Noto_Serif } from "next/font/google";
import React from "react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-[3rem] items-center  text-center pt-[10rem] md:pt-[10rem] md:px-[6rem] px-6">
      <div className="space-y-6 max-w-3xl flex flex-col items-center">
        <h1
          className={`${font.className} md:text-[55px] text-3xl font-light`}
        >
          Sensitivity Report + Montly Subscribtion
        </h1>
        <p className="text-sm max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend venenatis est, eu blandit augue ultricies in. Ut quis viverra velit, sit amet maximus dolor. Quisque viverra massa eget mauris malesuada, at dictum eros rhoncus.
        </p>
      </div>
    </div>
  );
};

export default Hero;
