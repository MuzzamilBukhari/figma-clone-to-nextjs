import React from "react";
import Featured from "./Featured";
import girl from "../../public/images/girl.jpg";
import logo from "../../public/images/logo.jpg";

const FeaturedWork = () => {
  return (
    <div className="bg-[#CFA6A61C]">
      <h1 className="text-2xl font-bold ml-36 my-12">Featured works</h1>
      <div className="flex justify-center items-center flex-col gap-20">
        <Featured image={girl} />
        <Featured image={logo} />
        <Featured image={logo} />
      </div>
    </div>
  );
};

export default FeaturedWork;
