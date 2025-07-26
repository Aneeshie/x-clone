import React from "react";
import ImageKit from "./Image";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's "} Happening
      </h1>
      {/* TRENDS SECTION  */}
      <div className="flex gap-4 ">
        <div className="relative size-20 rounded-xl overflow-hidden">
          <ImageKit path="general/event.png" alt="event" w={120} h={120} tr />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">Any Random Event</h2>
          <span className="text-sm text-textGray">Last Night.</span>
        </div>
      </div>
      {/* TOPICS  */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm font-bold">
            Technology + Trending
          </span>
          <ImageKit path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20k Posts</span>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm font-bold">
            Technology + Trending
          </span>
          <ImageKit path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20k Posts</span>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm font-bold">
            Technology + Trending
          </span>
          <ImageKit path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20k Posts</span>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm font-bold">
            Technology + Trending
          </span>
          <ImageKit path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20k Posts</span>
      </div>

      <Link href={"/"} className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
