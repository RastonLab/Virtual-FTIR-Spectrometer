import React, { forwardRef, useState } from "react";

// components
import Fetch from "./Fetch";
import Plot from "react-plotly.js";

// functions
import * as fetchURL from "../functions/fetchURL";

// mui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// redux
import { useSelector, useDispatch } from "react-redux";

// redux slice
import { setAbsorbanceData } from "../features/absorbanceDataSlice";

// style
import "../style/components/Plotly.css";
import "../style/components/Absorbance.css";

// this component uses the plotly library to graph processed spectrum data
export const AbsorbancePlotly = forwardRef((props, ref) => {
  const { absorbanceData } = useSelector((store) => store.absorbanceData);
  const { backgroundData } = useSelector((store) => store.backgroundData);
  const { peaksData } = useSelector((store) => store.peaksData);
  const { spectrumData, processedWaveMin, processedWaveMax } = useSelector(
    (store) => store.spectrumData
  );
  const { progress } = useSelector((store) => store.progress);
  const { error, errorText } = useSelector((store) => store.error);

  const dispatch = useDispatch();

  const [threshold, setThreshold] = useState(0);
  const [lowerBound, setLowerBound] = useState(processedWaveMin);
  const [upperBound, setUpperBound] = useState(processedWaveMax);

  if (spectrumData && backgroundData && !absorbanceData) {
    const newY = [spectrumData.x.length];

    for (let i = 0; i < spectrumData.x.length; i++) {
      newY[i] =
        -1 * Math.log(Math.abs(spectrumData.y[i] / backgroundData.y[i]));

      if (newY[i] > 5) {
        newY[i] = 5;
      }

      if (newY[i] < -5) {
        newY[i] = -5;
      }
    }

    dispatch(
      setAbsorbanceData([
        {
          x: spectrumData.x,
          y: newY,
        },
        processedWaveMin,
        processedWaveMax,
      ])
    );
  }

  if (absorbanceData) {
    // https://github.com/suzil/radis-app/blob/main/frontend/src/components/CalcSpectrumPlot.tsx
    return (
      <div className="absorbance">
        <div className="absorb-row">
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
                range: [processedWaveMin, processedWaveMax],
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

        <div className="absorb-row">
          <div className="absorb-col">
            <div className="absorb-row">
              {/* Lower Bound Box */}
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-number"
                  label="Lower Domain Bound"
                  placeholder="Enter Lower Bound"
                  type="number"
                  value={lowerBound}
                  onChange={(e) => {
                    setLowerBound(e.target.value);
                  }}
                  InputProps={{
                    inputProps: {
                      min: processedWaveMin,
                      max: processedWaveMax,
                      // step: 0.0001,
                    },
                  }}
                />
              </Box>
              {/* End Lower Bound Box */}

              {/* Lower Upper Box */}
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-number"
                  label="Upper Domain Bound"
                  placeholder="Enter Upper Bound"
                  type="number"
                  value={upperBound}
                  onChange={(e) => {
                    setUpperBound(e.target.value);
                  }}
                  InputProps={{
                    inputProps: {
                      min: processedWaveMin,
                      max: processedWaveMax,
                    },
                  }}
                />
              </Box>
              {/* End Upper Bound Box */}
            </div>
            {/* Threshold Input */}
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              className="absorb-row"
            >
              <TextField
                id="standard-number"
                label="Threshold"
                placeholder="Enter threshold "
                type="number"
                value={threshold}
                onChange={(e) => {
                  setThreshold(e.target.value);
                }}
                InputProps={{
                  inputProps: {
                    min: 0.0001,
                    max: 10,
                    step: 0.0001,
                  },
                }}
              />
            </Box>
            {/* End Threshold Input */}

            {/* Fetch Peaks */}
            <Fetch
              type="find_peaks"
              params={{
                x: absorbanceData.x,
                y: absorbanceData.y,
                lowerBound: lowerBound,
                upperBound: upperBound,
                threshold: threshold,
              }}
              fetchURL={fetchURL.FIND_PEAKS}
              buttonText={"Find Peaks"}
            />
            {/* End Fetch Peaks */}
          </div>

          {/* Displays data from the server if there were no errors */}
          <div className="absorb-col">
            {/* Data Display */}
            {progress && <div id="spinner" />}
            {peaksData && !progress && !error && (
              <div id="data">
                <h1>Absorbance Peaks</h1>
                <div className="display">
                  {Object.keys(peaksData.peaks).map((key) => {
                    return (
                      <p id="peaks">{`Peak: ${key} Intensity: ${peaksData.peaks[key]}`}</p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          {/* End Data Display */}

          {/* Error Display */}
          {error && (
            <div id="error">
              <p style={{ fontSize: 30 }}>{errorText}</p>
            </div>
          )}
          {/* End Error Display */}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
});
