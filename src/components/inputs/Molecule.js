// mui
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { setMolecule } from "../../redux/parameterSlice";

/**
 * A component that contains a MUI Select (dropdown) for the molecule values
 *
 * @param {object} dictionary - The key-value pairs (value, label).
 * @param {string} store - The current value selected by the user.
 */
export default function Molecule({ dictionary, store }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setMolecule(event.target.value));
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Molecule</InputLabel>
        <Select
          value={store}
          label="Molecule"
          onChange={handleChange}
          sx={{ maxWidth: "120px" }}
        >
          {Object.keys(dictionary).map((option) => (
            <MenuItem key={option} value={option}>
              {dictionary[option]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
