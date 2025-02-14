import { useSearchParams } from "react-router-dom";

export function usePagination() {
  const [, setSearchParams] = useSearchParams();
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setSearchParams((params) => {
      params.set("page", String(page));
      return params;
    });
  };
  return { handlePageChange };
}
