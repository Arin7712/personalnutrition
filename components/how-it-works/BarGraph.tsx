'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

type BarData = {
  label: string;
  before: number;
  after: number;
};

type BarGraphProps = {
  data: BarData[];
  maxValue?: number;
};

export default function BarGraph({ data, maxValue = 200 }: BarGraphProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const maxHeight = 400;

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const ticks = [200, 150, 100, 50, 0];

  return (
    <div ref={ref} className="w-full py-24 bg-white ">
      {/* Legend */}
      <div className="text-center mb-8 flex justify-center w-full font-medium text-sm">
        <div className="text-blue-400 mr-6 flex items-center gap-1">
          Before <div className="bg-blue-400 size-4" />
        </div>
        <div className="text-lime-400 mr-6 flex items-center gap-1">
          After <div className="bg-lime-400 size-4" />
        </div>
      </div>

      {/* Chart Row */}
      <div className="flex items-end justify-center gap-10 h-[500px] px-6 overflow-x-auto scrollbar-hide">
        {/* Y-Axis Line and Labels */}
        <div className="relative h-[430px] w-10 flex flex-col justify-between items-end pr-2 text-xs text-gray-500">
          {ticks.map((val, idx) => (
            <div
              key={idx}
              className="relative flex items-center justify-end w-full"
              style={{ height: maxHeight / (ticks.length - 1) }}
            >
              <span className="translate-y-1">{val}</span>
            </div>
          ))}
          <div className="absolute top-0 right-0 h-full border-r-[1px] border-neutral-800"></div>
        </div>

        {/* Bar Chart */}
        {data.map((item, i) => {
          const beforeHeight = (item.before / maxValue) * maxHeight;
          const afterHeight = (item.after / maxValue) * maxHeight;

          return (
            <div
              key={i}
              className="flex flex-col items-center w-24 text-center text-sm font-light"
            >
              <div className="relative w-full h-[400px] border-r-[1px] border-neutral-800 flex items-end justify-center gap-3">
                {/* Before Bar */}
                <motion.div
                  className="w-5 bg-blue-200"
                  initial={{ height: 0 }}
                  animate={controls}
                  variants={{
                    visible: { height: beforeHeight },
                  }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                />
                {/* After Bar */}
                <motion.div
                  className="w-5 bg-lime-400"
                  initial={{ height: 0 }}
                  animate={controls}
                  variants={{
                    visible: { height: afterHeight },
                  }}
                  transition={{ duration: 0.7, delay: i * 0.1 + 0.05 }}
                />
              </div>
              <div className="mt-3 whitespace-pre-line text-xs">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
