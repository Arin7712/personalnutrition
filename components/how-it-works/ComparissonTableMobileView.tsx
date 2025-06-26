'use client';

import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: 'DIET PREFERENCES',
    desc: 'We tailor your diet according to your needs and preferences.',
  },
  {
    title: 'HEALTH GOALS',
    desc: 'We tailor our plan to your health goals and needs so that you are able to achieve your goals faster',
  },
  {
    title: 'BODY CONSTITUTION',
    desc: 'Each of us have a unique inherent composition and make up.',
  },
  {
    title: 'SEASON & ORIGIN',
    desc: 'Food that are seasonal and locally available',
  },
  {
    title: 'STRESS AND LIFESTYLE',
    desc: 'We analyse your current lifestyle and habits and help you build new ones and suggest practices that make you feel your best.',
  },
  {
    title: 'FAVORITES',
    desc: 'We include your favourite foods in our plan',
  },
];

const ComparisonTableMobile = () => {
  return (
    <div className="w-full px-6 pt-12">
      <h2 className="text-lg font-semibold mb-8 text-left">
        How We Are Different?
      </h2>

      <div className="rounded-xl border border-lime-300 overflow-hidden">
        {/* Header Cell */}
        <div className="text-center text-sm font-semibold py-4 border-b border-lime-300 bg-white">
          <p className="leading-4 italic">Personal<br />Nutrition</p>
        </div>

        {/* Feature Rows */}
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-start border-b border-lime-300 px-4 py-6 bg-white`}
          >
            <div className="flex flex-col max-w-[85%] pr-4">
              <h3 className="text-xs font-semibold mb-1">{item.title}</h3>
              <p className="text-[11px] text-gray-600 leading-snug">{item.desc}</p>
            </div>
            <div className="min-w-[24px] mt-1">
              <Check className="w-4 h-4 stroke-[3] text-black" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTableMobile;
