import { useSearchParams } from "react-router-dom";
import { useLimit } from "../../context/limitContext";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Api/routes";
import { useGetUsersQuery } from "./useClientService";

export function useClientSelected() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data, isLoading, isError } = useGetUsersQuery({
    query: "usersSelected",
  });
  return {
    data,
    isLoading,
    isError,
    page,
  };
}
