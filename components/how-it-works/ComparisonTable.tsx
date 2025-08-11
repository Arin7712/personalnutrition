'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import { Noto_Serif } from 'next/font/google';
import { motion } from 'framer-motion';

const font = Noto_Serif({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
  display: 'swap',
});

const features = [
  {
    title: 'TAILORED DIET',
    desc: 'We tailor your diet according to your needs and preferences.',
  },
  {
    title: 'ACCELERATE HEALTH',
    desc: 'We tailor our plan to your health goals and needs so that you are able to achieve your goals faster',
  },
  {
    title: 'BODY CONSTITUTION',
    desc: 'Each of us have a unique inherent composition and make up.',
  },
  {
    title: 'INDIGENOUS RECOMMENDATIONS',
    desc: 'Food that are seasonal and locally available',
  },
  {
    title: 'STRESS AND LIFESTYLE',
    desc: 'We analyse your current lifestyle and habits and help you build new ones and suggest practices that make you feel your best.',
  },
  {
    title: 'FAVOURITES',
    desc: 'We include your favourite foods in our plan',
  },
];

const customiChecks = [true, true, true, true, true, true];
const customizedChecks = [false, false, false, false, false, false];

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
      delay,
    },
  },
});

const ComparisonTable = () => {
  return (
    <div className="w-full px-6 md:px-[6rem] pt-[6rem]">
      <h2
        className={`text-center text-3xl font-light mb-12 md:block hidden ${font.className}`}
      >
        How We Are Different?
      </h2>
      <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[1.5fr_1fr_1fr] border-t border-gray-300 text-sm">
        {/* Header Row */}
        <div className="md:block hidden"></div>
        <div
          className={`md:hidden block text-center font-light py-4 text-xl ${font.className}`}
        >
          How We Are Different?
        </div>

        <div className="text-center text-xl font-extralight border-l border-gray-300 border-r border-gray-300 py-4 relative">
          <div className="border border-lime-300 rounded-t-xl  absolute -top-[1px] left-0 right-0 bottom-0 z-[-1]"></div>
          <span className={`${font.className} italic`}>Personal</span><br/> Nutrition
        </div>
        <div className="text-center font-extralight py-4 md:block hidden uppercase text-xl">
          Other Brands
        </div>

        {/* Rows */}
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            {/* Feature Description */}
            <motion.div
              className="border-t border-gray-300 py-6 pr-6"
              variants={fadeIn(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="font-extralight text-md md:text-xl">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs max-w-sm pt-1">
                {feature.desc}
              </p>
            </motion.div>

            {/* Customi column */}
            <motion.div
              className="border-l border-r border-gray-300 border-t flex items-center justify-center"
              variants={fadeIn(index * 0.2 + 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {customiChecks[index] ? (
                <Check className="size-6 stroke-[3] text-black" />
              ) : (
                <X className="size-6 stroke-[3] text-black" />
              )}
            </motion.div>

            {/* Customized column */}
            <motion.div
              className="border-t items-center justify-center md:flex hidden"
              variants={fadeIn(index * 0.2 + 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {customizedChecks[index] ? (
                <Check className="size-6 stroke-[3] text-black" />
              ) : (
                <X className="size-6 stroke-[3] text-black" />
              )}
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
