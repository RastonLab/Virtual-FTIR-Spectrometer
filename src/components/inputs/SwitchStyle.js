import { styled, Switch } from "@mui/material";
import { pink, blue } from "@mui/material/colors";

/**
 * A component that contains custom style elements for a MUI Switch
 */
export const SwitchStyle = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: pink[400],
      "& + .MuiSwitch-track": {
        backgroundColor: pink[300],
      },
    },
    color: blue[700],
    "& + .MuiSwitch-track": {
      backgroundColor: blue[600],
    },
  },
}));
