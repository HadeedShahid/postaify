import React from "react";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="absolute h-full w-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2] " />
      <Navbar />
      <div className="flex flex-col overflow-hidden pb-20">
        <ContainerScroll
          titleComponent={
            <div className="bg-transparent flex flex-col justify-center text-center gap-y-12 mt-24 mb-20">
              <div className="flex flex-col mx-auto gap-y-5">
                <h1 className="title-hero">
                  Generate Images, Text and Videos with AI
                </h1>
                <h2 className="desc-hero max-w-2xl mx-auto">
                  Everything AI seamlessly integrated all the modern AI
                  generation tools into one platform so that you can generate
                  content with a single click.
                </h2>
              </div>
              <Button className="mx-auto" size={"lg"}>
                Book a demo
              </Button>
            </div>
          }
        >
          <Image
            src={"/hero-image.png"}
            width={1200}
            height={700}
            alt="hero-image"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
};

export default Hero;
