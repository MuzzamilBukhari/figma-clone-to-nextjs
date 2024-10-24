import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-end items-center mt-20">
      <nav className="flex justify-center items-center gap-5 font-bold pr-16">
        <Link href="">Works</Link>
        <Link href="">Blog</Link>
        <Link href="">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
