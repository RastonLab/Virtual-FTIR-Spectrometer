import { useState } from "react";

// redux
import { useDispatch } from "react-redux";

// redux slices
import { deactivateError } from "../features/errorSlice";
import { updateBackgroundData } from "../features/backgroundDataSlice";
import { updateSpectrumData } from "../features/spectrumDataSlice";
import { updateBeamsplitter, updateDetector, updateMedium, updateMolecule,
  updatePressure, updateResolution, updateScan, updateSource, updateWaveMax,
  updateWaveMin, updateWindow, updateZeroFill } from "../features/parameterSlice";

// style
import "../style/components/Open.css";

// this component is used to open a CSV file of X and Y coordinates
// https://dev.to/pankod/how-to-import-csv-file-with-react-4pj2
export const Open = () => {
  const dispatch = useDispatch();

  // setup FileReader
  const filereader = new FileReader();

  const [data, setData] = useState();
  const [filename, setFilename] = useState();
  const [sucess, toggleSucess] = useState(false);

  const changeHandler = (event) => {
    if (event.target.files[0]) {
      filereader.onload = function (e) {
        setData(e.target.result);
        setFilename(event.target.files[0].name);
      };
      filereader.readAsText(event.target.files[0]);
    }
  };

  const handleSubmission = () => {

    let rawData = data;

    let index = rawData.indexOf("\n");
    let line = rawData.substring(0, index);

      // Gathers Parameters
      const parameters = [];
      while (line.indexOf(":") > 0) {
        let paramStart = line.indexOf(":") + 2; // The Additional 2 accounts for the colon inself and the following space
        line = line.substring(paramStart);
        let paramEnd = line.indexOf(" ");
        let param = line.substring(0, paramEnd);
        line = line.substring(paramEnd + 1);
        parameters.push(param);
      }

      for (let i = 0; i < parameters.length; i++){
        console.log(parameters[i]);
      }

      // dispatch(
      //   storeParams({
      //     minWave: parameters[0],
      //     maxWave: parameters[1],
      //     molecule: parameters[2],
      //     pressure: parameters[3],
      //     resolution: parameters[4],
      //     numScan: parameters[5],
      //     zeroFill: parameters[6],
      //     source: parameters[7],
      //     beamsplitter: parameters[8],
      //     cellWindow: parameters[9],
      //     detector: parameters[10],
      //   })
      // );

    const xData = [];
    const yData = [];

    while (rawData !== "") {

      let index = rawData.indexOf("\n");
      let line = rawData.substring(0, index);

      let comma = line.indexOf(",");
      let x = line.substring(0, comma);
      let y = line.substring(comma + 1);

      xData.push(Number(x));
      yData.push(Number(y));

      rawData = rawData.substring(index + 1);
    }

    // NOTE: Handled differently now
    if (filename.includes("background")) {
      dispatch(updateBackgroundData({ x: xData, y: yData }));
    } else {
      dispatch(updateSpectrumData({ x: xData, y: yData }));
    }

    dispatch(deactivateError);
    toggleSucess(true);
  };

  return (
    <div className="open">
      <div className="row">
        <label className=".custom-file-upload button">
          Select a File
          <input type="file" name="file" onChange={changeHandler} />
        </label>
        <h2>{sucess && "Upload Sucessful!"}</h2>
        <button className="button" onClick={handleSubmission}>
          Upload
        </button>
      </div>
      <div className="row file">
        <p className="content">{data}</p>
      </div>
    </div>
  );
};
