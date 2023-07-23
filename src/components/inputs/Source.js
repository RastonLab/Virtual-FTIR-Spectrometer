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
import { setSource } from "../../redux/parameterSlice";

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
