import React, { useState, useEffect } from "react";

// components
import Fetch from "../components/Fetch";
import Spinner from "../components/Spinner";
import { AbsorbancePlotly } from "../components/AbsorbancePlotly";

// constants
import { FIND_PEAKS } from "../dictionaries/constants";

// mui
import { Box, Slider, TextField } from "@mui/material";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/FindPeaks.css";

export default function FindPeaks() {
  const handleSliderChange = (event, newValue) => {
    setLowerBound(newValue[0]);
    setUpperBound(newValue[1]);
  };

  const { peaksData } = useSelector((store) => store.peaksData);
  const { backgroundData, backgroundParameters } = useSelector(
    (store) => store.backgroundData
  );
  const { sampleWaveMin, sampleWaveMax, sampleData, sampleParameters } =
    useSelector((store) => store.sampleData);
  const { absorbanceData, absorbWaveMin, absorbWaveMax } = useSelector(
    (store) => store.absorbanceData
  );
  const { fetching } = useSelector((store) => store.progress);
  const { error, errorText } = useSelector((store) => store.error);

  const [threshold, setThreshold] = useState(0.01);
  const [lowerBound, setLowerBound] = useState(sampleWaveMin);
  const [upperBound, setUpperBound] = useState(sampleWaveMax);
  const [dataPoints, setDataPoints] = useState();
  const [tooManyPoints, setTooManyPoints] = useState(true);

  const checkThresholdRange = () => {
    if (threshold < 0.01) {
      setThreshold(0.01);
    } else if (threshold > 5) {
      setThreshold(5);
    }
  };

  const checkWaveNumRange = () => {
    if (!lowerBound) {
      setLowerBound(sampleWaveMin);
    }

    if (!upperBound) {
      setUpperBound(sampleWaveMax);
    }

    if (lowerBound < sampleWaveMin) {
      setLowerBound(sampleWaveMin);
    }

    if (upperBound > sampleWaveMax) {
      setUpperBound(sampleWaveMax);
    }

    if (lowerBound > upperBound && upperBound) {
      const temp = lowerBound;
      setLowerBound(upperBound);
      setUpperBound(temp);
    }
  };

  useEffect(() => {
    if (absorbanceData !== null && absorbanceData.error === false) {
      let startIndex = absorbanceData.x.findIndex((element) => {
        return element >= lowerBound;
      });

      if (startIndex === -1) {
        startIndex = 0;
      }

      let endIndex = absorbanceData.x.findIndex((element) => {
        return element >= upperBound;
      });

      if (endIndex === -1) {
        endIndex = absorbanceData.x.length - 1;
      }

      setDataPoints(absorbanceData.x.slice(startIndex, endIndex + 1).length);

      if (dataPoints > 25000) {
        setTooManyPoints(true);
      } else {
        setTooManyPoints(false);
      }
    }
  }, [
    backgroundData,
    sampleData,
    absorbanceData,
    backgroundParameters,
    sampleParameters,
    dataPoints,
    lowerBound,
    upperBound,
    sampleWaveMin,
    sampleWaveMax,
  ]);

  if (absorbanceData) {
    return (
      <div className="find-peaks-container">
        <div className="find-peaks-row-left">
          <AbsorbancePlotly />
          <form id="find-peaks-bounds" name="bounds">
            {/* Lower Bound Box */}
            <Box
              className="find-peaks-box"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "20ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="peak-lowerbound"
                label="Lower Domain Bound"
                placeholder="Enter Lower Bound"
                type="number"
                value={lowerBound}
                onChange={(e) => {
                  setLowerBound(
                    e.target.value === "" ? "" : Number(e.target.value)
                  );
                }}
                onBlur={checkWaveNumRange}
                InputProps={{
                  inputProps: {
                    min: absorbWaveMin,
                    max: absorbWaveMax,
                  },
                }}
              />
            </Box>

            {/* Slider Box */}
            <Box className="find-peaks-box">
              <Slider
                sx={{ minWidth: "150px" }}
                value={[
                  lowerBound ? lowerBound : sampleWaveMin,
                  upperBound ? upperBound : sampleWaveMax,
                ]}
                min={sampleWaveMin}
                max={sampleWaveMax}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
              />
            </Box>

            {/* Upper Bound Box */}
            <Box
              className="find-peaks-box"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "20ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="peak-upperbound"
                label="Upper Domain Bound"
                placeholder="Enter Upper Bound"
                type="number"
                value={upperBound}
                onChange={(e) => {
                  setUpperBound(
                    e.target.value === "" ? "" : Number(e.target.value)
                  );
                }}
                onBlur={checkWaveNumRange}
                InputProps={{
                  inputProps: {
                    min: absorbWaveMin,
                    max: absorbWaveMax,
                  },
                }}
              />
            </Box>
          </form>

          <form id="find-peaks-threshold" name="threshold">
            {/* Threshold Input */}
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "15ch" },
              }}
              noValidate
              autoComplete="off"
              className="absorb-row"
            >
              <TextField
                id="peak-threshold"
                label="Threshold"
                placeholder="Enter threshold "
                type="number"
                value={threshold}
                onChange={(e) => {
                  setThreshold(e.target.value);
                }}
                onBlur={checkThresholdRange}
                InputProps={{
                  inputProps: {
                    min: 0.01,
                    max: 5,
                  },
                }}
              />
            </Box>
          </form>

          <div id="find-peaks-points">
            <p>
              Current Number of Data Points Selected: <b>{dataPoints}</b>
            </p>

            {tooManyPoints && (
              <p>
                <b>
                  Too Many Data Points Selected, Please Narrow Your Range to
                  Less Than <u>25000</u> Data Points
                </b>
              </p>
            )}

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
              tooManyPoints={tooManyPoints}
            />
          </div>
        </div>

        {/* Displays data from the server if there were no errors */}
        <div className="find-peaks-row-right">
          {/* Data Display */}
          {fetching && <Spinner variant="indeterminate" size={100} />}
          {peaksData && !fetching && !error && (
            <div id="find-peaks-data-container">
              <h1>Absorbance Peaks</h1>
              <div id="find-peaks-results">
                <p id="find-peaks-text">
                  {Object.keys(peaksData.peaks).map((key) => {
                    return (
                      <>
                        {`Peak: ${key} Intensity: ${peaksData.peaks[key]}`}{" "}
                        <br />
                      </>
                    );
                  })}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div id="find-peaks-error">
            <p style={{ fontSize: 30 }}>{errorText}</p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="find-peaks-container" id="find-peaks-text">
        <AbsorbancePlotly />
        <h2>
          Please generate both a sample and background sample and return here
        </h2>
      </div>
    );
  }
}
