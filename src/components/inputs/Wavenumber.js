import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  updateWaveMin,
  updateWaveMax,
} from "../../features/parameter/parameterSlice";

const Input = styled(MuiInput)`
  width: 52px;
`;

// this input component sets the wavenumber to a value from 400 to 12500
export default function Wavenumber() {
  const dispatch = useDispatch();
  const { waveMin, waveMax } = useSelector((store) => store.parameter);

  const handleSliderChange = (event, newValue) => {
    dispatch(updateWaveMin(newValue[0]));
    dispatch(updateWaveMax(newValue[1]));
  };

  const handleInputChangeMin = (event) => {
    dispatch(
      updateWaveMin(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  const handleInputChangeMax = (event) => {
    dispatch(
      updateWaveMax(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  const handleBlur = () => {
    if (waveMin > waveMax) {
      return;
    }
    if (waveMin < 400) {
      dispatch(updateWaveMin(400));
    }
    if (waveMax > 12500) {
      dispatch(updateWaveMax(12500));
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
        Wavenumber range (cm⁻¹)
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Input
            sx={{ width: "75%" }}
            value={waveMin}
            size="small"
            onChange={handleInputChangeMin}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 400,
              max: 12500,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item xs>
          <Slider
            value={[
              waveMin === "" ? 400 : waveMin,
              waveMax === "" ? 12500 : waveMax,
            ]}
            min={400}
            max={12500}
            onChange={handleSliderChange}
            aria-labelledby={"input-slider"}
          />
        </Grid>
        <Grid item>
          <Input
            sx={{ width: "75%" }}
            value={waveMax}
            size="small"
            onChange={handleInputChangeMax}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 400,
              max: 12500,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
