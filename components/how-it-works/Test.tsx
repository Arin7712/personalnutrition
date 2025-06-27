import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Test = () => {
  return (
    <div className=" md:w-[52%] bg-[url(/bullet3.png)] gap-4 bg-no-repeat bg-center w-full aspect-[1/1] flex flex-col justify-center items-center md:mx-auto md:py-0 py-[6rem]">
      <div className="flex gap-6 items-center ">
        <div className="flex gap-2">
        <Image src="/star.png" alt="video" width={15} height={15} />
        <Image src="/star.png" alt="video" width={15} height={15} />
        <Image src="/star.png" alt="video" width={15} height={15} />
        <Image src="/star.png" alt="video" width={15} height={15} />
        <Image src="/star.png" alt="video" width={15} height={15} />
        </div>
        <p>4.8</p>
      </div>
      <p className="text-md max-w-md text-center">“Excellent Experience. The visit was so memorable and I want to recommend this place to all my frds. Must visit.”</p>
      <p className="text-sm font-semibold text-center max-w-sm">Maria Lopez, Yoga trainer at Meshery</p>

    </div>
  );
};

export default Test;
