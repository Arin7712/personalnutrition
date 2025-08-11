"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Noto_Serif } from "next/font/google";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const isMobile = useIsMobile();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isMobile) return;

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval, isMobile]);

  return (
    <div className={cn("md:py-[6rem]", className)}>
      <div className="mx-auto w-full">
        <div className="flex flex-col items-center md:grid md:grid-cols-2 w-full ">
          {/* Desktop Image Display */}
          <div
            className={cn(
              "relative min-h-screen md:h-[110vh] md:overflow-hidden items-center justify-center md:flex hidden"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="transition-transform transform w-full h-auto object-contain"
                        width={800}
                        height={800}
                      />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Text and Step Selection */}
          <div className="w-full h-[110vh] bg-[url('/ellipse2.png')] bg-no-repeat bg-center md:bg-[length:800px_800px] bg-[length:500px_500px] flex flex-col items-center justify-between py-6 md:pr-12">
            <h1 className={`md:text-4xl text-3xl ${font.className}`}>
              Our client goals
            </h1>
            <div className="flex flex-col space-y-6 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  onClick={() => isMobile && setCurrentFeature(index)}
                  className="flex items-center md:justify-end md:pl-0 pl-6 gap-6 md:gap-[2rem] cursor-pointer"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                  transition={{ duration: 1 }}
                >
                  <div className="md:w-xs text-left">
                    <h3 className="text-lg uppercase">
                      {feature.title || feature.step}
                    </h3>
                  </div>
                  <motion.div
                    className={cn(
                      "w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2",
                      index === currentFeature
                        ? "bg-primary border-primary text-primary-foreground scale-110"
                        : "bg-muted border-muted-foreground"
                    )}
                  >
                    <span className="md:text-xl text-lg">{index + 1}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center">
              <p className="md:w-[70%] text-center text-sm md:max-w-full max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                iaculis libero. Integer
              </p>
            </div>
          </div>

          {/* Mobile Image Display */}
          <div className="md:hidden block w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={features[currentFeature].image}
                  alt={features[currentFeature].step}
                  className="transition-transform transform w-full h-auto object-contain"
                  width={800}
                  height={800}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
