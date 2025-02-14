import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { useSelect } from "./hooks/useSelect";
import Select from "@mui/material/Select";
import React from "react";

export default function SelectAutoWidth() {
  const { handleChange, limit } = useSelect();
  return (
    <FormControl sx={{ m: 1, minWidth: 70, width: 50, height: 25 }}>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={limit}
        onChange={handleChange}
        autoWidth
        sx={{
          height: 25,
          border: "1px solid #666666",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <MenuItem value="8">
          <em>8</em>
        </MenuItem>
        <MenuItem value="16">16</MenuItem>
        <MenuItem value="24">24</MenuItem>
        <MenuItem value="32">32</MenuItem>
      </Select>
    </FormControl>
  );
}
