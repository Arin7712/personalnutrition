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

const About = () => {
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
    <div className="flex flex-col gap-6 items-center justify-center text-center w-full pt-[6rem] md:pt-[10rem] md:px-0 px-6">
      <p className="text-sm uppercase">understanding of nutrition</p>
      <h1
        data-aos="fade-up"
        className={`md:w-[50%] md:text-5xl text-4xl font-light text-center ${font.className}`}
      >
        Your gut is ruling
        <br /> <span className="text-highlight ">your world</span>
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-sm md:w-[50%] leading-relaxed"
      >
        Did you know that most diseases start in your gut? Ayurveda views the
        gut, or ‘Agni’ (digestive fire) as central to health. Modern science
        also calls the gut second brain in the human body. By making small
        changes in food as per Ayurvedic principles, gut health can vastly
        improve, leading to prevention and better management of lifestyle
        diseases. And in some cases, reversal as well. 
      </p>

      <div ref={graphRef}>
        {/* Graph with rotation on scroll */}
        <motion.img
          src="/goals.png"
          alt="goals"
          width={1000}
          height={300}
          style={{ rotate }}
          className="mx-auto"
        />
      </div>

      <div className="pt-[6rem] flex flex-col gap-6 items-center justify-center text-center">
        <h1 className={`md:text-4xl text-3xl ${font.className}`}>
          Your Tongue Is Giving You Signs
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-md md:w-[50%] leading-relaxed"
        >
          PersonalNutrition.com has developed an expertise in early risk
          prediction by analyzing the tongue. Our knowledge of Vedic wisdom
          sharpened by our experience with 15,000 clients has significantly
          contributed to the development of our cutting-edge clinical approach. 
        </p>

        <div className="flex md:flex-row flex-col md:items-start items-center md:justify-between justify-center md:w-[60%] pt-[6rem] gap-6">
          <div className="md:w-[55%]">
            <Image src="/tongue2.png" alt="tongue" width={500} height={400} />
          </div>
          <div className="flex flex-col gap-6 md:w-[50%] text-start text-[16px] font-light leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur arcu leo, at consectetur nunc consectetur ac. Duis ut
              nisi tempor, congue nisl at
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur arcu leo, at consectetur nunc consectetur ac. Duis ut
              nisi tempor, congue nisl at
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur arcu leo, at consectetur nunc consectetur ac. Duis ut
              nisi tempor, congue nisl at
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur arcu leo, at consectetur nunc consectetur ac. Duis ut
              nisi tempor, congue nisl at
            </p>
          </div>
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:text-md md:w-[50%] pt-6"
        >
          You will be surprised how much the tongue gives away about your
          health. Its colour, texture, shape, size, markings, and coatings – all
          of them are signs that our experts can decode. The tongue analysis has
          been proven as a preventative tool to change course for better health.
          We micro personalise your meal plan to cater to your body’s unique
          nutrition needs. Thriving health is possible. We get there one meal at
          a time.
        </p>
      </div>
    </div>
  );
};

export default About;
