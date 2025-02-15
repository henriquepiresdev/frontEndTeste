import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../../../Api/routes";
import { User } from "../../../../Api/@types/user";

export function useFormCreateClientService() {
  const queryClient = useQueryClient();
  const { mutateAsync: createClientMutation } = useMutation({
    mutationFn: (userData: Omit<User, "id" | "createdAt" | "updatedAt">) =>
      createUser(userData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["usersNotSelected"] });
    },
    onError: (error) => {
      // pode ser um toast
    },
  });

  return { createClientMutation };
}
