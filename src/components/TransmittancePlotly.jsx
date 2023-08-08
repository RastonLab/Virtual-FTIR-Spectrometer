import React, { forwardRef } from "react";

// components
import Plot from "react-plotly.js";

// redux
import { useSelector } from "react-redux";

// helper function
import { generateTransmittance } from "../dictionaries/dataFunctions";

// style
import "../style/components/Plotly.css";

/**
 * A component that uses Plotly.js to graph transmittance spectrum data
 */
export const TransmittancePlotly = forwardRef((props, ref) => {
  const { backgroundData } = useSelector((store) => store.backgroundData);
  const { sampleData } = useSelector((store) => store.sampleData);
  const { waveMaxSaved, waveMinSaved } = useSelector(
    (store) => store.parameter
  );

  const transData = generateTransmittance(backgroundData, sampleData);

  if (sampleData) {
    return (
      <>
        {
          <Plot
            ref={ref}
            className="plotly"
            data={[
              {
                x: transData.x,
                y: transData.y,
                type: "scatter",
                marker: { color: "#f50057" },
              },
            ]}
            layout={{
              title: "Transmittance Spectrum",
              font: { family: "Roboto", color: "#000" },
              xaxis: {
                range: [waveMinSaved, waveMaxSaved],
                title: { text: "Wavenumber (cm⁻¹)" },
                rangeslider: {
                  autorange: true,
                  yaxis: { rangemode: "auto" },
                },
                type: "linear",
              },
              yaxis: {
                autorange: true,
                title: {
                  text: "Signal",
                },
                type: "linear",
                fixedrange: false,
                // https://community.plotly.com/t/how-to-hide-axis-ticktexts-but-remain-axis-tilte/10839/2
                showticklabels: false,
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
