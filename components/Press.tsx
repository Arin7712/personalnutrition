import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Press = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full md:px-[6rem] px-6 border-t-[1px] border-b-[1px] pt-[4rem]">
      <h1
        data-aos="fade-up"
        className={`md:w-[50%] md:text-5xl text-4xl  text-center ${font.className}`}
      >
        In the Press
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-sm md:w-[40%] text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel iaculis libero. Integer
      </p>

      <div className="grid  md:grid-cols-4 grid-cols-2 gap-14 md:gap-10 py-[3.5rem] md:py-[6rem]">
        <Image src='/box.png' alt='c1' width={400} height={400}  className="rounded-md"/>
        <Image src='/box.png' alt='c1' width={400} height={400}  className="rounded-md"/>
        <Image src='/box.png' alt='c1' width={400} height={400}  className="rounded-md"/>
        <Image src='/box.png' alt='c1' width={400} height={400}  className="rounded-md"/>

      </div>
    </div>
  );
};

export default Press;
