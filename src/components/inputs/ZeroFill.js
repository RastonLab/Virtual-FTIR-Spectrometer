// mui
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { setZeroFill } from "../../redux/parameterSlice";

/**
 * A component that contains a MUI Select (dropdown) for the resolution values
 *
 * @param {object} dictionary - The list of pre-selected values.
 * @param {number} store - The current value selected by the user.
 */
export default function ZeroFill({ dictionary, store }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setZeroFill(event.target.value));
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Zero Fill</InputLabel>
        <Select
          value={store}
          label="Zero Fill"
          onChange={handleChange}
          sx={{ maxWidth: "120px" }}
        >
          {dictionary.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
