import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Philosophy = () => {
  return (
    <div className="flex md:flex-row flex-col gap-[6rem] md:justify-between items-stretch w-full md:h-[100vh] md:px-[6rem] px-6 pt-[6rem] md:pt-[10rem]">
      <div className="md:w-[50%] space-y-6 h-full flex flex-col justify-between">
        <Image src="/about1.png" alt="about" width={600} height={400} />
        <div className="space-y-3 ">
          <p className="uppercase text-sm">Our philosophy</p>
          <h1 className={`${font.className} text-3xl font-light`}>
            Health is a matter of discovering your superfoods
          </h1>
          <p className="text-sm leading-loose mt-auto">
            Food is the medicine we need to heal. But, when it comes to
            nutrition, one size doesn’t fit all. Everyone’s body has a unique
            constitution. And when we give it the nutrition as per its
            constitution, the body will experience optimal health. It is that
            simple. It isn’t rocket science. It is just nutrition science and
            ancient wisdom.
          </p>
        </div>
      </div>

      <div className="md:w-[50%] space-y-6 h-full flex flex-col justify-between">
        <Image src="/about1.png" alt="about" width={600} height={400} />
        <div className="space-y-3">
          <p className="uppercase text-sm">Our approach</p>
          <h1 className={`${font.className} text-3xl font-light`}>
            We go personal
          </h1>
          <p className="text-sm leading-loose md:mt-[7%]">
            We personalize the plan to the last atom possible. Your body has its
            own language and we decode it. We analyze the tongue, assess the
            agni (digestive fire), and study the body constitution. Our
            learnings from the data of 15,000 members help us get you results
            that truly matter. {" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
