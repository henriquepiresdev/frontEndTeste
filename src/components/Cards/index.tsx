import { formatCurrency } from "../../utills/functions/formatCurrency";
import { formatName } from "../../utills/functions/formatNameLentgh";
import { ModalCardDelete } from "../Modal/ModalCardDelete/iindex";
import { ButtonIcon } from "./components/ButtonIcon/ButtonIcon";
import { FormUpdateClient } from "../Forms/FormUpdateClient";
import { RiPencilLine } from "react-icons/ri";
import { User } from "../../Api/@types/user";
import { useCards } from "./hooks/useCards";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import React, { useState } from "react";
import { ModalCustom } from "../Modal";
import { When } from "../When";

type CardsProps = {
  data: User;
};

export function Cards({ data }: CardsProps) {
  const {
    handleClick,
    handleToogleModal,
    handleToogleModalDelete,
    toogleModal,
    toogleModalDelete,
  } = useCards();

  return (
    <li className=" h-[138px] bg-white- rounded-lg flex flex-col items-center justify-between w-full max-w-[300px] md:max-w-none">
      <div className="h-4/5 w-full flex flex-col items-center justify-center">
        <h2 className="font-semibold">{formatName(data.name)}</h2>
        <p>
          Salário: <span>{formatCurrency(data.wage)}</span>
        </p>
        <p>
          Empresa: <span>{formatCurrency(data.enterprise)}</span>
        </p>
      </div>
      <div className="flex w-11/12 h-[20px] justify-between mb-2">
        <When
          value={data.isSelected}
          render={
            <ButtonIcon
              Icon={FaMinus}
              className=" text-orange- hover:scale-110"
              onClick={() => handleClick({ isSelected: false, id: data.id })}
            />
          }
          elseRender={
            <ButtonIcon
              Icon={FaPlus}
              className="hover:text-orange- text-orange- hover:scale-x-125 "
              onClick={() => handleClick({ isSelected: true, id: data.id })}
            />
          }
        />
        <ButtonIcon
          Icon={RiPencilLine}
          className="hover:text-orange-"
          onClick={handleToogleModal}
        />
        <ButtonIcon
          Icon={GoTrash}
          className="text-red-900 hover:text-orange-"
          onClick={handleToogleModalDelete}
        />
      </div>
      <ModalCustom open={toogleModal} handleToggleModal={handleToogleModal}>
        <FormUpdateClient data={data} handleToggleModal={handleToogleModal} />
      </ModalCustom>
      <ModalCustom
        open={toogleModalDelete}
        handleToggleModal={handleToogleModalDelete}
      >
        <ModalCardDelete
          handleToggleModal={handleToogleModalDelete}
          data={data}
        />
      </ModalCustom>
    </li>
  );
}
