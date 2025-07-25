import React from "react";
import ImageKit from "./Image";
import PostOptions from "./PostOptions";
import PostInteractions from "./PostInteractions";
import { imagekit } from "@/utils";
import VideoKit from "./Video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetaData: { sensitive: boolean };
}

const Post = async () => {
  const getfileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (err, res) {
        if (err) console.log(err);
        else resolve(res as unknown as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getfileDetails("68839e765c7cd75eb8f0e653");

  console.log(fileDetails);

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* TYPE OF POST  */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>

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
          {/* <ImageKit path="general/post.jpeg" alt="" w={600} h={600} /> */}
          {fileDetails && fileDetails.fileType === "image" ? (
            <ImageKit
              path={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetaData?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <VideoKit
              path={fileDetails.filePath}
              className={fileDetails.customMetaData?.sensitive ? "blur-lg" : ""}
            />
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
