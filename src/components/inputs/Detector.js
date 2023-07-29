// components
import { SwitchStyle } from "./SwitchStyle";

// constants
import { PARAMETER_LABEL } from "../../dictionaries/constants";

// mui
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { setDetector } from "../../redux/parameterSlice";

/**
 * A component that contains a MUI Switch for the two detector values
 *
 * @param {string} optionOneData - The value passed to the server for option one.
 * @param {string} optionTwoData - The value passed to the server for option two.
 * @param {string} store - The current value selected by the user.
 */
export default function Detector({ optionOneData, optionTwoData, store }) {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    newAlignment
      ? dispatch(setDetector(optionTwoData))
      : dispatch(setDetector(optionOneData));
  };

  const label = {
    inputProps: { "aria-label": "Detector" },
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Detector</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>{PARAMETER_LABEL.detectorMCT}</Typography>
        <SwitchStyle
          {...label}
          onChange={handleChange}
          checked={store === optionTwoData ? true : false}
        />
        <Typography>{PARAMETER_LABEL.detectorInSb}</Typography>
      </Stack>
    </FormControl>
  );
}
