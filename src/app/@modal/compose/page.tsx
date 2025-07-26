"use client";

import ImageKit from "@/components/Image";
import React from "react";
import { useRouter } from "next/navigation";

const PostModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back(); // closes modal properly
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-start justify-center pt-20 px-4">
      <div className="bg-[#000] text-white rounded-xl w-full max-w-xl p-6 space-y-6 relative">
        {/* Close Button + Header */}
        <div className="flex justify-between items-center">
          <button
            onClick={closeModal}
            className="text-2xl font-bold hover:text-gray-300"
          >
            ×
          </button>
          <span className="text-gray-400 text-sm cursor-pointer hover:underline">
            Drafts
          </span>
        </div>

        {/* Content Area */}
        <div className="flex gap-4">
          <div className="shrink-0">
            <ImageKit
              path="general/avatar.png"
              alt="avatar"
              w={48}
              h={48}
              tr
              className="rounded-full"
            />
          </div>
          <input
            type="text"
            placeholder="What is happening?!"
            className="bg-transparent border-none outline-none text-lg w-full placeholder:text-gray-500"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end">
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
