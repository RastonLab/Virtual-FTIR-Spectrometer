import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import ShowChartIcon from "@mui/icons-material/ShowChart";

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateScan } from "../../features/parameter/parameterSlice";

const Input = styled(MuiInput)`
  width: 42px;
`;

// this input component sets the number of times the spectrum generation function runs
export default function Scan() {
  const dispatch = useDispatch();
  const { scan } = useSelector((store) => store.parameter);

  const handleSliderChange = (event, newValue) => {
    dispatch(updateScan(newValue));
  };

  const handleInputChange = (event) => {
    dispatch(
      updateScan(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  const handleBlur = () => {
    if (scan < 1) {
      dispatch(updateScan(1));
    } else if (scan > 10000) {
      dispatch(updateScan(10000));
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
        Number of Scans
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ShowChartIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof scan === "number" ? scan : 1}
            min={1}
            max={10000}
            onChange={handleSliderChange}
            aria-labelledby={"input-slider"}
          />
        </Grid>
        <Grid item>
          <Input
            sx={{ width: "75%" }}
            value={scan}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 1,
              max: 10000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
