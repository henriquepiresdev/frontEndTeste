import { PaginatedUserResponse, User } from "../../Api/@types/user";
import PaginationRounded from "../Pagination";
import { ButtonCustom } from "../Button";
import SelectAutoWidth from "../Select";
import { Cards } from "../Cards";
import React, { useState } from "react";
import { ModalCustom } from "../Modal";
import { FormCreateClient } from "../Forms/FormCreateClient";

type PropsListCards = {
  data: PaginatedUserResponse;
  page: number;
};

export function ListCards({ data, page }: PropsListCards) {
  const [toogleModal, setToogleModal] = useState(false);
  const handleToogleModal = () => setToogleModal(!toogleModal);

  return (
    <section className="text-black w-5/6 md:min-h-[705px] flex flex-col items-center max-w-[1200px]">
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
        <div className="w-full md:order-last">
          <ButtonCustom
            className="w-full h-10 bg-white- text-orange- border-2 border-orange- my-2 active:scale-95 hover:text-white- hover:bg-orange-"
            onClick={handleToogleModal}
          >
            Criar
          </ButtonCustom>
        </div>
        <ul className="h-full w-full flex justify-center md:gap-x-1 gap-y-8 md:justify-between flex-wrap">
          {data.data.map((user: User) => (
            <Cards key={user.id} data={user} />
          ))}
        </ul>
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
