// mui
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { updateScan } from "../../features/parameterSlice";

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
    <div>
      <Typography id="input-slider" gutterBottom>
        {formLabel}
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ShowChartIcon />
        </Grid>
        <Grid item>
          <Slider
            sx={{ minWidth: "200px" }}
            value={typeof store === "number" ? store : min}
            min={min}
            max={max}
            onChange={handleSliderChange}
            aria-labelledby={"input-slider"}
          />
        </Grid>
        <Grid item>
          <Input
            sx={{ minWidth: "75px", maxWidth: "75px" }}
            value={store}
            size="small"
            onChange={handleInputChange}
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
