import React from "react";
import { PhotoProfile } from "../atoms/PhotoProfile";
import { LogoProfile } from "../atoms/LogoProfile";

export function Header() {
  return (
    <>
      <div className="w-full h-auto flex justify-between items-center px-2 sm:px-28 lg:px-48 bg-[#131167] dark:bg-[#D38122]">
        <LogoProfile className="transition-all h-[42px] sm:h-[62px] w-[42px] sm:w-[67px]">
          <p className="text-[#374151] text-sm sm:text-base">Logo</p>
        </LogoProfile>
        <PhotoProfile />
      </div>
      <div className="w-full bg-[#131167] dark:bg-[#D38122] border-t-[1px] border-gray-100 h-[25px]"></div>
    </>
  );
}
