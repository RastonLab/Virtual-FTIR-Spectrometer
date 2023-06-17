import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { updateWaveMin, updateWaveMax } from "../../features/parameterSlice";

const Input = styled(MuiInput)`
  width: 52px;
`;

export default function DualInputSlider({
  formLabel,
  storeMin,
  storeMax,
  unit,
  min,
  max,
  step,
}) {
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    switch (formLabel) {
      case "Wavenumber range":
        dispatch(updateWaveMin(newValue[0]));
        dispatch(updateWaveMax(newValue[1]));
        break;
      default:
    }
  };

  const handleInputChangeMin = (event) => {
    switch (formLabel) {
      case "Wavenumber range":
        dispatch(
          updateWaveMin(
            event.target.value === "" ? "" : Number(event.target.value)
          )
        );
        break;
      default:
    }
  };

  const handleInputChangeMax = (event) => {
    switch (formLabel) {
      case "Wavenumber range":
        dispatch(
          updateWaveMax(
            event.target.value === "" ? "" : Number(event.target.value)
          )
        );
        break;
      default:
    }
  };

  const handleBlur = () => {
    if (storeMin > storeMax) {
      return;
    }
    if (storeMin < min) {
      switch (formLabel) {
        case "Wavenumber range":
          dispatch(updateWaveMin(min));
          break;
        default:
      }
    }
    if (storeMax > max) {
      switch (formLabel) {
        case "Wavenumber range":
          dispatch(updateWaveMax(max));
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
        <Grid item>
          <Input
            id="standard-adornment-weight"
            endAdornment={
              <InputAdornment position="end">{unit}</InputAdornment>
            }
            aria-describedby="standard-weight-helper-text"
            sx={{ width: "75%" }}
            value={storeMin}
            size="small"
            onChange={handleInputChangeMin}
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
        <Grid item xs>
          <Slider
            value={[
              storeMin === "" ? min : storeMin,
              storeMax === "" ? max : storeMax,
            ]}
            min={min}
            max={max}
            onChange={handleSliderChange}
            aria-labelledby={"input-slider"}
          />
        </Grid>
        <Grid item>
          <Input
            id="standard-adornment-weight"
            endAdornment={
              <InputAdornment position="end">{unit}</InputAdornment>
            }
            aria-describedby="standard-weight-helper-text"
            sx={{ width: "75%" }}
            value={storeMax}
            size="small"
            onChange={handleInputChangeMax}
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
