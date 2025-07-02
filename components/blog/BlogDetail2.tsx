import Image from "next/image";
import React from "react";

const BlogDetail2 = () => {
  return (
    <div className="flex md:flex-row items-center flex-col w-full md:h-screen py-[6rem]">
      <div className="md:w-[50%] w-full bg-[url('/ellipse2.png')] bg-cover h-screen">
      </div>
      <div className="md:px-[6rem] px-6 md:w-[50%] space-y-6 text-sm md:pt-0 pt-[6rem]">
                <p>
          • <span className="font-semibold">Lifestyle</span> –  The energy and nutrient requirement of a desk-bound individual differ greatly from someone active in the field. If they eat similar meals, one of them won’t be getting the nutrition they need.
        </p>
        <p>
          • <span className="font-semibold">Health Goals</span> – The diet requirements and meal plans depend on the health goals of an individual. A young man might aspire to have six-pack abs, while a young woman may desire glowing skin and shiny hair. Both of them will have different foods and portions on their plates.
        </p>
                <p>
          • <span className="font-semibold">Diet preferences</span> – Whether driven by culture, upbringing, or personal taste, people have different preferences for their food. Most often, what you like is also what you eat the most. Notice yourself, are you always veering towards the dessert counter?
        </p>
      </div>
    </div>
  );
};

export default BlogDetail2;
