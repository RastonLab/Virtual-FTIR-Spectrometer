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
import { setBeamsplitter } from "../../features/parameterSlice";

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
        <Typography>AR-ZnSe</Typography>
        <SwitchStyle
          {...label}
          onChange={handleChange}
          checked={store === optionTwoData ? true : false}
        />
        <Typography>AR-CaF₂</Typography>
      </Stack>
    </FormControl>
  );
}
