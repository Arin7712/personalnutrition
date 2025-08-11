import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const report = [
  "Dosha based",
  " list of foods to 'favor' and 'Avoid' in your diet",
  "time & proportion to consume your meals",
  "Recommended lifestyle changes",
  "simple home remedies for your goals",
  "Favourites"
];


const Product4 = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-0 gap-10   justify-between items-center md:pt-[6rem] md:px-[6rem] px-6">
      <div className="md:w-[30%] space-y-6">
        <h1 className={`${font.className} text-3xl font-light`}>
          What's In Your<br/> Sensitivity Report?
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eleifend venenatis est, eu blandit augue ultricies in. Ut quis{" "}
        </p>
      </div>

      <div>
        <Image src="/report2.png" alt="report" width={500} height={400} />
      </div>

      <div className=" md:w-[30%] flex flex-col gap-6 items-start">
        <div className="space-y-6 pt-2">
                {report.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2"
                  >
                    <div className="rounded-full bg-black p-2 text-white text-xs">
                      0{i + 1}
                    </div>
                    <p className="md:text-[18px] text-sm uppercase text-neutral-500">{item}</p>
                  </div>
                ))}
              </div>
      </div>
    </div>
  );
};

export default Product4;
