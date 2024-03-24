"use client";

import React, { useEffect, useState } from "react";
import { SwitchTheme } from "./SwitchTheme";
import { FormLogin } from "./FormLogin";
import Link from "next/link";
import Cookies from "js-cookie";
import { decrypt } from "@/utils/session";
import { IFormRegister } from "@/types";

export function PleaseLogin() {
  const [dataRegister, setDataRegister] = useState<IFormRegister>();

  useEffect(() => {
    const register = Cookies.get("register");
    if (register) {
      const data = decrypt(register);
      setDataRegister(data);
    }
  }, []);

  return (
    <>
      <div className="w-full my-12 px-8">
        <SwitchTheme />
      </div>
      <div className="flex flex-col justify-center items-end gap-6 px-4">
        <div className="max-w-[550px] h-auto flex flex-col justify-center items-start gap-12">
          <div className="w-full flex flex-col justify-center items-start gap-3">
            <h2 className="font-extrabold text-3xl tracking-[-5%] text-[#20184E] dark:text-[#D38122] sm:text-6xl ">
              Silahkan LogIn
            </h2>
            <p className="font-normal text-sm text-[#666666] sm:text-lg">
              Masukkan Username dan password anda untuk masuk
            </p>
            <p className="dark:text-black">
              Your Account
              <br />
              {dataRegister
                ? JSON.stringify({
                    username: dataRegister?.name,
                    password: dataRegister?.password,
                  })
                : "Please register first!"}
            </p>
          </div>
          <div className="w-full">
            <FormLogin />
          </div>
          <div className="w-full mt-6 flex items-center justify-center">
            <p className="font-normal text-md leading-7 text-[#666] text-center sm:text-lg">
              Belom punya akun?{" "}
              <Link
                href={"/"}
                className="font-bold text-[#131167] dark:text-[#D38122]"
              >
                Daftar Sekarang
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
