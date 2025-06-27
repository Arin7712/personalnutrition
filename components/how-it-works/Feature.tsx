import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Feature = () => {
  return (
    <div className="flex flex-col md:gap-[6rem] gap-[2rem] items-center justify-center text-center w-full pt-[6rem] md:px-[6rem] px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <div className="bg-[url(/bullet2.png)] bg-no-repeat bg-center p-6 md:p-[4rem] rounded-lg bg-cover flex flex-col item-center justify-center">
          <h1 className={`${font.className} text-lg md:text-3xl font-light uppercase`}>
            WEIGHT:
          </h1>
          <p className="text-sm">66.7 kg down to 61.4 kg</p>
        </div>
        <div className="bg-[url(/bullet.png)] bg-no-repeat bg-center p-6 md:p-[4rem] rounded-lg bg-cover flex flex-col item-center justify-center">
          <h1 className={`${font.className} text-lg md:text-3xl font-light uppercase`}>
            HbA1c: 
          </h1>
          <p className="text-sm">7.5% to 6.1%</p>
        </div>
        <div className="bg-[url(/bullet2.png)] bg-no-repeat bg-center p-6 md:p-[4rem] rounded-lg bg-cover flex flex-col item-center justify-center">
          <h1 className={`${font.className} text-lg md:text-3xl font-light uppercase`}>
            Wait and hips
          </h1>
          <p className="text-sm">Substantial reductions</p>
        </div>
        <div className="bg-[url(/bullet.png)] bg-no-repeat bg-center p-6 md:p-[4rem] rounded-lg bg-cover flex flex-col item-center justify-center">
          <h1 className={`${font.className} text-lg md:text-3xl font-light uppercase`}>
            FASTING BLOOD SUGAR:  
          </h1>
          <p className="text-sm">154 down to 103</p>
        </div>
        <div className="bg-[url(/bullet2.png)] bg-no-repeat bg-center p-6 md:p-[4rem] rounded-lg bg-cover flex flex-col item-center justify-center">
          <h1 className={`${font.className} text-lg md:text-3xl font-light uppercase`}>
            TRIGLYCERIDES: 
          </h1>
          <p className="text-sm">192 down to 150</p>
        </div>
        <div className="bg-[url(/bullet.png)] bg-no-repeat bg-center p-6 md:p-[4rem] rounded-lg bg-cover flex flex-col item-center justify-center">
          <h1 className={`${font.className} text-lg md:text-3xl font-light uppercase`}>
            VITAMIN D:
          </h1>
          <p className="text-sm">9.98 increased to 12.98</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
