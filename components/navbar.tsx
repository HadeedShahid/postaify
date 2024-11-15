import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="p-8 flex justify-between items-center">
      <Image
        src={"/postaify.png"}
        width={150}
        height={100}
        alt="Postaify logo"
      />

      <div className="hidden flex gap-4 md:block">
        <Button variant={"ghost"}>Register</Button>
        <Button>Book a demo</Button>
      </div>
    </div>
  );
};

export default Navbar;
