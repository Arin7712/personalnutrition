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
import { Triangle } from "lucide-react";

export const products = [
  {
    image: "/product1.png",
    name: "Personalized Food Report",
    price: 0,
  },
  {
    image: "/product2.png",
    name: "90-Day Gut Reset Program",
    price: 0,
  },
];

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
          <Button onClick={() => api?.scrollPrev()} className="bg-[#BED9F3] text-white rounded-none">
            <Triangle className="size-4 -rotate-90 fill-white" />
          </Button>
          <Button onClick={() => api?.scrollNext()} className="bg-[#BED9F3] text-white rounded-none">
            <Triangle className="size-4 rotate-90 fill-white" />
          </Button>
        </div>
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
          <Button className="bg-[#CAF948] py-4 rounded-full uppercase text-xs md:w-full w-fit px-10">
            See all
          </Button>
        </div>

        <div className="md:w-[60%]">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {products.map((item, index) => (
                <CarouselItem className="w-full md:basis-1/2 basis-1/1" key={index}>
                  <div className="flex md:flex-row flex-col gap-6 text-start items-center">
                    <div className="flex flex-col w-[90%] gap-2 md:gap-4">
                      {/* Inner Carousel */}
                      <div className="relative p-10 bg-neutral-100 rounded-md">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {[1, 2, 3].map((_, i) => (
                              <CarouselItem key={i} className="w-full">
                                <Image
                                  src={item.image}
                                  alt={`carousel-image-${i}`}
                                  width={1000}
                                  height={600}
                                  className="rounded-md object-cover w-full"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className=" left-[-20] z-10 bg-none" />
                          <CarouselNext className="right-[-30] z-10 bg-none" />
                        </Carousel>
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

          {/* Mobile Prev/Next */}
          <div className="md:hidden gap-4 flex justify-center pt-6">
            <Button onClick={() => api?.scrollPrev()} className="bg-[#BED9F3] text-white rounded-none">
              <Triangle className="size-4 -rotate-90 fill-white" />
            </Button>
            <Button onClick={() => api?.scrollNext()} className="bg-[#BED9F3] text-white rounded-none">
              <Triangle className="size-4 rotate-90 fill-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
