import React, { useState } from "react";

// components
import Fetch from "./Fetch";
import Spinner from "./Spinner";
import { AbsorbancePlotly } from "./AbsorbancePlotly";

// constants
import { FIND_PEAKS } from "../dictionaries/constants";

// redux slice
import { setAbsorbanceData } from "../redux/absorbanceDataSlice";

// helper function
import { generateAbsorbance } from "../dictionaries/dataFunctions";

// mui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useDispatch, useSelector } from "react-redux";

export default function FindPeaks() {

  const { backgroundData } = useSelector((store) => store.backgroundData);
  const { sampleData, sampleWaveMin, sampleWaveMax } = useSelector(
    (store) => store.sampleData
  );
  const { absorbanceData, absorbWaveMin, absorbWaveMax } = useSelector((store) => store.absorbanceData);
  const { peaksData } = useSelector((store) => store.peaksData);

  const dispatch = useDispatch();

  const { progress } = useSelector((store) => store.progress);
  const { error, errorText } = useSelector((store) => store.error);

  const [threshold, setThreshold] = useState(0);
  const [lowerBound, setLowerBound] = useState(sampleWaveMin);
  const [upperBound, setUpperBound] = useState(sampleWaveMax);

  // if the correct data exists, calculate the absorbance data
  if (sampleData && backgroundData && !absorbanceData) {

    dispatch(
      setAbsorbanceData([
        generateAbsorbance(backgroundData, sampleData),
        sampleWaveMin,
        sampleWaveMax,
      ])
    );
  }

  if (absorbanceData) {
    return (
      <div>
        <h1>Find Peaks</h1>
        <div className="absorb-row">
          <AbsorbancePlotly />
        </div>
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
                    min: absorbWaveMin,
                    max: absorbWaveMax,
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
                    min: absorbWaveMin,
                    max: absorbWaveMax,
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
            fetchURL={FIND_PEAKS}
            buttonText={"Find Peaks"}
            buttonStyle={"button"}
          />
          {/* End Fetch Peaks */}
        </div>
    
        {/* Displays data from the server if there were no errors */}
        <div className="absorb-col">
          {/* Data Display */}
          {progress && <Spinner variant="indeterminate" size={100} />}
          {peaksData && !progress && !error && (
            <div id="data">
              <h1>Absorbance Peaks</h1>
              <div className="display">
                {Object.keys(peaksData.peaks).map((key) => {
                  return (
                    <p
                      id="peaks"
                      key={key}
                    >{`Peak: ${key} Intensity: ${peaksData.peaks[key]}`}</p>
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
    )
  } else {
    return (
      <div>
        <h1>Find Peaks</h1>
        <h2>Please generate both a sample and background sample and return here</h2>
      </div>
    )
  }
  };