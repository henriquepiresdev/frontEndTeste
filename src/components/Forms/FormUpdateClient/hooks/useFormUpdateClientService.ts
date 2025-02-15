import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "../../../../Api/@types/user";
import { updateUser } from "../../../../Api/routes";

type Props = {
  data: User;
};

export function useFormUpdateClientService({ data }: Props) {
  const queryClient = useQueryClient();
  const query = data.isSelected ? "usersSelected" : "usersNotSelected";
  const { mutateAsync: updateClientMutation } = useMutation({
    mutationFn: async (userData: Partial<User>) => {
      const filteredData = Object.fromEntries(
        Object.entries(userData).filter(
          ([_, value]) => value !== "" && value !== undefined
        )
      );
      return updateUser(data.id, filteredData);
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

  return { updateClientMutation };
}
