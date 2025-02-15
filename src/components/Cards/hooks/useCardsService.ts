import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../../Api/routes";
import { User } from "../../../Api/@types/user";

export function useCardsService() {
  const queryClient = useQueryClient();
  const { mutateAsync: addOrRemoveClienteMutation, isPending } = useMutation({
    mutationFn: async (userData: Partial<User>) => {
      const { id, ...dataWithoutId } = userData;
      return updateUser(id!, dataWithoutId);
    },
    onSuccess: (data, variables) => {
      const { id, isSelected } = variables;

      queryClient.setQueryData(["usersSelected"], (oldData: User[]) => {
        if (!oldData) return;
        return oldData.map((user: User) =>
          user.id === id ? { ...user, isSelected } : user
        );
      });
      queryClient.setQueryData(["usersNotSelected"], (oldData: User[]) => {
        if (!oldData) return;
        return oldData.map((user: User) =>
          user.id === id ? { ...user, isSelected } : user
        );
      });
      queryClient.invalidateQueries({ queryKey: ["usersSelected"] });
      queryClient.invalidateQueries({ queryKey: ["usersNotSelected"] });
    },

    onError: (error) => {
      // pode ser um toast
    },
  });

  return { addOrRemoveClienteMutation, isPending };
}
