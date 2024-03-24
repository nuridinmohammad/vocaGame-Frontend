import React from "react";
import { PhotoProfile } from "../atoms/PhotoProfile";
import { Button } from "../ui/button";
import { PencilIcon } from "lucide-react";
import { ProfileSidebar } from "../atoms/ProfileSidebar";
import { FormEditProfile } from "./FormEditProfile";

export function EditProfile() {
  return (
    <div className="text-black flex flex-col gap-8">
      <div className="flex justify-between items-center px-2 sm:px-0">
        <div className="flex justify-center items-center gap-4">
          <PhotoProfile />
          <p className="font-extrabold text-md sm:text-xl transition-all">
            Noname
          </p>
        </div>
        <div>
          <Button className="rounded-full bg-orange-100 text-[#131167] sm:px-8 sm:py-4 hover:bg-orange-300 dark:hover:bg-orange-200">
            <PencilIcon className="-rotate-90 mr-2 text-orange-600 h-4 sm:h-6" />
            <p className="text-sm sm:text-base dark:text-[#D38122]">
              Edit Profile
            </p>
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start gap-6 px-6 sm:px-0">
        <ProfileSidebar />
        <FormEditProfile />
      </div>
    </div>
  );
}
