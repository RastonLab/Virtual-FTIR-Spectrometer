import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { CustomSwitch } from "./custom/CustomSwitch";

// redux
import { useDispatch } from "react-redux";
import { updateBeamsplitter } from "../../features/parameterSlice";

// this input component sets the beamsplitter to 'AR_ZnSe' or 'AR_CaF2'
export default function Beamsplitter() {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    newAlignment
      ? dispatch(updateBeamsplitter("AR_CaF2"))
      : dispatch(updateBeamsplitter("AR_ZnSe"));
  };

  const label = {
    inputProps: { "aria-label": "Beamsplitter" },
    unchecked: "AR_CaF2",
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Beamsplitter</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>AR_ZnSe</Typography>
        <CustomSwitch {...label} onChange={handleChange} />
        <Typography>AR_CaF2</Typography>
      </Stack>
    </FormControl>
  );
}
