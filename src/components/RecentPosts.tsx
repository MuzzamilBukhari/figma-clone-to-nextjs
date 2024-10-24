import Link from "next/link";
import React from "react";
import Post from "./Post";

const RecentPosts = () => {
  return (
    <div className="bg-[#F4E2E2] h-[502px] flex justify-center items-center flex-col gap-4">
      <div className="flex justify-between items-center w-2/3">
        <h4 className="text-lg font-semibold">Recent post</h4>
        <Link href="" className="text-[#F98585]">
          View all
        </Link>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default RecentPosts;
