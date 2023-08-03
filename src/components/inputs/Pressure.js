// mui
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

// redux
import { useDispatch } from "react-redux";

// redux store
import { setPressure } from "../../redux/parameterSlice";

/**
 * A component that contains a MUI Text Field for the pressure value
 *
 * @param {number} min - The minimum accepted value.
 * @param {number} max - The maximum accepted value.
 * @param {number} step - The amount the value is incremented or decremented.
 * @param {string} store - The current value entered by the user.
 */
export default function Pressure({ min, max, step, store }) {
  const dispatch = useDispatch();

  const checkRange = () => {
    if (store < min) {
      store = min;
    } else if (store > max) {
      store = max;
    }

    dispatch(setPressure(store));
  }

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
        onBlur={checkRange}
        InputProps={{
          inputProps: {
            min: min,
            max: max,
          },
          endAdornment: <InputAdornment position="end">Bar</InputAdornment>,
        }}
      />
    </div>
  );
}
