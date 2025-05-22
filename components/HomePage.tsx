import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="md:relative md:h-screen">
      {/* Background image for desktop */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/homebg.png')] bg-cover bg-[center_top_-150px] z-0 md:block hidden" />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>

      {/* Background image for mobile */}
      <Image
        src="/homebg.png"
        alt="homebg"
        className="w-full object-cover z-0 md:hidden block relative mt-10"
        width={400}
        height={400}
      />

      {/* Quiz vector on mobile, positioned in bottom right */}
      <div className="absolute bottom-10 right-10 z-50 md:block hidden">
        <Image
          src="/quiz-vector.png"
          alt="quiz vector"
          className="object-contain"
          width={150}
          height={150}
        />
      </div>
      <div className="z-50 md:hidden block">
        <Image
          src="/quiz-vector.png"
          alt="quiz vector"
          className="object-contain left-60 bottom-45 relative"
          width={140}
          height={140}
        />
      </div>
    </div>
  );
};

export default HomePage;
