import { useDeleteclient } from "./hooks/useDeleteCliente";
import { User } from "../../../Api/@types/user";
import { ButtonCustom } from "../../Button";
import { IoClose } from "react-icons/io5";
import React from "react";

type Props = {
  handleToggleModal: () => void;
  data: User;
};

export function ModalCardDelete({ handleToggleModal, data }: Props) {
  const { handleClick, isPending } = useDeleteclient({
    data,
    handleToggleModal,
  });

  return (
    <div className="w-full h-full flex flex-col justify-between items center gap-6 p-5">
      <div className="flex justify-between  w-full ">
        <h2 className="font-bold w-full h-1/3">Excluir Cliente:</h2>
        <button className="relative bottom-6 left-4 w-6 flex justify-center items-center hover:text-orange-">
          <IoClose size={24} className="" />
        </button>
      </div>
      <p>
        Você está prestes a excluir o cliente:{" "}
        <span className="font-bold">{data.name}</span>
      </p>
      <ButtonCustom className="h-10" onClick={() => handleClick()}>
        Excluir cliente
      </ButtonCustom>
    </div>
  );
}
