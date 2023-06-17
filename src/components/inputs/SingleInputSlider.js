import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import ShowChartIcon from "@mui/icons-material/ShowChart";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { updateScan } from "../../features/parameterSlice";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function SingleInputSlider({
  formLabel,
  store,
  min,
  max,
  step,
}) {
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    switch (formLabel) {
      case "Scans":
        dispatch(updateScan(newValue));
        break;
      default:
    }
  };

  const handleInputChange = (event) => {
    switch (formLabel) {
      case "Scans":
        dispatch(
          updateScan(
            event.target.value === "" ? "" : Number(event.target.value)
          )
        );
        break;
      default:
    }
  };

  const handleBlur = () => {
    if (store < min) {
      switch (formLabel) {
        case "Scans":
          dispatch(updateScan(min));
          break;
        default:
      }
    } else if (store > max) {
      switch (formLabel) {
        case "Scans":
          dispatch(updateScan(max));
          break;
        default:
      }
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
        {formLabel}
      </Typography>
      <Grid alignItems="center">
        <Grid item xs>
          <ShowChartIcon />
          <Slider
            value={typeof store === "number" ? store : min}
            min={min}
            max={max}
            onChange={handleSliderChange}
            aria-labelledby={"input-slider"}
          />
        </Grid>
        <Grid item>
          <Input
            sx={{ width: "75%" }}
            value={store}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: step,
              min: min,
              max: max,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
