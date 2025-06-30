import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Product1 = () => {
  return (
    <div className="flex md:flex-row flex-col w-full md:h-screen mt-[6rem]">
      <div className="md:w-[50%]">
        <Image
          src="/product6.png"
          alt="quiz"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="bg-[url(/workellipse.png)] bg-cover bg-center bg-no-repeat md:w-[50%] px-[4rem] md:px-[10rem] md:h-[100vh] md:py-0 py-[6rem] flex flex-col gap-6 justify-center items-center">
        <h1 className={`${font.className} text-4xl text-center font-light`}>
          Get Your <span className="text-highlight">90 Days Program</span>
        </h1>
        <p className="text-sm">Choose your Option:</p>
        <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 flex flex-row gap-6 ">
                <div>
                    <Checkbox/>
                </div>
                <div className="space-y-2">
                    <h1 className={`${font.className} text-3xl font-light`}>1-Time Purchase</h1>
                    <p className="text-sm font-medium">Starting at ₹00,000 →</p>
                    <p className="text-xs text-neutral-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend venenatis est
                    </p>
                </div>
            </div>

             <div className="bg-white rounded-xl p-6 flex flex-row gap-6 ">
                <div>
                    <Checkbox/>
                </div>
                <div className="space-y-2">
                    <h1 className={`${font.className} text-3xl font-light`}>Monthly Subscription</h1>
                    <p className="text-sm font-medium">Starting at ₹00,000 →</p>
                    <p className="text-xs text-neutral-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend venenatis est
                    </p>
                </div>
            </div>
        </div>
        <Button className="gradient-green-1 text-xs rounded-full px-14 py-4 hover:cursor-pointer uppercase md:w-auto w-full">
          {" "}
          Next
        </Button>
      </div>
    </div>
  );
};

export default Product1;
