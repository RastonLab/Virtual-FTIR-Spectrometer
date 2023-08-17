import React, { useState, useEffect } from "react";

// components
import CloseButton from "./CloseButton";
import Fetch from "./Fetch";
import Spinner from "./Spinner";

// constants
import { FIND_PEAKS } from "../dictionaries/constants";

// redux
import { useSelector } from "react-redux";

// mui
import { Box, Dialog, Slider, TextField } from "@mui/material";
import { AbsorbancePlotly } from "./AbsorbancePlotly";

export default function FindPeaks() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    if (lowerBound > upperBound) {
      const temp = lowerBound;
      setLowerBound(upperBound);
      setUpperBound(temp);
    }

    if (lowerBound < sampleWaveMin) {
      setLowerBound(sampleWaveMin);
    }

    if (upperBound > sampleWaveMax) {
      setUpperBound(sampleWaveMax);
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
      <div>
        <button
          className="popup-button dropdown-items"
          onClick={handleClickOpen}
        >
          Find Peaks
        </button>
        <Dialog className="popup" onClose={handleClose} open={open}>
          <CloseButton id="customized-dialog-title" onClose={handleClose} />

          <h1>Find Peaks</h1>

          <div className="absorb-col">
            <AbsorbancePlotly />
            <h3>Current Number of Data Points Selected: {dataPoints}</h3>
            {tooManyPoints && (
              <h3>
                Too Many Data Points Selected, Please Narrow Your Range to Less
                Than 25000 Data Points
              </h3>
            )}

            <div className="absorb-row">
              {/* Lower Bound Box */}
              <Box
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
                  value={lowerBound ? lowerBound : sampleWaveMin}
                  onChange={(e) => {
                    setLowerBound(e.target.value);
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
              {/* End Lower Bound Box */}

              <Box>
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

              {/* Lower Upper Box */}
              <Box
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
                  value={upperBound ? upperBound : sampleWaveMax}
                  onChange={(e) => {
                    setUpperBound(e.target.value);
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
              {/* End Upper Bound Box */}
            </div>
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
              tooManyPoints={tooManyPoints || absorbanceData.error}
            />
            {/* End Fetch Peaks */}
          </div>

          {/* Displays data from the server if there were no errors */}
          <div className="absorb-col">
            {/* Data Display */}
            {fetching && <Spinner variant="indeterminate" size={100} />}
            {peaksData && !fetching && !error && (
              <div id="data">
                <h1>Absorbance Peaks</h1>
                <div className="display">
                  <p id="peaks">
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
          {/* End Data Display */}

          {/* Error Display */}
          {error && (
            <div id="error">
              <p style={{ fontSize: 30 }}>{errorText}</p>
            </div>
          )}
          {/* End Error Display */}
        </Dialog>
      </div>
    );
  // } else if (absorbanceData && absorbanceData.error) {
  //   return (
  //     <div>
  //       <button
  //         className="popup-button dropdown-items"
  //         onClick={handleClickOpen}
  //       >
  //         Find Peaks
  //       </button>
  //       <Dialog className="popup" onClose={handleClose} open={open}>
  //         <CloseButton id="customized-dialog-title" onClose={handleClose} />

  //         <h1>Find Peaks</h1>
  //         <AbsorbancePlotly />
  //         <h2>
  //           The parameters used to generate Background and Sample spectra do not
  //           match. To find peaks from the Absorbance spectrum, please generate
  //           both with the same parameters.
  //         </h2>
  //       </Dialog>
  //     </div>
  //   );
  } else {
    return (
      <div>
        <button
          className="popup-button dropdown-items"
          onClick={handleClickOpen}
        >
          Find Peaks
        </button>
        <Dialog className="popup" onClose={handleClose} open={open}>
          <CloseButton id="customized-dialog-title" onClose={handleClose} />

          <h1>Find Peaks</h1>
          <AbsorbancePlotly />

          <h2>
            Please generate both a sample and background sample and return here
          </h2>
        </Dialog>
      </div>
    );
  }
}
