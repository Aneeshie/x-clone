import Feed from "@/components/Feed";
import ImageKit from "@/components/Image";
import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div className="">
      {/* PROFILE TITLE  */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href={"/"}>
          <ImageKit path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Zerome</h1>
      </div>
      {/* INFO  */}
      <div>
        {/* COVER AND AVATAR  */}
        <div className="relative w-full ">
          {/* COVER  */}

          <div className="w-full aspect-[3/1] relative">
            <ImageKit path="general/cover.jpg" alt="" w={600} h={200} tr />
          </div>
          {/* AVATAR  */}
          <div className="size-30 rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-8 -bottom-12">
            <ImageKit path="general/avatar.png" alt="" w={100} h={100} tr />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 py-2 px-4">
          <div className="size-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageKit path="icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="size-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageKit path="icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className="size-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageKit path="icons/message.svg" alt="more" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black fon-bold rounded-full">
            Follow
          </button>
        </div>
        {/* USER INFO  */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME AND HANDLE  */}
          <div className="">
            <h1 className="text-2xl font-bold">Zerome</h1>
            <span className="text-textGray text-sm">@zerome</span>
          </div>
          <p>Zerome YOUTUBE CHANNEL</p>
          {/* JOB, LOCATION AND DATE  */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2s">
              <ImageKit
                path="icons/userLocation.svg"
                alt="location"
                w={20}
                h={20}
              />
              <span>INDIA</span>
            </div>
            <div className="flex items-center gap-2s">
              <ImageKit path="icons/date.svg" alt="location" w={20} h={20} />
              <span>Joined May 2025</span>
            </div>
          </div>
          {/* FOLLOWERS AND FOLLOWING  */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* FEED  */}
      <Feed />
    </div>
  );
};

export default UserPage;
