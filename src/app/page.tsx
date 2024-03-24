import { ImageLogo } from "@/components/atoms/ImageLogo";
import { Navbar } from "@/components/molecules/Navbar";
import { Register } from "@/components/organisms/Register";
import React from "react";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <Navbar />
      <main className="flex justify-center gap-6">
        <div className="flex-none hidden lg:flex">
          <ImageLogo
            text="IMAGE/LOGO"
            className="w-full lg:w-[370px] h-[233px]"
          />
        </div>
        <div className="flex-1 lg:max-w-[550px] py-20">
          <Register />
        </div>
      </main>
    </>
  );
}
