import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RiPencilLine } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
import { User } from "../../Api/@types/user";
import { formatCurrency } from "../../utills/functions/formatCurrency";
import { ButtonIcon } from "./components/ButtonIcon/ButtonIcon";
import { ModalCustom } from "../Modal";

type CardsProps = {
  data: User;
};

export function Cards({ data }: CardsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(!isModalOpen);
  return (
    <li className="w-[285px] h-[138px] bg-white- rounded-lg flex flex-col items-center justify-between">
      <div className="h-4/5 w-full flex flex-col items-center justify-center">
        <h2 className="font-semibold">{data.name}</h2>
        <p>
          Salário: <span>{formatCurrency(data.wage)}</span>{" "}
        </p>
        <p>
          Empresa: <span>{data.enterprise}</span>{" "}
        </p>
      </div>
      <div className="flex w-11/12 h-[20px] justify-between mb-2">
        <ButtonIcon
          Icon={FaPlus}
          className="hover:text-orange-"
          onClick={() => console.log("Add action")}
        />
        <ButtonIcon
          Icon={RiPencilLine}
          className="hover:text-orange-"
          onClick={() => console.log("Edit action")}
        />
        <ButtonIcon
          Icon={GoTrash}
          className="text-red-700 hover:text-orange-"
          onClick={() => console.log("Delete action")}
        />
      </div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <ModalCustom open={isModalOpen} handleOpen={handleOpenModal}>
        <h1>Test Modal Content</h1>
      </ModalCustom>
    </li>
  );
}
