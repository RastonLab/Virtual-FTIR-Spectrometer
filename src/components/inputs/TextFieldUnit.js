// mui
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

// redux
import { useDispatch } from "react-redux";

// redux store
import { updatePressure } from "../../features/parameterSlice";

export default function TextFieldUnit({
  formLabel,
  store,
  placeholder,
  unit,
  min,
  max,
  step,
}) {
  const dispatch = useDispatch();

  const handleTextChange = (event) => {
    switch (formLabel) {
      case "Pressure":
        dispatch(
          updatePressure(
            event.target.value === "" ? "" : Number(event.target.value)
          )
        );
        break;
      default:
    }
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-number"
        label={formLabel}
        placeholder={placeholder}
        type="number"
        value={store}
        onChange={handleTextChange}
        InputProps={{
          inputProps: {
            min: min,
            max: max,
            step: step,
          },
          endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
        }}
      />
    </Box>
  );
}
