import React from "react";
import Post from "./Post";
import ImageKit from "./Image";
import PostOptions from "./PostOptions";

const Feed = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* TYPE OF POST  */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        icon
        <span>Zerome reposted</span>
      </div>
      {/* POST CONTENT  */}
      <div className="flex gap-4">
        {/* AVATAR  */}
        <div className="relative size-10 rounded-full overflow-hidden">
          <ImageKit
            path="general/avatar.png"
            alt=""
            w={100}
            h={100}
            tr={true}
          />
        </div>
        {/* CONTENT  */}
        <div className="flex-1 flex flex-col gap-2">
          {/* TOP PART  */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">Zerome</h1>
              <span className="text-textGray">@Zerome</span>
              <span className="text-textGray">1 day ago</span>
            </div>
            <PostOptions />
          </div>
          {/* TEXT & MEDIA SECTION  */}
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            iure voluptate in sed nemo exercitationem blanditiis pariatur,
            harum, aperiam voluptates saepe perferendis unde dolore. Unde quos
            harum dolorem alias possimus.
          </p>
          <ImageKit path="general/post.jpeg" alt="" w={600} h={600} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
