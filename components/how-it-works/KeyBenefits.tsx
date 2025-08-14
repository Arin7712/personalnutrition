'use client';

import { Noto_Serif } from 'next/font/google';
import React from 'react';

const points = [
  { text: "Lorem ipsum", left: "50%", top: "10%" },           // Top
  { text: "Lorem ipsum", left: "25%", top: "25%" },          // Top-left
  { text: "Lorem ipsum", left: "25%", top: "65%" },          // Bottom-left
  { text: "Lorem ipsum", left: "50%", top: "80%" },         // Bottom
  { text: "Lorem ipsum", left: "75%", top: "65%" },          // Bottom-right
  { text: "Example of the report", left: "75%", top: "25%" },          // Top-right
];

const font = Noto_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300'],
  display: 'swap',
  style: 'normal'
});

export default function KeyBenefits() {
  return (
    <div className="relative w-full md:min-h-screen flex md:flex-row md:pt-0 pt-[6rem] flex-col items-center justify-center bg-white">
      {/* Center content */}
      <div className="md:absolute text-center max-w-xl px-4 top-12 md:static">
        <h2 className={`text-3xl md:text-[55px] font-light text-black ${font.className}`}>
          Key <span className={`${font.className} font-light`}>benefits</span>
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
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <span>{point.text}</span>
          </div>
        ))}
      </div>

      {/* Mobile Stacked Points */}
      <div className="w-full px-6 pt-6 flex flex-col space-y-4 md:hidden">
        {points.map((point, i) => (
          <div key={i} className="flex items-center space-x-3 text-black">
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <span>{point.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="md:absolute bottom-8 w-full flex justify-center px-4 md:pt-0 pt-10">
        <button className="bg-gradient-to-r from-lime-300 to-green-400 hover:from-lime-400 hover:to-green-500 md:px-[2rem] px-6 py-4 rounded-full text-sm font-medium">
          BUY YOUR REPORT NOW
        </button>
      </div>
    </div>
  );
}
