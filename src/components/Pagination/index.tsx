import { usePagination } from "./hooks/usePagination";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";

export type PaginationRoundedProps = {
  pages: number;
  currentPage: number;
};

export default function PaginationRounded({
  pages,
  currentPage,
}: PaginationRoundedProps) {
  const { handlePageChange } = usePagination();

  return (
    <Stack spacing={2} className="mt-1 mb-5">
      <Pagination
        count={pages}
        page={currentPage}
        shape="rounded"
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-root": {
            "&:hover": {
              backgroundColor: "#d85e1d",
              border: "1px solid #ff6347",
              color: "white",
            },
            "&.Mui-selected": {
              backgroundColor: "#d85e1d",
              border: "1px solid #ff6347",
              color: "white",
            },
          },
        }}
      />
    </Stack>
  );
}
