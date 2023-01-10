import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const SearchSelect = () => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Search by</InputLabel>
      <Select labelId="demo-select-small" id="demo-select-small" label="Price">
        <MenuItem>Lower price</MenuItem>
        <MenuItem>Brand</MenuItem>
        <MenuItem>A to Z</MenuItem>
      </Select>
    </FormControl>
  );
};
