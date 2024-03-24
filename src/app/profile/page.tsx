import { Footer } from "@/components/atoms/Footer";
import { LoremProfile } from "@/components/atoms/LoremProfile";
import { EditProfile } from "@/components/molecules/EditProfile";
import { Header } from "@/components/molecules/Header";
import { Navbar } from "@/components/molecules/Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const cookieLogin = cookies().get("login");

  if (!cookieLogin?.value) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />
      <Header />
      <main className="w-full h-full flex flex-col justify-between items-center gap-8 bg-white pt-8">
        <div className="w-full sm:px-28 lg:px-48 flex flex-col gap-4">
          <div className="bg-[#131167] dark:bg-[#D38122] w-full h-auto py-4 rounded-md flex flex-col items-center justify-center gap-2">
            <LoremProfile />
          </div>
          <div>
            <EditProfile />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
