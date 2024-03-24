import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

interface LogoProfileProps extends ComponentProps<"div"> {}

export function LogoProfile(props: LogoProfileProps) {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-[#d9d9d9]",
          props.className
        )}
      >
        {props.children}
      </div>
    </>
  );
}
