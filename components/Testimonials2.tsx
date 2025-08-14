"use client";

import Aos from "aos";
import { Noto_Serif } from "next/font/google";
import React, { useEffect, useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import { Triangle } from "lucide-react";
import { testimonials } from "@/constants";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Testimonials2 = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div className="flex flex-col md:gap-6 gap-6 items-center justify-center text-center w-full md:px-[6rem] px-6 py-[6rem]">
      <div className="flex justify-end w-full">
        <div className="flex items-end justify-between md:w-[80%]">
          <div className="flex flex-col gap-6 justify-center items-center">
            <h1 className={`md:text-4xl text-3xl ${font.className}`}>
              We did this together
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-sm md:w-[70%] text-center"
            >
              Food, when matched to the unique body constitution and nutrition
              needs, has the power to transform health. 
            </p>
          </div>
          <div className="md:flex gap-4 hidden">
          <Button onClick={() => api?.scrollPrev()} className="bg-[#BED9F3] text-white rounded-none px-5 py-6 hover:opacity-50 hover:bg-[#BED9F3]"><Triangle className="size-3 -rotate-90 fill-white"/></Button>
          <Button onClick={() => api?.scrollNext()} className="bg-[#BED9F3] text-white rounded-none px-5 py-6 hover:opacity-50 hover:bg-[#BED9F3]"><Triangle className="size-3 rotate-90 fill-white"/></Button>
          </div>
        </div>
      </div>

      <div className="pt-[4rem]">
        <Carousel setApi={setApi}>
          <CarouselContent className="gap-10">
            {
              testimonials.map((item, index) => (
            <CarouselItem className="w-full md:basis-1/2 basis-1/1" key={index}>
              <div className="flex md:flex-row flex-col gap-6 text-start  md:items-stretch items-center">
                <div className="flex items-stretch">
                  <Image src={item.image} alt="video" width={300} height={400} />
                </div>
                <div className="flex flex-col justify-between md:w-[50%] md:gap-0 gap-6">
                  <h1 className={`md:text-[30px] text-2xl ${font.className}`}>
                    {item.title}
                  </h1>
                  <p className="text-sm md:pb-[6rem] leading-relaxed">
                    {item.text}
                  </p>
                  <p className="text-sm">-{item.name}</p>
                </div>
              </div>
            </CarouselItem>
              ))
            }
            </CarouselContent>
        </Carousel>
                  <div className="md:hidden gap-4 flex justify-center">
          <Button onClick={() => api?.scrollPrev()} className="bg-[#BED9F3] text-white"><Triangle className="size-4 -rotate-90 fill-white"/></Button>
          <Button onClick={() => api?.scrollNext()} className="bg-[#BED9F3] text-white"><Triangle className="size-4 rotate-90 fill-white"/></Button>
          </div>
      </div>
    </div>
  );
};

export default Testimonials2;
