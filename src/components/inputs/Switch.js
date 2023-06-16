import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { SwitchStyle } from "./SwitchStyle";

// redux
import { useDispatch } from "react-redux";
import {
  updateBeamsplitter,
  updateDetector,
  updateMedium,
  updateSource,
  updateWindow,
} from "../../features/parameterSlice";

export default function Switch({
  formLabel,
  optionOneLabel,
  optionOneData,
  optionTwoLabel,
  optionTwoData,
  store,
}) {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    switch (formLabel) {
      case "Source":
        newAlignment
          ? dispatch(updateSource(optionTwoData))
          : dispatch(updateSource(optionOneData));
        break;
      case "Beamsplitter":
        newAlignment
          ? dispatch(updateBeamsplitter(optionTwoData))
          : dispatch(updateBeamsplitter(optionOneData));
        break;
      case "Cell Window":
        newAlignment
          ? dispatch(updateWindow(optionTwoData))
          : dispatch(updateWindow(optionOneData));
        break;
      case "Detector":
        newAlignment
          ? dispatch(updateDetector(optionTwoData))
          : dispatch(updateDetector(optionOneData));
        break;
      case "Medium":
        newAlignment
          ? dispatch(updateMedium(optionTwoData))
          : dispatch(updateMedium(optionOneData));
        break;
      default:
    }
  };

  const label = {
    inputProps: { "aria-label": formLabel },
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{formLabel}</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>{optionOneLabel}</Typography>
        <SwitchStyle
          {...label}
          onChange={handleChange}
          checked={store === optionTwoData ? true : false}
        />
        <Typography>{optionTwoLabel}</Typography>
      </Stack>
    </FormControl>
  );
}
