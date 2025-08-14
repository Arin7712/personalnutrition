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
      <div className="space-y-6 max-w-6xl flex flex-col items-center">
        <h1
          className={`${font.className} md:text-[55px] text-3xl font-light`}
        >
          P-NUT Comes In Two Parts:{" "}
          <span className="text-highlight">The Sensitivity Report</span> And{" "}
          <span className="text-highlight">The Membership</span>
        </h1>
        <p className="text-sm max-w-md">
          We’ll start by testing your health as it is now. Then, we’ll stay with
          you as it begins to improve, day by day.
        </p>
      </div>
    </div>
  );
};

export default Hero;
