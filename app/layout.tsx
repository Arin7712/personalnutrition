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
      <div className="absolute md:bottom-10 bottom-20 right-10 z-20  fixed">
        <Image
          src="/quiz-vector.png"
          alt="quiz vector"
          className="object-contain"
          width={150}
          height={150}
        />
      </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
