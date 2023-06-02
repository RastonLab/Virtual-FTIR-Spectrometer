import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { CustomSwitch } from "./custom/CustomSwitch";

// redux
import { useDispatch } from "react-redux";
import { updateWindow } from "../../features/parameterSlice";

// this input component sets the cell window to 'ZnSe' or 'CaF2'
export default function Window({ parameter }) {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    newAlignment
      ? dispatch(updateWindow("CaF2"))
      : dispatch(updateWindow("ZnSe"));
  };

  const label = {
    inputProps: { "aria-label": "Cell Window" },
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Cell Window</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>ZnSe</Typography>
        <CustomSwitch
          {...label}
          onChange={handleChange}
          checked={parameter === "CaF2" ? true : false}
        />
        <Typography>CaF₂</Typography>
      </Stack>
    </FormControl>
  );
}
