import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function FormLogin() {
  return (
    <>
      <form
        action=""
        className="w-full flex flex-col justify-center items-start gap-4"
      >
        <label htmlFor="username" className="text-[#666]">
          Username
        </label>
        <Input
          colorEye="text-[#131167]"
          id="username"
          type="text"
          placeholder="Username anda.."
          className="placeholder-[#666] rounded-full border border-[#666] dark:border-[#666] p-6 bg-transparent text-[#494949]"
        />
        <label htmlFor="password" className="text-[#666]">
          Password
        </label>
        <Input
          colorEye="text-[#131167] dark:text-orange-500"
          id="password"
          type="password"
          placeholder="Masukkan password anda"
          className="placeholder-[#666] rounded-full border border-[#666] dark:border-[#666] p-6 bg-transparent text-[#494949]"
        />
        <div className="w-full h-auto mt-8">
          <Button className="w-full rounded-full bg-[#E5E7FD] dark:bg-[#D38122] dark:bg-opacity-5 text-black dark:text-[#D38122] font-bold hover:bg-slate-300 dark:hover:bg-orange-100 p-6">
            Masuk Sekarang
          </Button>
        </div>
      </form>
    </>
  );
}
