import React from "react";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-transparent flex flex-col justify-center text-center gap-y-12 mt-24">
        <div className="flex flex-col max-w-4xl mx-auto gap-y-5">
          <h1 className="title-hero">
            Generate Images, Text and Videos with AI
          </h1>
          <h2 className="desc-hero max-w-2xl mx-auto">
            Everything AI seamlessly integrated all the modern AI generation
            tools into one platform so that you can generate content with a
            single click.
          </h2>
        </div>
        <Button className="mx-auto">Book a demo</Button>
      </div>
      <Image
        className="mt-20"
        src={"/hero-image.png"}
        width={1200}
        height={700}
        alt="hero-image"
      />
    </div>
  );
};

export default Hero;
