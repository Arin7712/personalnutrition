import About from "@/components/About";
import Community from "@/components/Community";
import Event from "@/components/Event";
import Expert from "@/components/Expert";
import FAQ from "@/components/FAQ";
import { FeatureSteps } from "@/components/feature-section";
import { FeatureStepsDemo } from "@/components/FeatureStepsDemo";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Press from "@/components/Press";
import Products from "@/components/Products";
import Quiz from "@/components/Quiz";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import Testimonials2 from "@/components/Testimonials2";
import Testimonials3 from "@/components/Testimonials3";

export default function Home() {
  return (
    <div className="flex flex-col md:gap-[6rem]">
      <HomePage/>
      <Stats/>
      <Testimonials/>
      <About/>
      <Testimonials2/>
      <FeatureStepsDemo/>
      <Products/>
      <Expert/>
      <Steps/>
      <Quiz/>
      <Event/>
      <Testimonials3/>
      <FAQ/>
      <Press/>
      <Community/>
      <Footer/>
    </div>
  );
}
