import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";
const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Science = () => {
  return (
    <div className="md:px-[6rem] px-6">
      <div className="flex flex-col md:flex-row md:py-[6rem] py-[2rem]">
        <div className="flex flex-col md:gap-[4rem] gap-6 md:w-[50%]">
          <div className="space-y-4">
            <h1 className={`md:text-4xl text-3xl font-light ${font.className}`}>
              As Science Evolves So Does Our Approach To Nutrition
            </h1>
          </div>
          <div className="space-y-8">
            <p className="md:text-md md:w-[70%] text-sm leading-loose">
              Just like fingerprints, our nutrition requirements are unique.
              They are a sum total of our metabolic rate, gut health, stress
              levels, lifestyle, immune system, age, gender, body constitution,
              genetics, and medical history. Dividing food requirements into
              macronutrients like carbs, fats, and proteins, or into
              micronutrients, is not exhaustive.
            </p>
            <p className="md:text-md md:w-[70%] text-sm leading-loose">
              Our research through modern science, in-depth study of ancient
              wisdom, and experience with 15,000+ clients have earned us
              unparalleled knowledge in personalised nutrition and health. 
            </p>
            <p className="md:text-md md:w-[70%] text-sm leading-loose">
              Just as nature has made you unique, it has made precise food and
              herbs to keep you healthy. Discover them with us. 
            </p>
          </div>
          <div>
            <p className="w-[60%] md:text-md text-sm underline">
              Read our public research
            </p>
          </div>
        </div>

        <div className="flex md:w-[50%]  justify-center items-center md:pt-0 pt-[4rem]">
          <Image src="/mock5.png" alt="video" width={550} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Science;
