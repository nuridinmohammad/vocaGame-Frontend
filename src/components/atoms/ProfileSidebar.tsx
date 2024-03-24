"use client";

import { LogOut, UserCircle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { removeCookie } from "@/utils/session";
import { useRouter } from "next/navigation";

export function ProfileSidebar() {
  const router = useRouter();
  return (
    <div className="basis-1/3 border-r-2 pr-4 border-gray-300 hidden md:block">
      <div className=" h-[475px] flex flex-col justify-between items-start">
        <div className="flex items-center gap-4">
          <UserCircle className="text-[#6f6f6f]" width={32} height={37} />
          <p>Profile</p>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 pt-4">
        <Button
          className="rounded-full flex items-start gap-4 bg-red-200 hover:bg-red-300"
          onClick={() => {
            removeCookie("login");
            router.replace("/login");
          }}
        >
          <LogOut className="-rotate-180" color="red" />
          <p className="text-red-600 font-semibold">Logout</p>
        </Button>
      </div>
    </div>
  );
}
