import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// dictionaries
import { molecules } from "../../dictionaries/moleculeDict";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateMolecule } from "../../features/parameter/parameterSlice";

// this input component sets the molecule to a pre-approved selection
export default function Molecule() {
  const dispatch = useDispatch();
  const { molecule } = useSelector((store) => store.parameter);

  const handleChange = (event) => {
    dispatch(updateMolecule(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Molecule</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={molecule}
          label="molecules"
          onChange={handleChange}
        >
          {molecules.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
