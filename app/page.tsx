import About from "@/components/About";
import HomePage from "@/components/HomePage";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col md:gap-[6rem]">
      <HomePage/>
      <Stats/>
      <Testimonials/>
      <About/>
    </div>
  );
}
