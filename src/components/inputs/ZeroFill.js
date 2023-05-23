import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// dictionaries
import { zeroFills } from "../../dictionaries/zeroFillDict";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateZeroFill } from "../../features/parameter/parameterSlice";

// this input component sets the zero filling to zero, one, or two
export default function ZeroFill() {
  const dispatch = useDispatch();
  const { zeroFill } = useSelector((store) => store.parameter);

  const handleChange = (event) => {
    dispatch(updateZeroFill(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Zero Fill</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={zeroFill}
          label="zeroFill"
          onChange={handleChange}
        >
          {zeroFills.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
