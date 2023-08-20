import React, { forwardRef, useEffect } from "react";

// components
import Plot from "react-plotly.js";

// redux
import { useSelector, useDispatch } from "react-redux";

// redux slice
import { setAbsorbanceData } from "../redux/absorbanceDataSlice";

// helper function
import { generateAbsorbance } from "../dictionaries/dataFunctions";

// style
import "../style/components/Absorbance.css";
import "../style/components/Plotly.css";

/**
 * A component that uses Plotly.js to graph absorbance spectrum data
 */
export const AbsorbancePlotly = forwardRef((props, ref) => {
  const { backgroundData, backgroundParameters } = useSelector(
    (store) => store.backgroundData
  );
  const { sampleData, sampleWaveMin, sampleWaveMax, sampleParameters } =
    useSelector((store) => store.sampleData);
  const { absorbanceData } = useSelector((store) => store.absorbanceData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!absorbanceData && sampleData && backgroundData) {
      const absorbanceData = generateAbsorbance(
        backgroundData,
        sampleData,
        backgroundParameters,
        sampleParameters
      );

      dispatch(
        setAbsorbanceData([absorbanceData, sampleWaveMin, sampleWaveMax])
      );
    }
  });

  if (absorbanceData && !absorbanceData.error) {
    return (
      <div className="absorbance">
        {/* Graph */}
        <Plot
          ref={ref}
          className="plotly"
          data={[
            {
              x: absorbanceData.x,
              y: absorbanceData.y,
              type: "scatter",
              marker: { color: "#f50057" },
            },
          ]}
          layout={{
            title: "Absorbance Spectrum",
            font: { family: "Roboto", color: "#000" },
            xaxis: {
              range: [sampleWaveMin, sampleWaveMax],
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
        {/* End Graph */}
      </div>
    );
  } else if (absorbanceData && absorbanceData.error) {
    return (
      <div>
        <h3>
          The parameters used to generate Background and Sample spectra do not
          match. To view the Absorbance spectrum, please generate both with the
          same parameters.
        </h3>
      </div>
    );
  } else {
    return <div></div>;
  }
});
