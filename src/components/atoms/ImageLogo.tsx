import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

interface ImageLogoProps extends ComponentProps<"div"> {
  text: string;
}

export function ImageLogo(props: ImageLogoProps) {
  return (
    <>
      <div
        className={cn(
          "bg-[#D9D9D9] flex justify-center items-center",
          props.className
        )}
      >
        <h2 className="font-extrabold text-5xl leading-[60px] tracking-tighter text-black">
          {props.text}
        </h2>
      </div>
    </>
  );
}
