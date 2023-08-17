// components
import { SwitchStyle } from "./SwitchStyle";

// constants
import { PARAMETER_LABEL } from "../../dictionaries/constants";

// mui
import { FormControl, FormLabel, Stack, Typography } from "@mui/material";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { setSource } from "../../redux/parameterSlice";

/**
 * A component that contains a MUI Switch for the two detector values
 *
 * @param {number} optionOneData - The value passed to the server for option one.
 * @param {number} optionTwoData - The value passed to the server for option two.
 * @param {number} store - The current value selected by the user.
 */
export default function Source({ optionOneData, optionTwoData, store }) {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    newAlignment
      ? dispatch(setSource(optionTwoData))
      : dispatch(setSource(optionOneData));
  };

  const label = {
    inputProps: { "aria-label": "Source" },
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Source</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>{PARAMETER_LABEL.sourceGlobar}</Typography>
        <SwitchStyle
          {...label}
          onChange={handleChange}
          checked={store === optionTwoData ? true : false}
        />
        <Typography>{PARAMETER_LABEL.sourceTungsten}</Typography>
      </Stack>
    </FormControl>
  );
}
