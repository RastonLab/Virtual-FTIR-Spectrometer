import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { Plotly } from "../components/Plotly";

import "../style/routes/SpectrumWindow.css";

export default function SpectrumWindow() {
  const storedData = useSelector((state) => state.data);

  return (
    <div id="spectrum-window">
      {storedData ? (
        <Plotly />
      ) : (
        <p>Please generate a spectrum and return here</p>
      )}
      <Outlet />
    </div>
  );
}
