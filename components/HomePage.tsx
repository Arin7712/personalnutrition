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
      <div className="relative md:z-10">
        {/* <Navbar /> */}
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

    </div>
  );
};

export default HomePage;
