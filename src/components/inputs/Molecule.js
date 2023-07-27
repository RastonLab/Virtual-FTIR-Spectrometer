// mui
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { setMolecule } from "../../redux/parameterSlice";

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
