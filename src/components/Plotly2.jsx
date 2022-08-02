import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

import Plot from "react-plotly.js";

export const Plotly = forwardRef((props, ref) => {
  const data = useSelector((state) => state.data);
  const params = useSelector((state) => state.params);

  if (data) {
    // https://github.com/suzil/radis-app/blob/main/frontend/src/components/CalcSpectrumPlot.tsx
    return (
      <>
        {
          <Plot
            ref={ref}
            className="Plot"
            data={[
              {
                x: data.data.x,
                y: data.data.y,
                type: "scatter",
                marker: { color: "#f50057" },
              },
            ]}
            layout={{
              width: 750,
              height: 600,
              title: "Spectrum",
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
                  text: "transmittance_noslit",
                },
                type: "linear",
                fixedrange: false,
              },
            }}
          />
        }
      </>
    );
  } else {
    return <div></div>;
  }
})
