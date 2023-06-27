// mui
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

// redux
import { useDispatch } from "react-redux";

// redux slice
import {
  updateMolecule,
  updateResolution,
  updateZeroFill,
} from "../../features/parameterSlice";

export default function Dropdown({ dictionary, formLabel, store }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (formLabel) {
      case "Molecule":
        dispatch(updateMolecule(event.target.value));
        break;
      case "Resolution":
        dispatch(updateResolution(event.target.value));
        break;
      case "Zero Fill":
        dispatch(updateZeroFill(event.target.value));
        break;
      default:
    }
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>{formLabel}</InputLabel>
        <Select
          value={store}
          label={formLabel}
          onChange={handleChange}
          sx={{ maxWidth: "120px" }}
        >
          {dictionary.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
