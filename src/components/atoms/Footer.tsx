import React from "react";
import { LogoProfile } from "./LogoProfile";

export function Footer() {
  return (
    <div className="w-full h-[238px] md:h-[338px] bg-[#131167] dark:bg-[#D38122] px-4 sm:px-28 lg:px-48  flex items-center justify-start">
      <LogoProfile className="w-[100px] md:w-[200px] h-[100px] md:h-[200px]">
        <p className="text-[#374151] font-bold text-3xl md:text-5xl">Logo</p>
      </LogoProfile>
    </div>
  );
}
