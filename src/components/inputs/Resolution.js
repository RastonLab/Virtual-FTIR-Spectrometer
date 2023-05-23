import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// dictionaries
import { resolutions } from "../../dictionaries/resolutionDict";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateResolution } from "../../features/parameter/parameterSlice";

// this input component sets the resolution from a pre-approved selection
export default function Resolution() {
  const dispatch = useDispatch();
  const { resolution } = useSelector((store) => store.parameter);

  const handleChange = (event) => {
    dispatch(updateResolution(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Resolution</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={resolution}
          label="resolution"
          onChange={handleChange}
        >
          {resolutions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
