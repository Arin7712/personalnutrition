'use client';

import { Noto_Serif } from 'next/font/google';
import React from 'react';

const points = [
  { text: "Food that suit your specific body type", left: "50%", top: "10%" },           // Top
  { text: "Tailored recommendations for food habits", left: "25%", top: "25%" },          // Top-left
  { text: "Point 3", left: "25%", top: "65%" },          // Bottom-left
  { text: "Point 4", left: "75%", top: "65%" },          // Bottom-right
  { text: "Example of the report", left: "75%", top: "25%" },          // Top-right
];

const font = Noto_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300'],
  display: 'swap',
});

export default function KeyBenefits2() {
  return (
    <div className="relative bg-[url(/singh.png)] bg-no-repeat bg-center bg-cover md:bg-contain mt-[6rem]  w-full md:min-h-screen flex md:flex-row md:pt-0 pt-[6rem] flex-col items-center justify-center bg-white">
      {/* Center content */}
      <div className="md:absolute text-center max-w-xl px-4 top-12 md:static">
        <h2 className="text-3xl font-light text-black">
          Key <span className="italic text-highlight font-light">benefits</span>
        </h2>
        <p className="text-sm mt-2 text-gray-700">
          Cras ac mattis libero, sit amet tristique lacus. Fusce at laoreet justo. Vivamus egestas dignissim laoreet.
        </p>
      </div>

      {/* Desktop Circular Points */}
      <div className="absolute w-full h-full hidden md:block">
        {points.map((point, i) => (
          <div
            key={i}
            className="absolute flex items-center text-base text-black space-x-2"
            style={{
              left: point.left,
              top: point.top,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className={`px-8 py-2 min-w-xs text-center text-sm rounded-full ${point.text == "Example of the report" ? "bg-lime-300": "bg-neutral-200/30"}`}>
                {point.text}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Stacked Points */}
      <div className="w-full px-6 pt-[4rem] flex flex-col items-center space-y-4 md:hidden">
        {points.map((point, i) => (
          <div key={i} className="flex items-center space-x-3 text-black">
                        <div className={`px-10 min-w-xs text-center py-2 w-full text-sm rounded-full ${point.text == "Example of the report" ? "bg-lime-300": "bg-neutral-400/10"}`}>
                {point.text}
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
}
