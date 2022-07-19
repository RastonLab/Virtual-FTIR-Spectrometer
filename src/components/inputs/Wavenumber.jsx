import React, { useState } from "react";
import { Input, Slider } from "@mui/material";

export default function Wavenumber(min, max, setMin, setMax) {

    const [wavenumbers, setWavenumbers] = useState([4000, 9000])

    const handleChange = (e) => {
        setWavenumbers(e.target.value)
        // setMin(wavenumbers[0])
        // setMax(wavenumbers[1])
    }

    return (
        <div className="input">
            <Slider
                getAriaLabel={() => 'Wavenumber Range'}
                value={wavenumbers}
                valueLabelDisplay="auto"
                onChange={handleChange}
                disableSwap
                min={400}
                max={12500}
            />
        </div>
      );
}