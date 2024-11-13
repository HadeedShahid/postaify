import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { Meteors } from "./ui/meteors";

export function CtaSection() {
  return (
    <div className="w-full h-80 relative mt-40">
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="m-auto text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-primary text-white mb-4 relative z-50">
            Choose the right plan for you
          </h2>
          <p className="leading-7 text-primary text-xl text-slate-500 mb-4 relative z-50">
            We provide reliable, scalable, and customizable email solutions for
            your business
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
        </div>

        <Meteors number={50} />
      </div>
    </div>
  );
}
