import Link from "next/link";
import React from "react";
import Post from "./Post";

const RecentPosts = () => {
  return (
    <div className="pt-8 pb-14 bg-[#f4e2e2]">
      <div className="w-[68%] flex justify-between m-auto">
        <p className="text-[22px] font-[500] leading-[32px]">Recent Post</p>
        <p className="text-xl font-semibold text-[#f98585]">View all</p>
      </div>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-9 items-center w-[68%] mx-auto">
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default RecentPosts;
