"use client";
import { LogOut, PencilIcon, UserCircle } from "lucide-react";
import React from "react";
import { FormEdit } from "../atoms/FormEdit";
import { Button } from "../ui/button";
import { removeCookie } from "@/utils/session";
import { useRouter } from "next/navigation";

export function FormEditProfile() {
  const router = useRouter();
  return (
    <div className="w-full h-auto flex flex-col gap-4 items-start justify-start">
      <div className="md:hidden basis-1/3 w-full flex justify-between">
        <div className="flex flex-col justify-between items-start">
          <div className="flex items-center gap-4">
            <UserCircle className="text-[#6f6f6f]" width={32} height={37} />
            <p>Profile</p>
          </div>
        </div>
        <div className="">
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
      <div className="flex items-center justify-start gap-2 border-b-2 border-gray-300 py-3 w-full">
        <PencilIcon className="text-orange-600 h-6 w-8 sm:h-10" />
        <h2 className="font-extrabold text-md sm:text-2xl">Edit Profile</h2>
      </div>
      <div className="w-full h-auto">
        <FormEdit />
      </div>
    </div>
  );
}
