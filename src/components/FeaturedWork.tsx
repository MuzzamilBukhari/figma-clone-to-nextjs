import React from "react";
import Featured from "./Featured";
import girl from "../../public/images/girl.jpg";
import logo from "../../public/images/logo.jpg";
import featured from "../../public/images/featured.png";

const FeaturedWork = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-xl md:text-2xl font-bold text-center md:text-left ml-0 md:ml-8 my-8 md:my-12">
        Featured works
      </h1>
      <div className="flex flex-col items-center gap-16 md:gap-20">
        <Featured image={featured} />
        <Featured image={girl} />
        <Featured image={logo} />
      </div>
    </div>
  );
};

export default FeaturedWork;
