// components
import { SwitchStyle } from "./SwitchStyle";

// mui
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// redux
import { useDispatch } from "react-redux";

// redux slice
import {
  setBeamsplitter,
  setDetector,
  setMedium,
  setSource,
  setWindow,
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
          ? dispatch(setSource(optionTwoData))
          : dispatch(setSource(optionOneData));
        break;
      case "Beamsplitter":
        newAlignment
          ? dispatch(setBeamsplitter(optionTwoData))
          : dispatch(setBeamsplitter(optionOneData));
        break;
      case "Cell Window":
        newAlignment
          ? dispatch(setWindow(optionTwoData))
          : dispatch(setWindow(optionOneData));
        break;
      case "Detector":
        newAlignment
          ? dispatch(setDetector(optionTwoData))
          : dispatch(setDetector(optionOneData));
        break;
      case "Medium":
        newAlignment
          ? dispatch(setMedium(optionTwoData))
          : dispatch(setMedium(optionOneData));
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
