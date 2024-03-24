import React from "react";
import { LoremLogin } from "../atoms/LoremLogin";
import { ImageLogo } from "../atoms/ImageLogo";

export function JumbotronLogin() {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <ImageLogo text="IMAGE" className="w-[333px] h-[422px]" />
      <LoremLogin />
    </div>
  );
}
