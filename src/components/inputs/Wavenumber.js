// mui
import { Grid, Input, Slider, Typography } from "@mui/material";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { setWaveMin, setWaveMax } from "../../redux/parameterSlice";

// style
import "../../style/components/NumberInputs.css"

/**
 * A component that contains a MUI Slider and Inputs for the wavenumber values
 *
 * @param {number} min - The minimum accepted value.
 * @param {number} max - The maximum accepted value.
 * @param {number} step - The amount the value is incremented or decremented.
 * @param {number} storeMin - The current lower bound entered by the user.
 * @param {number} storeMax - The current upper bound entered by the user.
 */
export default function Wavenumber({ min, max, step, storeMin, storeMax }) {
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    dispatch(setWaveMin(newValue[0]));
    dispatch(setWaveMax(newValue[1]));
  };

  const handleInputChangeMin = (event) => {
    dispatch(
      setWaveMin(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  const handleInputChangeMax = (event) => {
    dispatch(
      setWaveMax(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  const handleBlur = () => {

    if (storeMin > storeMax) {
      const temp = storeMin;
      storeMin = storeMax;
      storeMax = temp;
    }

    if (storeMin < min) {
      storeMin = min;
    }

    if (storeMax > max) {
      storeMax = max;
    }

    dispatch(setWaveMin(storeMin));
    dispatch(setWaveMax(storeMax));
  };

  return (
    <div>
      <Typography id="input-slider" gutterBottom>
        Wavenumber range (cm⁻¹)
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
            sx={{ minWidth: "250px" }}
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
