import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../../../Api/routes";
import { User } from "../../../../Api/@types/user";

type Props = {
  data: User;
};

export function useDeleteClientService({ data }: Props) {
  const queryClient = useQueryClient();
  const query = data.isSelected ? "usersSelected" : "usersNotSelected";
  const { mutateAsync: deleteClientMutateAsync, isPending } = useMutation({
    mutationFn: async (id: number) => {
      return deleteUser(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [query],
      });
    },
    onError: (error) => {
      // pode ser um toast
    },
  });

  return { deleteClientMutateAsync, isPending };
}
