"use client";
import Aos from "aos";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

export const BlogDetail = () => {
  const graphRef = useRef(null);

  // Scroll rotation setup
  const { scrollYProgress } = useScroll({
    target: graphRef,
    offset: ["start end", "end start"], // when the element enters/leaves the screen
  });

  // Rotate from 0 to 360 degrees
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full pt-[6rem] md:pt-[10rem] md:px-0 px-6">
      <h1
        data-aos="fade-up"
        className={`md:w-[50%] md:text-5xl text-4xl  text-center ${font.className}`}
      >
        Know Yourself
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-sm md:w-[50%] leading-relaxed text-center"
      >
        No two individuals are alike. Each one of us is made up of a unique
        combination of factors, making our body requirements distinct. Let’s
        look at what sets us apart at a fundamental level, and how this
        influences our unique nutritional requirements.
      </p>

      <div className="max-w-lg text-sm pt-[6rem] space-y-6">
        <p>
          • <span className="font-semibold">Doshas</span> – Ayurveda says that
          the 5 elements of nature (earth, fire, water, air, and ether) manifest
          themselves in everything in different proportions. This combination is
          expressed as doshas in our bodies. We all have one of the 3 doshas,
          Kapha, Pitta, or Vaha, dominant in our body. Doshas guide us on what
          to eat and what to avoid. For ex, a Vata person is advised to consume
          warm drinks and food.
        </p>
        <p>
          • <span className="font-semibold">Gut Health</span> – Our digestive
          system’s main role is to break down food and absorb the nutrients. But
          how efficiently is it functioning? Also, what’s the environment of an
          individual’s gut microbiome? If someone is facing digestive issues
          like frequent bloating, it only makes sense for them to choose their
          food wisely.{" "}
        </p>
      </div>
    </div>
  );
};
