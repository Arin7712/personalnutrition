import { Noto_Serif } from "next/font/google";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Event = () => {
  return (
    <div className="flex flex-col gap-6  items-center justify-center w-full pt-[6rem] md:px-[6rem] px-6">
      <h1
        data-aos="fade-up"
        className={`md:w-[50%] md:text-5xl text-4xl  text-center ${font.className}`}
      >
        P-NUT events
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-sm md:w-[40%] text-center"
      >
        A lot is happening at our end. Big shifts, new development, and exciting
        meetups. {" "}
      </p>
      <Button className="rounded-full uppercase text-xs bg-white border-[1px] px-6 border-black">
        See more
      </Button>
      <div className="flex gap-4 md:gap-6 py-[6rem] overflow-x-auto md:overflow-x-visible scrollbar-hide">
        <Image src="/event1.png" alt="c1" width={400} height={400} />
        <Image src="/event2.png" alt="c1" width={400} height={400} />
        <Image src="/event3.png" alt="c1" width={400} height={400} />
      </div>
    </div>
  );
};

export default Event;
