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
import { setMedium } from "../../redux/parameterSlice";

/**
 * A component that contains a MUI Switch for the two medium values
 *
 * @param {string} optionOneData - The value passed to the server for option one.
 * @param {string} optionTwoData - The value passed to the server for option two.
 * @param {string} store - The current value selected by the user.
 */
export default function Medium({ optionOneData, optionTwoData, store }) {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    newAlignment
      ? dispatch(setMedium(optionTwoData))
      : dispatch(setMedium(optionOneData));
  };

  const label = {
    inputProps: { "aria-label": "Medium" },
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Medium</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>{PARAMETER_LABEL.mediumVacuum}</Typography>
        <SwitchStyle
          {...label}
          onChange={handleChange}
          checked={store === optionTwoData ? true : false}
        />
        <Typography>{PARAMETER_LABEL.mediumAir}</Typography>
      </Stack>
    </FormControl>
  );
}
