import React from "react";
import Image from "next/image";
import men from "/public/images/men.jpg";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-16 mb-14 px-4 md:px-8 lg:px-16 ">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:w-full max-w-screen-lg pt-10">
        <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-black text-[#21243D]">
            Hi, I am John,
          </h1>
          <h1 className="text-3xl md:text-4xl font-black text-[#21243D]">
            Creative Technologist
          </h1>
          <p className="max-w-sm md:max-w-md lg:max-w-lg text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            assumenda atque esse! Sint ipsa placeat perspiciatis quo, illo nulla
            ut facere laborum natus!
          </p>
          <button className="bg-[#F98585] px-4 py-2 mt-4 rounded-sm text-white shadow-custom-down hover:bg-[#a14b4b] transition duration-150">
            Download Resume
          </button>
        </div>
        <div className="mt-8 lg:mt-0 lg:pl-12">
          <Image
            src={men}
            alt="Black men"
            className="rounded-full w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
