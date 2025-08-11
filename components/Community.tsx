import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Community = () => {
  const images = ["/c1.png", "/c2.png", "/c3.png", "/c4.png", "/c4.png"];

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full md:px-[6rem] px-6 pt-[6rem]">
      <h1
        data-aos="fade-up"
        className={`md:w-[50%] md:text-5xl font-light text-4xl text-center ${font.className}`}
      >
        Join our community
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-sm md:w-[40%] text-center"
      >
        Follow us on instagram @personalnutrition for more updates
      </p>

      <div className="py-[4rem] w-full">
        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="flex md:hidden gap-6 overflow-x-auto scrollbar-hide">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`community-${index + 1}`}
              width={300}
              height={300}
              className="flex-shrink-0"
            />
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-5 gap-6">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`community-${index + 1}`}
              width={400}
              height={400}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
