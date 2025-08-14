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
import { products, steps, testimonials } from "@/constants";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Steps = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  return (
    <div className="flex flex-col md:gap-6 gap-6 items-center justify-center text-center w-full md:px-[6rem] px-6 py-[6rem]">
      <div className="flex justify-between w-full">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-6">
            <h1 className={`md:text-[30px] text-3xl ${font.className}`}>
              Here’s the systematic approach{" "}
            </h1>
          </div>
          <div className="md:flex gap-4 hidden">
          <Button onClick={() => api?.scrollPrev()} className="bg-[#BED9F3] text-white rounded-none px-5 py-6 hover:opacity-50 hover:bg-[#BED9F3]"><Triangle className="size-3 -rotate-90 fill-white"/></Button>
          <Button onClick={() => api?.scrollNext()} className="bg-[#BED9F3] text-white rounded-none px-5 py-6 hover:opacity-50 hover:bg-[#BED9F3]"><Triangle className="size-3 rotate-90 fill-white"/></Button>
          </div>
        </div>
      </div>

      <div className="pt-[2rem]">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {steps.map((item, index) => (
              <CarouselItem
                className="w-full md:basis-1/3 basis-1/1 px-0"
                key={index}
              >
                <div className="flex md:flex-row flex-col md:gap-6 text-start items-center">
                  <div className="flex flex-col w-[90%] gap-4">
                    <div className="rounded-md">
                      <Image
                        src={item.image}
                        alt="video"
                        width={600}
                        height={600}
                      />
                    </div>
                    <h1 className={ `md:text-[30px] text-lg leading-tight ${font.className}`}>{item.title}</h1>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="md:hidden gap-4 flex justify-center">
          <Button onClick={() => api?.scrollPrev()} className="bg-[#BED9F3]">
            <Triangle className="size-4 -rotate-90 fill-white" />
          </Button>
          <Button onClick={() => api?.scrollNext()} className="bg-[#BED9F3]">
            <Triangle className="size-4 rotate-90 fill-white" />
          </Button>
        </div>
      </div>

        <Button className='gradient-green-1 text-xs rounded-full px-14 md:px-[6rem] py-8 md:py-6 hover:cursor-pointer uppercase md:w-fit w-fit md:tracking-normal tracking-wider'>Shop all</Button>
    </div>
  );
};

export default Steps;
