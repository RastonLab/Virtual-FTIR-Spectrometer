import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

// components
import Plot from "react-plotly.js";

// style
import "../style/components/Plotly.css";

// this component uses the plotly library to graph processed spectrum data
export const ProcessedPlotly = forwardRef((props, ref) => {
  const processedData = useSelector((state) => state.processedData);
  const params = useSelector((state) => state.params);

  if (processedData) {
    // https://github.com/suzil/radis-app/blob/main/frontend/src/components/CalcSpectrumPlot.tsx
    return (
      <>
        {
          <Plot
            ref={ref}
            className="plotly"
            data={[
              {
                x: processedData.x,
                y: processedData.y,
                type: "scatter",
                marker: { color: "#f50057" },
              },
            ]}
            layout={{
              title: "Processed Spectrum",
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
});
