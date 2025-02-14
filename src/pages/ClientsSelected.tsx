import { useClientSelected } from "./hooks/useClientSelected";
import { ListCards } from "../components/ListCards";
import { Header } from "../components/Header";
import { When } from "../components/When";
import React from "react";

export function ClientsSelected() {
  const { data, isLoading, isError, page } = useClientSelected();
  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Não conseguir encontrar clientes</div>;
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
