import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { CustomSwitch } from "./custom/CustomSwitch";

// redux
import { useDispatch } from "react-redux";
import { updateDetector } from "../../features/parameter/parameterSlice";

// this input component sets the detector to 'MCT' or 'InSb'
export default function Detector() {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    newAlignment
      ? dispatch(updateDetector("InSb"))
      : dispatch(updateDetector("MCT"));
  };

  const label = {
    inputProps: { "aria-label": "Detector" },
    unchecked: "InSb",
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Detector</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>MCT</Typography>
        <CustomSwitch {...label} onChange={handleChange} />
        <Typography>InSb</Typography>
      </Stack>
    </FormControl>
  );
}
