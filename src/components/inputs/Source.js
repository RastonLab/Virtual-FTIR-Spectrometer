import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { CustomSwitch } from "./custom/CustomSwitch";

// redux
import { useDispatch } from "react-redux";
import { updateSource } from "../../features/parameter/parameterSlice";

// this input component sets the source temperature to globar (1700 K) or tungsten (3100 K)
export default function Source() {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    newAlignment ? dispatch(updateSource(1700)) : dispatch(updateSource(3100));
  };

  const label = {
    inputProps: { "aria-label": "Source" },
    unchecked: "Tungsten",
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Source</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Tungsten</Typography>
        <CustomSwitch {...label} onChange={handleChange} />
        <Typography>Globar</Typography>
      </Stack>
    </FormControl>
  );
}
