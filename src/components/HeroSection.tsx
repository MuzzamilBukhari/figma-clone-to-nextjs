import React from "react";
import Image from "next/image";
import men from "/public/images/men.jpg";
const HeroSection = () => {
  return (
    <div className="justify-items-center mt-12">
      <div className="w-[1030px] h-[308px] flex justify-center items-center">
        <div className="flex justify-center items-start gap-4 flex-col">
          <h1 className="text-2xl font-bold">Hi, I am John,</h1>
          <h1 className="text-2xl font-bold">Creative Technologist</h1>
          <p className="w-[497px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            assumenda atque esse! Sint ipsa placeat perspiciatis quo, illo nulla
            ut facere laborum natus!
          </p>
          <button className="bg-[#F98585] px-4 py-2 rounded-sm text-white shadow-custom-down">
            Download Resume
          </button>
        </div>
        <div className="pl-44">
          <Image src={men} alt={"Black-men"} className="rounded-[50%]"></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
