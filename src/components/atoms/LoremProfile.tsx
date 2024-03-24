import React from "react";

export function LoremProfile() {
  return (
    <div className="text-white text-center">
      <h2 className="font-extrabold  sm:text-5xl text-3xl">LOREM</h2>
      <p className="text-center text-sm sm:text-base">
        <q>
          Neque porro quisquam est qui dolorem ipsum quia dolor
          <br />
          sit amet, consectetur, adipisci velit...
        </q>
        <br />
        <q className="hidden sm:flex transition-all">
          There is no one who loves pain itself, who seeks after it
          <br />
          and wants to have it, simply because it is pain...
        </q>
      </p>
    </div>
  );
}
