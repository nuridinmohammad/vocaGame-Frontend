"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [isDark, setIsdark] = React.useState(false);

  const handleTheme = () => {
    setIsdark(!isDark);
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return <Switch onClick={handleTheme} />;
}
