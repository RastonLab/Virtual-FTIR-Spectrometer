import { useState } from "react";

// components
import CloseButton from "./CloseButton.jsx";

// mui
import { Dialog } from "@mui/material";

// redux
import { useDispatch } from "react-redux";

// redux slices
import { setError } from "../redux/errorSlice";
import {
  setBackgroundData,
  setBackgroundParameters,
} from "../redux/backgroundDataSlice";
import { setSampleData, setSampleParameters } from "../redux/sampleDataSlice";
import {
  setBeamsplitter,
  setDetector,
  setMedium,
  setMolecule,
  setPressure,
  setResolution,
  setScan,
  setSource,
  setWaveMax,
  setWaveMin,
  setWindow,
  setZeroFill,
} from "../redux/parameterSlice";
import { setAbsorbanceData } from "../redux/absorbanceDataSlice";

// style
import "../style/components/Open.css";
import "../style/components/Button.css";

/**
 * A component that is used to open a CSV file of X and Y coordinates. These values are placed into the store
 *
 * Tutorial used: https://dev.to/pankod/how-to-import-csv-file-with-react-4pj2
 */
export const Open = () => {
  const dispatch = useDispatch();

  // setup FileReader
  const fileReader = new FileReader();

  const [data, setData] = useState();
  const [success, toggleSuccess] = useState(false);
  const [badFile, toggleBadFile] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setData(null);
    toggleSuccess(false);
    toggleBadFile(false);
    setOpen(false);
  };

  const changeHandler = (event) => {
    if (event.target.files[0]) {
      fileReader.onload = function (e) {
        setData(e.target.result);
      };
      fileReader.readAsText(event.target.files[0]);
    }
    toggleSuccess(false);
    toggleBadFile(false);
  };

  const handleSubmission = () => {
    toggleBadFile(false);

    let rawData = data;

    let index = rawData.indexOf("\n");
    let parmLine = rawData.substring(0, index);

    rawData = rawData.substring(index + 1);

    index = rawData.indexOf("\n");
    let specType = rawData.substring(0, index);

    rawData = rawData.substring(index + 1);

    if (specType.includes("Sample") || specType.includes("Background")) {
      // Clears old Absorbance Data
      dispatch(setAbsorbanceData([null, null, null]));

      // Gathers Parameters
      const parameters = [];
      while (parmLine.indexOf(":") > 0) {
        // the additional 2 accounts for the colon itself and the following space
        let paramStart = parmLine.indexOf(":") + 2;

        parmLine = parmLine.substring(paramStart);
        let paramEnd = parmLine.indexOf(" ");
        let param = parmLine.substring(0, paramEnd);
        parmLine = parmLine.substring(paramEnd + 1);
        parameters.push(param);
      }

      // Load parameters into the store
      dispatch(setWaveMin(parseFloat(parameters[0])));
      dispatch(setWaveMax(parseFloat(parameters[1])));
      dispatch(setMolecule(parameters[2]));
      dispatch(setPressure(parseFloat(parameters[3])));
      dispatch(setResolution(parseFloat(parameters[4])));
      dispatch(setScan(parseFloat(parameters[5])));
      dispatch(setZeroFill(parseFloat(parameters[6])));
      dispatch(setSource(parseFloat(parameters[7])));
      dispatch(setBeamsplitter(parameters[8]));
      dispatch(setWindow(parameters[9]));
      dispatch(setDetector(parameters[10]));
      dispatch(setMedium(parameters[11]));

      const xData = [];
      const yData = [];

      while (index >= 0) {
        index = rawData.indexOf("\n");
        let line = rawData.substring(0, index);
        let comma = line.indexOf(",");

        // also removes " character from the beginning of both strings to allow for number parsing
        let x = line.substring(0, comma);
        let y = line.substring(comma + 1);

        xData.push(parseFloat(x));
        yData.push(parseFloat(y));

        rawData = rawData.substring(index + 1);
      }

      if (specType.includes("Background")) {
        dispatch(
          setBackgroundData([
            { x: xData, y: yData },
            parseFloat(parameters[0]),
            parseFloat(parameters[1]),
          ])
        );
        dispatch(
          setBackgroundParameters(
            JSON.stringify({
              beamsplitter: parameters[8],
              detector: parameters[10],
              medium: parameters[11],
              molecule: parameters[2],
              pressure: parseFloat(parameters[3]),
              resolution: parseFloat(parameters[4]),
              scan: parseFloat(parameters[5]),
              source: parseFloat(parameters[7]),
              waveMax: parseFloat(parameters[1]),
              waveMin: parseFloat(parameters[0]),
              window: parameters[9],
              zeroFill: parseFloat(parameters[6]),
            })
          )
        );
      } else if (specType.includes("Sample")) {
        dispatch(
          setSampleData([
            { x: xData, y: yData },
            parseFloat(parameters[0]),
            parseFloat(parameters[1]),
          ])
        );
        dispatch(
          setSampleParameters(
            JSON.stringify({
              beamsplitter: parameters[8],
              detector: parameters[10],
              medium: parameters[11],
              molecule: parameters[2],
              pressure: parseFloat(parameters[3]),
              resolution: parseFloat(parameters[4]),
              scan: parseFloat(parameters[5]),
              source: parseFloat(parameters[7]),
              waveMax: parseFloat(parameters[1]),
              waveMin: parseFloat(parameters[0]),
              window: parameters[9],
              zeroFill: parseFloat(parameters[6]),
            })
          )
        );
      }

      dispatch(setError([false, null]));
      toggleSuccess(true);
    } else {
      toggleBadFile(true);
    }
  };

  return (
    <div id="open">
      <button className="popup-button dropdown-items" onClick={handleClickOpen}>
        Open
      </button>
      <Dialog className="popup" onClose={handleClose} open={open}>
        <CloseButton id="customized-dialog-title" onClose={handleClose} />

        <h2>Please Select Sample or Background File</h2>

        <div className="open-row">
          <label className=".custom-file-upload button">
            Select a File
            <input type="file" name="file" onChange={changeHandler} />
          </label>
          <h2>{success && "Upload Successful!"}</h2>
          <h2>{badFile && "Cannot Upload File"}</h2>
          <button className="button" onClick={handleSubmission}>
            Upload
          </button>
        </div>
        <div className="open-row file">
          {/* The style allows for proper text formatting */}
          <p className="content" style={{whiteSpace: "pre-wrap"}}>{data}</p> 
        </div>
      </Dialog>
    </div>
  );
};
