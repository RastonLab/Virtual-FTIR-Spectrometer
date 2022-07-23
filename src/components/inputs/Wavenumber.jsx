import React, { useState } from "react";
import { Input, Slider } from "@mui/material";

export default function Wavenumber(min, max, setMin, setMax) {
  const [wavenumbers, setWavenumbers] = useState([4000, 9000]); //NOTE Issues bringing in defualt val from Experiment2

  const handleSliderChange = (e) => {
    // setWavenumbers(e.target.value) //
    setMin(wavenumbers[0]);
    setMax(wavenumbers[1]);
  };

  const handleInputChange = (low, high) => {
    setWavenumbers([low, high]);
  };

  const handleBlur = () => {
    if (wavenumbers[0] < 400) {
      setMin(400);
    } else if (wavenumbers[0] > wavenumbers[1]) {
      setMin(wavenumbers[1]);
    } else if (wavenumbers[1] > 12500) {
      setMax(125000);
    }
    setWavenumbers([Number(min), Number(max)]);
  };

  return (
    <div className="input">
      <label>
        Wavenumber cm<sup>-1</sup>
      </label>
      <Slider
        getAriaLabel={() => "Wavenumber Range"}
        value={wavenumbers}
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
        disableSwap
        min={400}
        max={12500}
        color="warning"
      />
      <label>Minimum Wavenumber</label>
      <Input
        value={wavenumbers[0]}
        onChange={(e) =>
          handleInputChange(Number(e.target.value), wavenumbers[1])
        }
        onBlur={handleBlur}
        min={400}
        max={wavenumbers[1]}
      />
      <label>Maximum Wavenumber</label>
      <Input
        value={wavenumbers[1]}
        onChange={(e) =>
          handleInputChange(wavenumbers[0], Number(e.target.value))
        }
        onBlur={handleBlur}
        min={wavenumbers[0]}
        max={12500}
      />
    </div>
  );
}
