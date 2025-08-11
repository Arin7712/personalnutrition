"use client";

import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { Triangle } from "lucide-react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const testimonials = [
  {
    name: "Name Name",
    date: "01-05-25",
    product: "90 Days Gut Reset Program",
    title: "Wash your worries away",
    desc: "I have very sensitive skin and have to be super careful about what I put on my hands. I love this handwash for it's gentle formula and light, nautral scent. The bottle is also super pretty.",
  },
  {
    name: "Name Name",
    date: "01-05-25",
    product: "90 Days Gut Reset Program",
    title: "Wash your worries away",
    desc: "I have very sensitive skin and have to be super careful about what I put on my hands. I love this handwash for it's gentle formula and light, nautral scent. The bottle is also super pretty.",
  },
  {
    name: "Name Name",
    date: "01-05-25",
    product: "90 Days Gut Reset Program",
    title: "Wash your worries away",
    desc: "I have very sensitive skin and have to be super careful about what I put on my hands. I love this handwash for it's gentle formula and light, nautral scent. The bottle is also super pretty.",
  },
];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut" as const,
    },
  }),
};

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div className="flex md:flex-row flex-col gap-[6rem] md:items-start items-center md:justify-between w-full md:px-[6rem] px-6 pt-[6rem]">
      <motion.div
        className="flex flex-col gap-6 max-w-xs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        custom={0}
      >
        <h1 className={`${font.className} text-3xl font-light`}>
          100 Reviews With<br/> An Average Rating Of 4/5
        </h1>
        <p className="underline md:text-[16px] text-sm">Read all reviews</p>
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <motion.div key={i} variants={fadeInUp} custom={i + 1}>
              <Image src="/star2.png" alt="star" width={20} height={20} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        custom={1}
      >
        <Image src="/work.png" alt="work" width={400} height={400} />
      </motion.div>

      <div className="space-y-4 w-[30%] md:block hidden">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-3 border-b-[1px] pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={i + 2}
          >
            <div className="flex justify-between items-center text-sm">
              <h1>{item.name}</h1>
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Image
                    key={j}
                    src="/star2.png"
                    alt="star"
                    width={16}
                    height={16}
                  />
                ))}
              </div>
              <h1>{item.date}</h1>
            </div>

            <div className="flex gap-2 text-sm">
              <h1 className="text-neutral-500">Product</h1>
              <p>{item.product}</p>
            </div>

            <h1 className="text-sm">"{item.title}"</h1>

            <p className="text-[14px] leading-6">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden block">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {testimonials.map((item, i) => (
              <CarouselItem key={i}>
                <motion.div
                  className="flex flex-col gap-3 border-b-[1px] pb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={i + 1}
                >
                  <div className="flex justify-between items-center text-sm">
                    <h1>{item.name}</h1>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Image
                          key={j}
                          src="/star2.png"
                          alt="star"
                          width={16}
                          height={16}
                        />
                      ))}
                    </div>
                    <h1>{item.date}</h1>
                  </div>

                  <div className="flex gap-2 text-sm">
                    <h1 className="text-neutral-500">Product</h1>
                    <p>{item.product}</p>
                  </div>

                  <h1 className="text-sm">"{item.title}"</h1>

                  <p className="text-xs">{item.desc}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="pt-[3rem] flex justify-center gap-4">
          <Button
            onClick={() => api?.scrollPrev()}
            className="bg-[#BED9F3] text-white rounded-none"
          >
            <Triangle className="size-4 -rotate-90 fill-white" />
          </Button>
          <Button
            onClick={() => api?.scrollNext()}
            className="bg-[#BED9F3] text-white rounded-none"
          >
            <Triangle className="size-4 rotate-90 fill-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
