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
import { setWindow } from "../../redux/parameterSlice";

export default function CellWindow({ optionOneData, optionTwoData, store }) {
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    newAlignment
      ? dispatch(setWindow(optionTwoData))
      : dispatch(setWindow(optionOneData));
  };

  const label = {
    inputProps: { "aria-label": "Cell Window" },
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Cell Window</FormLabel>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>{PARAMETER_LABEL.cellWindowZnSe}</Typography>
        <SwitchStyle
          {...label}
          onChange={handleChange}
          checked={store === optionTwoData ? true : false}
        />
        <Typography>{PARAMETER_LABEL.cellWindowCaF2}</Typography>
      </Stack>
    </FormControl>
  );
}
