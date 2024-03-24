"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootStater } from "@/lib/store";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editSchemma } from "@/types/schemma";
import { IFormRegister } from "@/types";
import { decrypt, removeCookie, setEncryptedCookie } from "@/utils/session";
import { addRegisteredUser } from "@/lib/features/auth/registerSlice";
import Cookies from "js-cookie";

export function FormEdit() {
  const login = Cookies.get("login");
  const users = useSelector((state: RootStater) => state.register);
  const [newPassword, setNewPassword] = useState<string>();
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IFormRegister>({
    resolver: zodResolver(editSchemma),
  });

  const [dataRegister, setDataRegister] = useState<IFormRegister>();

  useEffect(() => {
    const register = Cookies.get("register");
    if (typeof window !== undefined && register) {
      const data = decrypt(register);
      setDataRegister(data);
      dispatch(addRegisteredUser(data));
    }
  }, [dispatch, login]);

  const onSubmit = (data: IFormRegister) => {
    const reRegister: IFormRegister = {
      handphone: dataRegister?.handphone ?? "",
      name: dataRegister?.name ?? "",
      password: data.password,
      confirmPassword: data.password,
    };
    setEncryptedCookie("register", reRegister);
    dispatch(addRegisteredUser(reRegister));
    removeCookie("login");
    alert("Please login again..");
    router.replace("/login");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-start items-start gap-3"
      >
        <label
          htmlFor="name"
          className="w-full text-[#374151] text-sm sm:text-lg font-medium sm:font-bold"
        >
          Nama
        </label>
        <Controller
          control={control}
          name="name"
          render={() => {
            return (
              <Input
                disabled
                {...register("name")}
                id="name"
                name="name"
                type="text"
                className="w-full mt-1 bg-transparent text-[#374151] border border-gray-300 dark:border-gray-300 h-[38px] "
                value={users[0]?.name}
              />
            );
          }}
        />
        <label
          htmlFor="handphone"
          className="w-full text-[#374151] text-sm sm:text-lg font-medium sm:font-bold"
        >
          Handphone
        </label>
        <Controller
          control={control}
          name="handphone"
          render={() => {
            return (
              <Input
                disabled
                {...register("handphone")}
                id="handphone"
                name="handphone"
                type="text"
                className="w-full mt-1 bg-transparent text-[#374151] border border-gray-300 dark:border-gray-300 h-[38px] "
                value={users[0]?.handphone}
              />
            );
          }}
        />
        <label
          htmlFor="confirmPassword"
          className="w-full text-[#374151] text-sm sm:text-lg font-medium sm:font-bold"
        >
          Old Password
        </label>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <>
              <Input
                disabled
                {...field}
                {...register("confirmPassword")}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="w-full mt-1 bg-transparent text-[#374151] border border-gray-300 dark:border-gray-300 h-[38px]"
                value={users[0]?.password}
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </>
          )}
        />

        <label
          htmlFor="password"
          className="w-full text-[#374151] text-sm sm:text-lg font-medium sm:font-bold"
        >
          New Password
        </label>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <>
              <Input
                {...field}
                {...register("password")}
                id="password"
                name="password"
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full mt-1 bg-transparent text-[#374151] border border-gray-300 dark:border-gray-300 h-[38px]"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </>
          )}
        />
        <Button
          disabled={newPassword?.trim() ? false : true}
          className="rounded-full flex items-center gap-2 bg-[#E3E7FD] hover:bg-slate-300 dark:bg-orange-100 dark:hover:bg-orange-200"
        >
          <p className="text-sm sm:text-lg text-[#374151]">Edit Profile</p>
          <MoveRight className="text-[#374151]" />
        </Button>
      </form>
    </>
  );
}
