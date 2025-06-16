"use client";

import { articles } from "@/constants";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Article = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col gap-8 items-center justify-center w-full md:px-[6rem] px-6 pt-[6rem]">
        <h1
          data-aos="fade-up"
          className={`md:w-[50%] md:text-5xl text-4xl text-center ${font.className}`}
        >
          Latest Articles
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-sm md:w-[40%] text-center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          iaculis libero. Integer
        </p>
      </div>

      {/* Simple Horizontal Scroll Carousel */}
      <div className="md:pt-[4rem] pt-10 pb-[6rem] px-6 ">
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          grabCursor={true}
        >
          {articles.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "60%", maxWidth: 300 }}
              className="flex-shrink-0"
            >
              <div className="space-y-4">
                <div className="relative w-full">
                  <Image
                    src={item.image}
                    alt="article"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <Image
                    src="/arrow.png"
                    alt="arrow"
                    width={24}
                    height={24}
                    className="absolute top-3 right-3"
                  />
                </div>
                <h1
                  className={`md:text-xl text-lg ${font.className}`}
                >
                  {item.title}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Article;
