import React from "react";
import { ThemeToggle } from "@/components/atoms/ToggleTheme";

export function SwitchTheme() {
  return (
    <div className="w-full h-auto flex justify-end items-center gap-2">
      <p className="text-[#131167] dark:text-[#424242]">Blue</p>
      <ThemeToggle />
      <p className="text-[#424242] dark:text-[#D38122]">Orange</p>
    </div>
  );
}
