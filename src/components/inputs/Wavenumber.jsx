import React, { useState } from "react";
import { Input, Slider } from "@mui/material";

export default function Wavenumber(min, max, setMin, setMax) {

    const [wavenumbers, setWavenumbers] = useState([4000, 9000]) //NOTE Issues bringing in defualt val from Experiment2

    const handleSliderChange = (e) => {
        // setWavenumbers(e.target.value) // 
        setMin(wavenumbers[0])
        setMax(wavenumbers[1])
    }

    const handleInputChange = (low, high) => {
        setWavenumbers([low, high])
    }   

    return (
        <div className="input">
            <label>Wavenumber cm<sup>-1</sup></label>
            <Slider
                getAriaLabel={() => 'Wavenumber Range'}
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
                onChange={(e) => handleInputChange(Number(e.target.value), wavenumbers[1])}
                onBlur={() => {}}
                min={400}
                max={wavenumbers[1]}
            />
            <label>Maximum Wavenumber</label>
            <Input
                value={wavenumbers[1]}
                onChange={(e) => handleInputChange(wavenumbers[0], Number(e.target.value))}
                onBlur={() => {}}
                min={wavenumbers[0]}
                max={12500}
                
            />
        </div>
      );
}