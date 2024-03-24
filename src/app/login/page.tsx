import { Login } from "@/components/organisms/Login";
import React from "react";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main>
      <Login />
    </main>
  );
}
