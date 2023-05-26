import React, { forwardRef, useState } from "react";

// components
import Plot from "react-plotly.js";
import { Dialog } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// redux
import { useSelector } from "react-redux";

// style
import "../style/components/Plotly.css";
import FetchPeaks from "./FetchPeaks";


// this component uses the plotly library to graph processed spectrum data
export const AbsorbancePlotly = forwardRef((props, ref) => {
  const { backgroundData } = useSelector((store) => store.backgroundData);
  const { peaksData } = useSelector((store) => store.peaksData);
  const { spectrumData } = useSelector((store) => store.spectrumData);
  const { waveMaxSaved, waveMinSaved } = useSelector(
    (store) => store.parameter
  );

  const [open, setOpen] = useState(false);
  const [threshold, setThreshold] = useState(0);

  const newY = [spectrumData.x.length];

  for (let i = 0; i < spectrumData.x.length; i++) {
    newY[i] = -1 * Math.log(spectrumData.y[i] / backgroundData.y[i]);
  }

  if (spectrumData) {
    // https://github.com/suzil/radis-app/blob/main/frontend/src/components/CalcSpectrumPlot.tsx
    return (
      <>
        <Plot
          ref={ref}
          className="plotly"
          data={[
            {
              x: spectrumData.x,
              y: newY,
              type: "scatter",
              marker: { color: "#f50057" },
            },
          ]}
          layout={{
            title: "Absorbance Spectrum",
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

        <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-number"
                label="Threshold"
                placeholder="Enter threshold "
                type="number"
                value={threshold}
                onChange={(e) => {setThreshold(e.target.value);}}
                InputProps={{
                  inputProps: {
                    min: 0.0001,
                    max: 10,
                    step: 0.0001,
                  },
                }}
              />
            </Box>

        <FetchPeaks
          type="find_peaks"
          params={{
            x: spectrumData.x,
            y: newY,
            threshold: threshold
          }}
          fetchURL={"http://localhost:5000/find_peaks"}
          // fetchURL={"https://api.ftir.rastonlab.org/find_peaks"}
          buttonText={"Find Peaks"}
          openPopup={setOpen}
        />

        {peaksData && (
          <Dialog
            className="popup"
            onClose={() => {
              setOpen(false);
            }}
            open={open}
          >
            <h1>Absorbance Peaks</h1>
            {Object.keys(peaksData.peaks).map((key) => {
              // NOTE: i can only get one space here
              return <p>{`Peak: ${key} Intensity: ${peaksData.peaks[key]}`}</p>;
            })}
          </Dialog>
        )}
      </>
    );
  } else {
    return <div></div>;
  }
});
