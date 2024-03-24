import Link from "next/link";
import React from "react";
import { FormRegister } from "../molecules/FormRegister";
import { ImageLogo } from "../atoms/ImageLogo";

export function Register() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-5 gap-6">
      <div className="lg:hidden w-full">
        <ImageLogo
          text="IMAGE/LOGO"
          className="w-full lg:w-[370px] h-[233px]"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <div className="w-full flex flex-col justify-center items-start gap-3">
          <h2 className="font-extrabold text-3xl tracking-[-5%] text-slate-100 sm:text-6xl">
            Daftarkan Akun
          </h2>
          <p className="font-normal text-sm text-white sm:text-lg">
            Daftar akun anda dengan mengisi form dibawah
          </p>
        </div>
        <div className="w-full h-auto">
          <FormRegister />
        </div>
        <div>
          <p className="font-normal text-md leading-7 text-white sm:text-lg">
            Sudah punya akun?{" "}
            <Link href={"/login"} className="font-bold">
              Login Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
