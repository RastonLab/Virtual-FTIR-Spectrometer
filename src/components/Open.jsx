import { useState } from "react";

// redux
import { useDispatch } from "react-redux";

// redux slices
import { setError } from "../features/errorSlice";
import { setBackgroundData } from "../features/backgroundDataSlice";
import { setSpectrumData } from "../features/spectrumDataSlice";
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
} from "../features/parameterSlice";

// style
import "../style/components/Open.css";
import "../style/components/Button.css";

// this component is used to open a CSV file of X and Y coordinates
// https://dev.to/pankod/how-to-import-csv-file-with-react-4pj2
export const Open = () => {
  const dispatch = useDispatch();

  // setup FileReader
  const filereader = new FileReader();

  const [data, setData] = useState();
  // const [filename, setFilename] = useState();
  const [sucess, toggleSucess] = useState(false);
  const [badFile, toggleBadFile] = useState(false);

  const changeHandler = (event) => {
    if (event.target.files[0]) {
      filereader.onload = function (e) {
        setData(e.target.result);
        // setFilename(event.target.files[0].name);
      };
      filereader.readAsText(event.target.files[0]);
    }
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
      // Gathers Parameters
      const parameters = [];
      while (parmLine.indexOf(":") > 0) {
        let paramStart = parmLine.indexOf(":") + 2; // The Additional 2 accounts for the colon inself and the following space
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
        let x = line.substring(1, comma); // Also removes " charater from the begining of both strings to allow for number parsing
        let y = line.substring(comma + 2);

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
      } else if (specType.includes("Sample")) {
        dispatch(
          setSpectrumData([
            { x: xData, y: yData },
            parseFloat(parameters[0]),
            parseFloat(parameters[1]),
          ])
        );
      }

      dispatch(setError([false, null]));
      toggleSucess(true);
    } else {
      toggleBadFile(true);
    }
  };

  return (
    <div id="open">
      <div className="open-row">
        <label className=".custom-file-upload button">
          Select a File
          <input type="file" name="file" onChange={changeHandler} />
        </label>
        <h2>{sucess && "Upload Sucessful!"}</h2>
        <h2>{badFile && "Cannot Upload File"}</h2>
        <button className="button" onClick={handleSubmission}>
          Upload
        </button>
      </div>
      <div className="open-row file">
        <p className="content">{data}</p>
      </div>
    </div>
  );
};
