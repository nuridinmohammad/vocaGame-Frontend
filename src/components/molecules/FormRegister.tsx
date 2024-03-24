import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function FormRegister() {
  return (
    <>
      <form
        action=""
        className="w-full flex flex-col justify-center items-start gap-4"
      >
        <label htmlFor="name" className="text-[#fff]">
          Nama Anda
        </label>
        <Input
          colorEye="text-white"
          id="name"
          type="text"
          placeholder="Ketik nama anda disini.."
        />
        <label htmlFor="handphone" className="text-[#fff]">
          Nomor Anda
        </label>
        <Input
          colorEye="text-white"
          id="handphone"
          type="text"
          placeholder="Nomor handphone anda"
        />
        <label htmlFor="password" className="text-[#fff]">
          Password
        </label>
        <Input
          colorEye="text-white"
          id="password"
          type="password"
          placeholder="Masukkan password anda"
        />
        <label htmlFor="confirmPassword" className="text-[#fff]">
          Konfirmasi Password
        </label>
        <Input
          colorEye="text-white"
          id="confirmPassword"
          type="password"
          placeholder="Masukkan kembali password anda"
        />
        <div className="w-full h-auto mt-3">
          <Button className="w-full rounded-full bg-white text-black hover:bg-slate-300 p-6">
            Daftar Sekarang
          </Button>
        </div>
      </form>
    </>
  );
}
