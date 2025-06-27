import { Noto_Serif } from "next/font/google";
import Image from "next/image";

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const About = () => {
  return (

<div className="pt-[6rem] flex flex-col gap-6 items-center justify-center text-center md:px-0 px-6">
        <h1 className={`md:text-4xl text-3xl md:max-w-lg font-light ${font.className}`}>
          Personalised nutrition through tongue and agni analysis
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-sm md:w-[50%] leading-relaxed"
        >
          What sets P-NUT apart is our approach. We examine your tongue and assess your Agni (digestive fire) before making any recommendations. We use advanced gut testing, for a deeper level of insight. This ensures that our advice is perfectly tailored to your personalised needs.
        </p>

        <div className="flex md:flex-row flex-col md:items-start items-center md:justify-between justify-center md:w-[50%] pt-[6rem] gap-6">
          <div className="md:w-[50%]">
            <Image src="/tongue.png" alt="tongue" width={400} height={400} />
          </div>
          <div className="flex flex-col gap-6 md:w-[50%] text-start text-sm leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur arcu leo, at consectetur nunc consectetur ac. Duis ut
              nisi tempor, congue nisl at
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur arcu leo, at consectetur nunc consectetur ac. Duis ut
              nisi tempor, congue nisl at
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur arcu leo, at consectetur nunc consectetur ac. Duis ut
              nisi tempor, congue nisl at
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              efficitur arcu leo, at consectetur nunc consectetur ac. Duis ut
              nisi tempor, congue nisl at
            </p>
          </div>
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-sm md:w-[40%] pt-6"
        >
Your tongue reflects your gut health. Using tongue analysis, we assess your digestion, inflammation, and nutrient absorption to detect imbalances early and predict future issues. We examine your tongue’s colour, texture, and coating which allows us to identify toxins in the body. This preventive and curative approach helps us tailor your nutrition to improve gut health and support long-term wellness.
        </p>
      </div>

  )}