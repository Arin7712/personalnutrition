import HomePage from "@/components/HomePage";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col md:gap-[6rem]">
      <HomePage/>
      <Stats/>
    </div>
  );
}
