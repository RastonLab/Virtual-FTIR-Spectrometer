import { styled } from "@mui/material";
import { pink, blue } from "@mui/material/colors";
import { Switch } from "@mui/material";

export const CustomSwitch = styled(Switch)(({ theme }) => ({
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
