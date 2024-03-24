import React from "react";
import { JumbotronLogin } from "../molecules/JumbotronLogin";
import { PleaseLogin } from "../molecules/PleaseLogin";

export function Login() {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-full min-h-screen bg-[#131167] dark:bg-[#D38122] mx-auto justify-center items-center hidden lg:flex">
        <JumbotronLogin />
      </div>
      <div className="w-full min-h-screen bg-white flex flex-col mx-auto justify-start items-center">
        <PleaseLogin />
      </div>
    </div>
  );
}
