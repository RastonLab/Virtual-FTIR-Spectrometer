import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// redux
import { useDispatch } from "react-redux";

// redux slice
import {
  updateMolecule,
  updateResolution,
  updateZeroFill,
} from "../../features/parameterSlice";

export default function Dropdown({ dictionary, formLabel, store }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (formLabel) {
      case "Molecule":
        dispatch(updateMolecule(event.target.value));
        break;
      case "Resolution":
        dispatch(updateResolution(event.target.value));
        break;
      case "Zero Fill":
        dispatch(updateZeroFill(event.target.value));
        break;
      default:
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{formLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={store}
          label={formLabel}
          onChange={handleChange}
        >
          {dictionary.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
