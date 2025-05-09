"use client";
import Image from "next/image";

import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold ml-11 py-8">Springchat CMS</h1>
        <div className="flex gap-10 justify-center items-center mr-[38px]">
          <Image src="/Icon.png" alt="Clock Icon" width={24} height={24} />

          <Image src="/theme.png" alt="Theme Icon" width={24} height={24} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
