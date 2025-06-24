import { Noto_Serif } from "next/font/google";
import React from "react";
import { Button } from "../ui/button";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const CTA = () => {
  return (
    <div className="flex flex-col gap-4 bg-[url(/aboutellipse.png)] bg-no-repeat bg-center items-center justify-center w-full h-[100vh] md:px-[6rem] px-6 mt-6  md:mt-[6rem]">
      <h1 className={`${font.className} text-3xl font-light`}>
        Join Our Community
      </h1>
      <p className="text-sm">Subscribe to our newsletters</p>
      <div className="relative w-full max-w-sm">
        <input
          type="email"
          placeholder="E-mail"
          className="w-full border-0 border-b border-gray-400 placeholder:text-sm placeholder:text-black focus:outline-none focus:border-black pb-2 pr-16 bg-transparent"
        />
        <button className="absolute uppercase right-0 top-0 text-sm font-medium text-black hover:underline">
          Send
        </button>
      </div>
      <p className="text-sm">You can also take our quiz to learn more</p>
      <Button className="gradient-green-1 text-xs rounded-full px-10 py-6 hover:cursor-pointer uppercase md:w-auto w-fit">
        {" "}
        Take the quiz
      </Button>
    </div>
  );
};

export default CTA;
