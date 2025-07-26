import ImageKit from "@/components/Image";
import React from "react";

const PostModal = () => {
  return (
    <div className="abosolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center ">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-14">
        {/* TOP  */}
        <div className="">
          <div>X</div>
          <div>Drafts</div>
        </div>
        {/* CENTER  */}
        <div className="">
          <div className="relative size-11 rounded-full overflow-hidden">
            <ImageKit path="general/avatar.png" alt="" w={100} h={100} tr />
          </div>
          <input type="text" placeholder="What is happening?!" />
        </div>
        {/* BOTTOM  */}
        <div className="">
          <div className="">
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
