import React from "react";
import { Input } from "@mui/material";

// this input component sets the maximum wavenumber to a value from 400 to 12500
export default function MaxWave({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="max-wave">
        Wavenumber MAX range (cm<sup>-1</sup>)
      </label>
      <Input
        id="max-wave"
        type="number"
        defaultValue={val}
        min={400}
        max={12500}
        onChange={(e) => setter(Number(e.target.value))}
      />
    </div>
  );
}
