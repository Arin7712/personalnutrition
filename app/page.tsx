import About from "@/components/About";
import Article from "@/components/Article";
import Community from "@/components/Community";
import Event from "@/components/Event";
import Expert from "@/components/Expert";
import FAQ from "@/components/FAQ";
import { FeatureStepsDemo } from "@/components/FeatureStepsDemo";
import HomePage from "@/components/HomePage";
import Test from "@/components/how-it-works/Test";
import Press from "@/components/Press";
import Products from "@/components/Products";
import Quiz from "@/components/Quiz";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import Testimonials2 from "@/components/Testimonials2";
import Testimonials3 from "@/components/Testimonials3";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex flex-col md:gap-[6rem]">
      <HomePage/>
      <Stats/>
      <Testimonials/>
      <div className="relative md:w-[52%] w-full aspect-[1/1] md:mx-auto md:py-0 py-[6rem]">
        <Image
          src="/ellipse.png"
          alt="sunseekers"
          fill
          className="object-contain"
        />
        <h1
          className={`absolute flex flex-col item-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-4xl md:max-w-md text-3xl z-1 leading-16 ${font.className}`}
        >
          100 Reviews With An Average Rating Of 4/5 ✨
        </h1>
      </div>
      <About/>
      <Testimonials2/>
      <FeatureStepsDemo/>
      <Products/>
      <Quiz/>
      <Expert/>
      <Steps/>
      <Event/>
      <Testimonials3/>
      <FAQ/>
      <Press/>
      <Article/>
      <Community/>
    </div>
  );
}
