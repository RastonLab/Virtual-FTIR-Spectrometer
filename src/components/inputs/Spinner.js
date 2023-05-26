import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { CustomSwitch } from "./custom/CustomSwitch";

// redux
import { useDispatch } from "react-redux";
import {
  activateProgress,
  deactivateProgress,
} from "../features/progress/progressSlice";

export default function Spinner() {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    newAlignment
      ? dispatch(activateProgress())
      : dispatch(deactivateProgress());
  };

  const label = {
    inputProps: { "aria-label": "Spinner" },
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Spinner</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <CustomSwitch {...label} onChange={handleChange} />
        <Typography>On</Typography>
      </Stack>
    </FormControl>
  );
}
