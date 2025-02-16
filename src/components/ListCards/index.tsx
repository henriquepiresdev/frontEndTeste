import { PaginatedUserResponse, User } from "../../Api/@types/user";
import PaginationRounded from "../Pagination";
import { ButtonCustom } from "../Button";
import SelectAutoWidth from "../Select";
import { Cards } from "../Cards";
import React, { useState } from "react";
import { ModalCustom } from "../Modal";
import { FormCreateClient } from "../Forms/FormCreateClient";
import { When } from "../When";
import { useLocation } from "react-router-dom";

type PropsListCards = {
  data: PaginatedUserResponse;
  page: number;
};

export function ListCards({ data, page }: PropsListCards) {
  const [toogleModal, setToogleModal] = useState(false);
  const handleToogleModal = () => setToogleModal(!toogleModal);

  const location = useLocation();
  const isClientsSelectedRoute =
    location.pathname.startsWith("/clients-selected");

  return (
    <section className="text-black w-11/12 md:min-h-[705px] flex flex-col items-center max-w-[1250px]">
      <div className="flex flex-col md:flex-row md:justify-between w-full pt-3">
        <div className="w-full flex justify-start items-center h-10">
          <p>
            <span className="font-semibold">{data.items}</span> clientes
            encontrados:
          </p>
        </div>
        <div className="w-full flex justify-start md:justify-end items-center h-10">
          <p>Clientes por página</p>
          <SelectAutoWidth />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <When value={!isClientsSelectedRoute}>
          <div className="w-full  order-first md:order-last">
            <ButtonCustom
              className="w-full h-10 bg-white- text-orange- border-2 border-orange- my-2 active:scale-95 hover:text-white- hover:bg-orange-"
              onClick={handleToogleModal}
            >
              Criar
            </ButtonCustom>
          </div>
        </When>
        <When
          value={data.data.length === 0}
          render={
            <div className="w-full h-96 flex items-center justify-center border-dashed border-2 border-gray-300 text-center text-gray-500 text-xl">
              <p>
                {isClientsSelectedRoute
                  ? "Adicione o cliente à lista através da aba clientes"
                  : "Sem clientes cadastrados, crie o seu clicando abaixo."}
              </p>
            </div>
          }
          elseRender={
            <ul
              className="border-dashed border-2 border-gray-300  h-full w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
              justify-items-center md:justify-items-stretch
              gap-2 p-1
              grid-auto-columns: minmax(0, 1fr) "
            >
              {data.data.map((user: User) => (
                <Cards key={user.id} data={user} />
              ))}
            </ul>
          }
        />
      </div>
      <div>
        {data && <PaginationRounded pages={data.pages} currentPage={page} />}
      </div>
      <ModalCustom open={toogleModal} handleToggleModal={handleToogleModal}>
        <FormCreateClient />
      </ModalCustom>
    </section>
  );
}
