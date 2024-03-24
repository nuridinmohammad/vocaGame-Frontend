import { UserCircle } from "lucide-react";
import React, { ReactNode } from "react";

export function PhotoProfile<T extends ReactNode>({
  children,
}: {
  children?: T;
}) {
  return (
    <div>
      <UserCircle className="text-[#6f6f6f] transition-all h-[42px] sm:h-[62px] w-[42px] sm:w-[67px]" />
      {children}
    </div>
  );
}
