import React from "react";
import { useSelector } from "react-redux";

// components
import Plot from "react-plotly.js";

// style
import "../style/components/Plotly.css";

// this component uses the plotly library to graph background sample data
export default function BackgroundPlotly() {
  const backgroundData = useSelector((state) => state.backgroundData);
  const params = useSelector((state) => state.params);

  if (backgroundData) {
    // https://github.com/suzil/radis-app/blob/main/frontend/src/components/CalcSpectrumPlot.tsx
    return (
      <>
        {
          <Plot
            className="plotly"
            data={[
              {
                x: backgroundData.x,
                y: backgroundData.y,
                type: "scatter",
                marker: { color: "#f50057" },
              },
            ]}
            layout={{
              title: "Background Spectrum",
              font: { family: "Roboto", color: "#000" },
              xaxis: {
                range: [10000000 / params.maxWave, 10000000 / params.minWave],
                title: { text: "Wavelength (nm)" },
                rangeslider: {
                  autorange: true,
                  yaxis: { rangemode: "auto" },
                },
                type: "linear",
              },
              yaxis: {
                autorange: true,
                title: {
                  text: "Transmittance",
                },
                type: "linear",
                fixedrange: false,
              },
            }}
            // https://community.plotly.com/t/react-plotly-responsive-chart-not-working/47547
            useResizeHandler={true}
          />
        }
      </>
    );
  } else {
    return <div></div>;
  }
}
