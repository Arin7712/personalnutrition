'use client';

import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

const fadeIn = (isInView: boolean, delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: isInView ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.5, delay },
});

const Test = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="md:w-[52%] bg-[url(/bullet3.png)] gap-4 bg-no-repeat bg-center w-full aspect-[1/1] flex flex-col justify-center items-center md:mx-auto md:py-0 py-[6rem]"
    >
      <motion.div className="flex gap-6 items-center" {...fadeIn(isInView, 0)}>
        <div className="flex gap-2">
          <Image src="/star.png" alt="star" width={15} height={15} />
          <Image src="/star.png" alt="star" width={15} height={15} />
          <Image src="/star.png" alt="star" width={15} height={15} />
          <Image src="/star.png" alt="star" width={15} height={15} />
          <Image src="/star.png" alt="star" width={15} height={15} />
        </div>
        <p>4.8</p>
      </motion.div>

      <motion.p
        className="text-md max-w-md text-center"
        {...fadeIn(isInView, 0.2)}
      >
        “Excellent Experience. The visit was so memorable and I want to recommend this place to all my frds. Must visit.”
      </motion.p>

      <motion.p
        className="text-sm font-semibold text-center max-w-sm"
        {...fadeIn(isInView, 0.4)}
      >
        Maria Lopez, Yoga trainer at Meshery
      </motion.p>
    </div>
  );
};

export default Test;
