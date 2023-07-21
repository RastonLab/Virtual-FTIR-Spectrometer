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
import { setMedium } from "../../redux/parameterSlice";

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
        <Typography>Vacuum</Typography>
        <SwitchStyle
          {...label}
          onChange={handleChange}
          checked={store === optionTwoData ? true : false}
        />
        <Typography>Air</Typography>
      </Stack>
    </FormControl>
  );
}
