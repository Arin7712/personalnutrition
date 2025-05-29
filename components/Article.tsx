import { articles } from "@/constants";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Article = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 items-center justify-center w-full md:px-[6rem] px-6 pt-[6rem]">
        <h1
          data-aos="fade-up"
          className={`md:w-[50%] md:text-5xl text-4xl  text-center ${font.className}`}
        >
          Latest Articles
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-sm md:w-[40%] text-center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel iaculis libero. Integer
        </p>
      </div>

<div className="md:pt-[4rem] pt-10 flex flex-row gap-6 overflow-x-auto scrollbar-hide md:px-0 px-6 pb-[6rem]">
  {articles.map((item, index) => (
    <div key={index} className="space-y-4 flex-shrink-0 md:w-[20%] w-[50%]">
      <Image src={item.image} alt="video" width={300} height={400} />
      <h1 className={ `md:text-2xl md:w-[60%] text-lg ${font.className}`}>{item.title}</h1>
    </div>
  ))}
</div>
    </div>
  );
};

export default Article;
