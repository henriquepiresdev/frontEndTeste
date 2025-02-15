import { User } from "../../../../Api/@types/user";
import { useDeleteClientService } from "./useDeleteClientService";

type Props = {
  data: User;
  handleToggleModal: () => void;
};
export function useDeleteclient({ data, handleToggleModal }: Props) {
  const { deleteClientMutateAsync, isPending } = useDeleteClientService({
    data,
  });

  async function handleClick() {
    try {
      await deleteClientMutateAsync(data.id);
      handleToggleModal();
    } catch (error) {}
  }

  return { handleClick, isPending };
}
