// components
import { SwitchStyle } from "./SwitchStyle";

// constants
import { PARAMETER_LABEL } from "../../dictionaries/constants";

// mui
import { FormControl, FormLabel, Stack, Typography } from "@mui/material";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { setBeamsplitter } from "../../redux/parameterSlice";

/**
 * A component that contains a MUI Switch for the two beamsplitter values
 *
 * @param {string} optionOneData - The value passed to the server for option one.
 * @param {string} optionTwoData - The value passed to the server for option two.
 * @param {string} store - The current value selected by the user.
 */
export default function Beamsplitter({ optionOneData, optionTwoData, store }) {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    newAlignment
      ? dispatch(setBeamsplitter(optionTwoData))
      : dispatch(setBeamsplitter(optionOneData));
  };

  const label = {
    inputProps: { "aria-label": "Beamsplitter" },
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Beamsplitter</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>{PARAMETER_LABEL.beamsplitterZnSe}</Typography>
        <SwitchStyle
          {...label}
          onChange={handleChange}
          checked={store === optionTwoData ? true : false}
        />
        <Typography>{PARAMETER_LABEL.beamsplitterCaF2}</Typography>
      </Stack>
    </FormControl>
  );
}
