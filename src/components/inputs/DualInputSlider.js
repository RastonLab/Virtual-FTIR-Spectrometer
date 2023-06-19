// mui
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { updateWaveMin, updateWaveMax } from "../../features/parameterSlice";

export default function DualInputSlider({
  formLabel,
  storeMin,
  storeMax,
  min,
  max,
  step,
}) {
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    switch (formLabel) {
      case "Wavenumber range (cm⁻¹)":
        dispatch(updateWaveMin(newValue[0]));
        dispatch(updateWaveMax(newValue[1]));
        break;
      default:
    }
  };

  const handleInputChangeMin = (event) => {
    switch (formLabel) {
      case "Wavenumber range (cm⁻¹)":
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
      case "Wavenumber range (cm⁻¹)":
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
        case "Wavenumber range (cm⁻¹)":
          dispatch(updateWaveMin(min));
          break;
        default:
      }
    }
    if (storeMax > max) {
      switch (formLabel) {
        case "Wavenumber range (cm⁻¹)":
          dispatch(updateWaveMax(max));
          break;
        default:
      }
    }
  };

  return (
    <div>
      <Typography id="input-slider" gutterBottom>
        {formLabel}
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Input
            sx={{ minWidth: "75px", maxWidth: "75px" }}
            value={storeMin}
            onChange={handleInputChangeMin}
            onBlur={handleBlur}
            inputProps={{
              step: step,
              min: min,
              max: max,
              type: "number",
            }}
          />
        </Grid>

        <Grid item>
          <Slider
            sx={{ minWidth: "150px" }}
            value={[
              storeMin === "" ? min : storeMin,
              storeMax === "" ? max : storeMax,
            ]}
            min={min}
            max={max}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>

        <Grid item>
          <Input
            sx={{ minWidth: "75px", maxWidth: "75px" }}
            value={storeMax}
            onChange={handleInputChangeMax}
            onBlur={handleBlur}
            inputProps={{
              step: step,
              min: min,
              max: max,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
