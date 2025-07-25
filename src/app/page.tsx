import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between text-textGray border-b-[1px] border-borderGray p-3">
        <Link
          href={"/"}
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          For You
        </Link>
        <Link href={"/"} className="pb-3 flex items-center">
          Following
        </Link>
        <Link href={"/"} className="hidden pb-3 md:flex items-center">
          Nextjs
        </Link>
        <Link href={"/"} className="hidden pb-3 md:flex items-center">
          Typescript
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default HomePage;
