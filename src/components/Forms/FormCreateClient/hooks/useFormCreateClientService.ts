import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "../../../../Api/@types/user";
import { createUser } from "../../../../Api/routes";

export function useFormCreateClientService() {
  const queryClient = useQueryClient();
  const { mutateAsync: createClientMutation } = useMutation({
    mutationFn: (userData: Omit<User, "id" | "createdAt" | "updatedAt">) =>
      createUser(userData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["usersNotSelected"] });
    },
    onError: (error) => {
      // Lógica de tratamento de erro
    },
  });

  return { createClientMutation };
}
