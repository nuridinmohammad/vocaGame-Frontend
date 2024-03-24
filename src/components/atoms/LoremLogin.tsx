import React from "react";

export function LoremLogin() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-2">
        <h2 className="font-extrabold text-5xl text-white">LOREM</h2>
        <q className="text-white text-center">
          Neque porro quisquam est qui dolorem ipsum quia dolor
          <br />
          sit amet,consectetur, adipisci velit...
        </q>
        <q className="text-white">
          There is no one who loves pain itself, who seeks after it
        </q>
        <div className="flex justify-center items-center gap-4">
          <span className="rounded-full bg-white h-3 w-3" />
          <span className="rounded-full border-2 border-white h-3 w-3" />
          <span className="rounded-full border-2 border-white h-3 w-3" />
        </div>
      </div>
    </>
  );
}
