import { Login } from "@/components/organisms/Login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const cookieLogin = cookies().get("login");

  if (cookieLogin?.value) {
    redirect("/profile");
  }
  return (
    <main>
      <Login />
    </main>
  );
}
