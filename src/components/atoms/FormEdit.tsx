import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export function FormEdit() {
  return (
    <>
      <form action="" className="flex flex-col justify-start items-start gap-3">
        <label
          htmlFor="name"
          className="w-full text-[#374151] text-sm sm:text-lg font-medium sm:font-bold"
        >
          Nama
          <Input
            id="name"
            type="text"
            className="w-full mt-1 bg-transparent text-[#374151] border border-gray-300 dark:border-gray-300 h-[38px] "
          />
        </label>
        <label
          htmlFor="handphone"
          className="w-full text-[#374151] text-sm sm:text-lg font-medium sm:font-bold"
        >
          Handphone
          <Input
            id="handphone"
            type="text"
            className="w-full mt-1 bg-transparent text-[#374151] border border-gray-300 dark:border-gray-300 h-[38px] "
          />
        </label>
        <label
          htmlFor="oldPassword"
          className="w-full text-[#374151] text-sm sm:text-lg font-medium sm:font-bold"
        >
          Old Password
          <Input
            id="oldPassword"
            type="password"
            className="w-full mt-1 bg-transparent text-[#374151] border border-gray-300 dark:border-gray-300 h-[38px] "
          />
        </label>
        <label
          htmlFor="newPassword"
          className="w-full text-[#374151] text-sm sm:text-lg font-medium sm:font-bold"
        >
          New Password
          <Input
            id="newPassword"
            type="password"
            className="w-full mt-1 bg-transparent text-[#374151] border border-gray-300 dark:border-gray-300 h-[38px] "
          />
        </label>
        <Button className="rounded-full flex items-center gap-2 bg-[#E3E7FD] hover:bg-slate-300 dark:bg-orange-100 dark:hover:bg-orange-200">
          <p className="text-sm sm:text-lg text-[#374151]">Edit Profile</p>
          <MoveRight className="text-[#374151]" />
        </Button>
      </form>
    </>
  );
}
