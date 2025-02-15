import { ListCards } from "../components/ListCards";
import { Header } from "../components/Header";
import { When } from "../components/When";
import React from "react";

import { useClient } from "./hooks/useClient";
export function Clients() {
  const { data, page } = useClient();
  return (
    <div className="bg-white-2 w-full min-h-screen">
      <Header />
      <main className="w-full flex justify-center">
        <When
          value={!data}
          render={<h1>Carregando...</h1>}
          elseRender={<ListCards data={data!} page={page} />}
        ></When>
      </main>
    </div>
  );
}
