import { useState } from "react";
import { useCardsService } from "./useCardsService";
type Props = {
  isSelected: boolean;
  id: number;
};
export function useCards() {
  const { addOrRemoveClienteMutation, isPending } = useCardsService();
  const [toogleModal, setToogleModal] = useState(false);
  const [toogleModalDelete, setToogleModalDelete] = useState(false);

  const handleToogleModal = () => setToogleModal(!toogleModal);

  const handleToogleModalDelete = () =>
    setToogleModalDelete(!toogleModalDelete);

  async function handleClick({ isSelected, id }: Props) {
    try {
      await addOrRemoveClienteMutation({ id, isSelected });
    } catch (error) {}
  }

  return {
    handleClick,
    isPending,
    handleToogleModal,
    handleToogleModalDelete,
    toogleModal,
    toogleModalDelete,
  };
}
