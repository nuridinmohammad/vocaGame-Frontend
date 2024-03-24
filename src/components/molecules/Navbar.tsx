import React from "react";
import { SwitchTheme } from "@/components/molecules/SwitchTheme";

export function Navbar() {
  return (
    <div className="w-full h-auto p-2 bg-white dark:white">
      <SwitchTheme />
    </div>
  );
}
