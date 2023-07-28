import React from "react";

// components
import Plot from "react-plotly.js";

// redux
import { useSelector } from "react-redux";

// style
import "../style/components/Plotly.css";

// this component uses the plotly library to graph background spectrum data
export default function BackgroundPlotly() {
  const { backgroundData, backgroundWaveMin, backgroundWaveMax } = useSelector(
    (store) => store.backgroundData
  );

  if (backgroundData) {
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
                range: [backgroundWaveMin, backgroundWaveMax],
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
}
