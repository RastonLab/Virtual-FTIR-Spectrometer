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
import { setDetector } from "../../redux/parameterSlice";

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
        <Typography>MCT</Typography>
        <SwitchStyle
          {...label}
          onChange={handleChange}
          checked={store === optionTwoData ? true : false}
        />
        <Typography>InSb</Typography>
      </Stack>
    </FormControl>
  );
}
