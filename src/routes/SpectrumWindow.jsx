import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Plotly from "../components/Plotly";

import "../style/SpectrumWindow.css";

function SpectrumWindow() {
  const data = useSelector((state) => state.data);

  return (
    <div id="spectrum-window">
      {data ? (
        <Plotly />
      ) : (
        <p>Please generate a spectrum and return here</p>
      )}
      <Outlet />
    </div>
  );
}

export default SpectrumWindow;
