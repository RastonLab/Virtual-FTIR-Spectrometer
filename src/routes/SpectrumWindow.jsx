import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { ProcessedPlotly } from "../components/ProcessedPlotly";
import BackgroundPlotly from "../components/BackgroundPlotly";

import "../style/routes/SpectrumWindow.css";

export default function SpectrumWindow() {
  const storedData = useSelector((state) => state.data);
  const storedBackgroundData = useSelector((state) => state.backgroundData);

  return (
    <div id="spectrum-window">
      <div id="spectrum">
        {storedData ? (
          <ProcessedPlotly />
        ) : (
          <p>Please generate a processed spectrum and return here</p>
        )}
      </div>

      <div id="spectrum">
        {storedBackgroundData ? (
          <BackgroundPlotly />
        ) : (
          <p>Please generate a background spectrum and return here</p>
        )}
      </div>
      <Outlet />
    </div>
  );
}
