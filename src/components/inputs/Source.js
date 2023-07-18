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
import { setSource } from "../../features/parameterSlice";

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
        <Typography>Globar</Typography>
        <SwitchStyle
          {...label}
          onChange={handleChange}
          checked={store === optionTwoData ? true : false}
        />
        <Typography>Tungsten</Typography>
      </Stack>
    </FormControl>
  );
}
