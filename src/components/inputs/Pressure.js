import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updatePressure } from "../../features/parameterSlice";

// this input component sets the pressure from 0 to 10 Bar
export default function Pressure() {
  const dispatch = useDispatch();
  const { pressure } = useSelector((store) => store.parameter);

  const handleTextChange = (event) => {
    dispatch(
      updatePressure(
        event.target.value === "" ? "" : Number(event.target.value)
      )
    );
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-number"
        label="Pressure"
        placeholder="Enter pressure "
        type="number"
        value={pressure}
        onChange={handleTextChange}
        InputProps={{
          inputProps: {
            min: 0.0001,
            max: 10,
            step: 0.0001,
          },
          endAdornment: <InputAdornment position="end">Bar</InputAdornment>,
        }}
      />
    </Box>
  );
}
