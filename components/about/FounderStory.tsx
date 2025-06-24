"use client";

import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const fadeInUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut" as const,
    },
  },
});

const FounderStory = () => {
  return (
    <div className="flex md:flex-row flex-col gap-6 md:gap-[6rem] md:justify-between w-full md:h-[100vh] md:px-[6rem] px-6 pt-[6rem]">
      <div className="md:w-[50%] flex flex-col justify-between h-full md:max-w-xl">
        <motion.h1
          className={`${font.className} font-normal text-3xl`}
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Founder story
        </motion.h1>

        <div className="space-y-4 text-sm leading-loose md:pt-0 pt-6">
          <motion.p
            className="md:block hidden"
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eleifend venenatis est, eu blandit augue ultricies in. Ut quis
            viverra velit, sit amet maximus dolor. Quisque viverra massa eget
            mauris malesuada, at dictum eros rhoncus. viverra massa eget mauris
            viverra massa eget mauris viverra massa eget mauris viverra .{" "}
          </motion.p>
          <motion.p
            variants={fadeInUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eleifend venenatis est, eu blandit augue ultricies in. Ut quis
            viverra velit, sit amet maximus dolor. Quisque viverra massa eget
            mauris malesuada, at dictum eros rhoncus. Lorem ipsum dolor sit
            amet,{" "}
          </motion.p>
          <motion.p
            className="md:block hidden"
            variants={fadeInUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eleifend venenatis est, eu blandit augue ultricies in. Ut quis
            viverra velit, sit amet maximus dolor. Quisque viverra massa eget
            mauris malesuada, at dictum eros rhoncus. Lorem ipsum dolor sit
            amet,{" "}
          </motion.p>
        </div>
      </div>

      <div className="space-y-6 md:w-[50%] md:max-w-xl flex flex-col md:items-start items-center">
        <motion.div
          variants={fadeInUp(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/about-founder-section.png"
            alt="about"
            width={400}
            height={400}
          />
        </motion.div>

        <div className="space-y-4 text-sm leading-loose">
          <motion.p
            variants={fadeInUp(1.0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eleifend venenatis est, eu blandit augue ultricies in. Ut quis
            viverra velit, sit amet maximus dolor. Quisque viverra massa eget
            mauris malesuada, at dictum eros rhoncus.{" "}
          </motion.p>
          <motion.p
            variants={fadeInUp(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eleifend venenatis est, eu blandit augue ultricies in. Ut quis
            viverra velit, sit amet maximus dolor. Quisque viverra massa eget
            mauris malesuada, at dictum eros rhoncus.{" "}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default FounderStory;
