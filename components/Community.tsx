import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Community = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full md:px-[6rem] px-6">
      <h1
        data-aos="fade-up"
        className={`md:w-[50%] md:text-5xl text-4xl  text-center ${font.className}`}
      >
        Join our community
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-sm md:w-[40%] text-center"
      >
        Follow us on instagram @personalnutrition for more updates{" "}
      </p>

      <div className="grid  md:grid-cols-4 grid-cols-2 gap-10 py-[6rem]">
        <Image src='/c1.png' alt='c1' width={400} height={400} />
                <Image src='/c2.png' alt='c1' width={400} height={400} />
        <Image src='/c3.png' alt='c1' width={400} height={400} />
        <Image src='/c4.png' alt='c1' width={400} height={400} />

      </div>
    </div>
  );
};

export default Community;
