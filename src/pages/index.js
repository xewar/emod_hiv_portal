import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import About from "@/components/About";
import CountryPage from "@/components/CountryPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ current }) {
  return (
    <div className="flex flex-1 flex-col md:flex-row md:px-16">
      <div className="">
        {current === "about" ? (
          <About />
        ) : (
          <CountryPage currentCountry={current} />
        )}
      </div>
    </div>
  );
}
