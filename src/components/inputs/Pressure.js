// mui
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

// redux
import { useDispatch } from "react-redux";

// redux store
import { setPressure } from "../../features/parameterSlice";

export default function Pressure({ store, min, max, step }) {
  const dispatch = useDispatch();

  const handleTextChange = (event) => {
    dispatch(
      setPressure(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  return (
    <div>
      <TextField
        sx={{ maxWidth: "175px" }}
        label="Pressure"
        placeholder="Enter pressure"
        type="number"
        value={store}
        onChange={handleTextChange}
        InputProps={{
          inputProps: {
            min: min,
            max: max,
            step: step,
          },
          endAdornment: <InputAdornment position="end">Bar</InputAdornment>,
        }}
      />
    </div>
  );
}
