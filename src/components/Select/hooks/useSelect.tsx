import { SelectChangeEvent } from "@mui/material";
import { useLimit } from "../../../context/limitContext";

export function useSelect() {
  const { limit, setLimit } = useLimit();
  const handleChange = (event: SelectChangeEvent) => {
    const newLimit = event.target.value;
    setLimit(newLimit);
  };
  return {
    handleChange,
    limit,
  };
}
