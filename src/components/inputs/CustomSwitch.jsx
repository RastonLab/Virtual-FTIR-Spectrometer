import { styled } from "@mui/material";
import { purple, yellow, blue } from "@mui/material/colors";
import { Switch } from "@mui/material";

export const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase': {
        '&.Mui-checked': {
            color: purple[600],
            '& + .MuiSwitch-track': {
                backgroundColor: purple[500]
            }
        },
        // color: yellow[700],
        // '& + .MuiSwitch-track': {
        //     backgroundColor: yellow[600]
        // }
        color: blue[700],
        '& + .MuiSwitch-track': {
            backgroundColor: blue[600]
        }
    }
}));