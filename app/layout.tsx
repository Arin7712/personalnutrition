import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal Nutrition",
  description: "Interpret Your Gut To Interpret Your Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Navbar/>
      <div className="absolute bottom-10 right-10 z-20 fixed">
        <Image
          src="/quiz-vector.png"
          alt="quiz vector"
          className="object-contain md:block hidden"
          width={150}
          height={150}
        />
                <Image
          src="/quiz-vector.png"
          alt="quiz vector"
          className="object-contain md:hidden block"
          width={100}
          height={100}
        />
      </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
