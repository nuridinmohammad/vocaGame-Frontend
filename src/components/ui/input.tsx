"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  colorEye?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, colorEye, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(true);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative w-full h-auto ">
        <input
          type={showPassword && type === "password" ? "password" : "text"}
          className={cn(
            "placeholder-white text-white flex h-14 w-full rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <span className="bg-gray-200 bg-opacity-50 px-4 py-2 rounded-full">
                <EyeOffIcon className={`h-5 w-5 ${colorEye}`} />
              </span>
            ) : (
              <span className="bg-gray-200 bg-opacity-50 px-4 py-2 rounded-full">
                <EyeIcon className={`h-5 w-5 ${colorEye}`} />
              </span>
            )}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
