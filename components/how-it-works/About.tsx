"use client";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay },
  });

  return (
    <div
      ref={ref}
      className="pt-[6rem] flex flex-col gap-6 items-center justify-center text-center md:px-0 px-6"
    >
      <motion.h1
        className={`md:text-4xl text-3xl md:max-w-xl font-light ${font.className}`}
        {...fadeIn(0)}
      >
        Personalised Nutrition Through Tongue And Agni Analysis
      </motion.h1>

      <motion.p
        className="text-sm md:w-[50%] leading-relaxed"
        {...fadeIn(0.2)}
      >
        What sets P-NUT apart is our approach. We examine your tongue and assess your Agni (digestive fire) before making any recommendations. We use advanced gut testing, for a deeper level of insight. This ensures that our advice is perfectly tailored to your personalised needs.
      </motion.p>

      <motion.div
        className="flex md:flex-row flex-col md:items-start items-center md:justify-between justify-center md:w-[50%] pt-[6rem] gap-6"
        {...fadeIn(0.4)}
      >
        <motion.div className="md:w-[50%]" {...fadeIn(0.5)}>
          <Image src="/tongue.png" alt="tongue" width={500} height={400} />
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 md:w-[50%] text-start text-sm leading-relaxed"
          {...fadeIn(0.6)}
        >
          <motion.p {...fadeIn(0.7)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </motion.p>
          <motion.p {...fadeIn(0.8)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </motion.p>
          <motion.p {...fadeIn(0.9)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </motion.p>
          <motion.p {...fadeIn(1.0)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-sm md:w-[40%] pt-6"
        {...fadeIn(1.2)}
      >
Your tongue reflects your gut health. Using tongue analysis, we assess your digestion, inflammation, and nutrient absorption to detect imbalances early and predict future issues. We examine your tongue’s colour, texture, and coating which allows us to identify toxins in the body. This preventive and curative approach helps us tailor your nutrition to improve gut health and support long-term wellness.      </motion.p>
    </div>
  );
};
