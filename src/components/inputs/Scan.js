// mui
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

// redux
import { useDispatch } from "react-redux";

// redux slice
import { setScan } from "../../features/parameterSlice";

export default function Scan({ store, min, max, step }) {
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    dispatch(setScan(newValue));
  };

  const handleInputChange = (event) => {
    dispatch(
      setScan(event.target.value === "" ? "" : Number(event.target.value))
    );
  };

  const handleBlur = () => {
    if (store < min) {
      dispatch(setScan(min));
    } else if (store > max) {
      dispatch(setScan(max));
    }
  };

  return (
    <div>
      <Typography id="input-slider" gutterBottom>
        Number of Scans
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