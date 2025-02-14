import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Api/routes";
import { useSearchParams } from "react-router-dom";
import { useLimit } from "../../context/limitContext";

type Props = {
  query: string;
};
export function useGetUsersQuery({ query }: Props) {
  const { limit } = useLimit();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["usersNotSelected", page, limit],
    queryFn: () =>
      getUsers({ page: String(page), limit: limit, isSelected: true }),
  });
  return {
    data,
    isLoading,
    isError,
    page,
  };
}
