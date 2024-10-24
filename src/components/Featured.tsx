import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

const Featured = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="flex justify-center items-center gap-8">
      <div>
        <Image
          src={image}
          alt={"pic"}
          className="w-[246px] h-[180px] rounded-lg"
        ></Image>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-3">Designing Dashboards</h1>
        <span className="bg-[#F98585] px-2 text-white rounded-full">2020</span>
        <span className="text-[#0000009E] ml-4">Dashboard</span>
        <p className="w-[700px] mt-3">
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
