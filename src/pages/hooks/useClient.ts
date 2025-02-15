import { useSearchParams } from "react-router-dom";
import { useGetUsersQuery } from "./useClientService";

export function useClient() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data, isLoading, isError } = useGetUsersQuery({
    query: "usersNotSelected",
  });
  return {
    data,
    page,
    isLoading,
    isError,
  };
}
