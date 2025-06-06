"use client";

import { Noto_Serif } from "next/font/google";
import React from "react";
import { Button } from "./ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { products, testimonials } from "@/constants";
import { Triangle } from "lucide-react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const Products = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div className="flex flex-col md:gap-6 gap-6 w-full md:px-[6rem] px-6 py-[6rem]">
      <div className="flex justify-end w-full">
        <div className="md:flex gap-4 hidden">
          <Button onClick={() => api?.scrollPrev()} className="bg-[#BED9F3]">
            <Triangle className="size-4 -rotate-90 fill-white" />
          </Button>
          <Button onClick={() => api?.scrollNext()} className="bg-[#BED9F3]">
            <Triangle className="size-4 rotate-90 fill-white" />
          </Button>
        </div>{" "}
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-start items-center gap-10 w-full">
        <div className="space-y-6 md:w-[30%] flex flex-col">
          <h1 className={`md:text-4xl text-3xl ${font.className}`}>
            Our Product
            <br /> Range
          </h1>
          <p className="text-sm">
            We are here to completely change the way you look at your health. We
            are here to empower you with tools that will heal, nourish, restore,
            balance, energize, and rejuvenate you. 
          </p>
          <Button className="bg-[#CAF948] rounded-full uppercase text-xs md:w-full w-fit">
            See all
          </Button>
        </div>

        <div className="md:w-[60%]">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {products.map((item, index) => (
                <CarouselItem
                  className="w-full md:basis-1/2 basis-1/1"
                  key={index}
                >
                  <div className="flex md:flex-row flex-col gap-6 text-start items-center">
                    <div className="flex flex-col w-[90%] gap-4">
                      <div className="p-10 bg-neutral-300 rounded-md">
                        <Image
                          src={item.image}
                          alt="video"
                          width={1000}
                          height={600}
                        />
                      </div>
                      <h1 className="md:text-lg">{item.name}</h1>
                      <p className="text-xs">INR.{item.price}</p>
                      <Button className="gradient-green-1 text-xs rounded-full px-10 py-6 hover:cursor-pointer uppercase md:w-auto w-full">
                        Add to cart
                      </Button>
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
      </div>
    </div>
  );
};

export default Products;
