import React from "react";
import { FormHome } from "../components/FormHome";
export function Home() {
  return (
    <div className="h-screen w-full justify-center items-center flex flex-col gap-3">
      <h1 className="text-3xl">Olá, seja bem-vindo!</h1>
      <FormHome className="flex flex-col gap-3 border-none w-[521px]" />
    </div>
  );
}
