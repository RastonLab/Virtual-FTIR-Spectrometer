// mui
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

// redux
import { useDispatch } from "react-redux";

// redux store
import { setPressure } from "../../features/parameterSlice";

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
          setPressure(
            event.target.value === "" ? "" : Number(event.target.value)
          )
        );
        break;
      default:
    }
  };

  return (
    <div>
      <TextField
        sx={{ maxWidth: "175px" }}
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
    </div>
  );
}
