import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

const Featured = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 px-4 md:px-8 lg:px-0">
      <div>
        <Image
          src={image}
          alt="pic"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
          Designing Dashboards
        </h1>
        <div className="flex items-center gap-2 md:gap-4">
          <span className="bg-[#F98585] px-2 text-white rounded-full">
            2020
          </span>
          <span className="text-gray-600">Dashboard</span>
        </div>
        <p className="text-base md:text-lg mt-3 lg:mt-4 max-w-full lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum
          temporibus officia quia, tempora reprehenderit, optio possimus nulla
          itaque sed odit, ipsa laudantium! Iure ipsam necessitatibus aut animi
          ab quidem atque quo impedit eum.
        </p>
      </div>
    </div>
  );
};

export default Featured;
