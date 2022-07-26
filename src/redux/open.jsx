import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeData, storeParams } from "./actions";

import "../style/Open.css";

// https://dev.to/pankod/how-to-import-csv-file-with-react-4pj2

export const Open = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const filereader = new FileReader();
  const [sucess, toggleSucess] = useState(false);

  const changeHandler = (event) => {
    if (event.target.files[0]) {
      filereader.onload = function (e) {
        setData(e.target.result);
      };
      filereader.readAsText(event.target.files[0]);
    }
  };

  const handleSubmission = () => {

    const xData = [];
    const yData = [];
    let rawData = data;

    while (rawData !== '') {
        let index = rawData.indexOf('\n');
        let line = rawData.substring(0, index);

        if (line.charAt(0) !== '#') { 
            let space = line.indexOf(' ');
            let x = line.substring(0, space);
            let y = line.substring(space);

            xData.push(Number(x));
            yData.push(Number(y));
        } else {
            const parameters = [];
            while (line.indexOf(':') > 0) {
                let paramStart = line.indexOf(':') + 2; // The Additional 2 accounts for the colon inself and the following space
                line = line.substring(paramStart);
                let paramEnd = line.indexOf(' ');
                let param = line.substring(0, paramEnd);
                line = line.substring(paramEnd + 1);
                parameters.push(param);
            }
            dispatch(storeParams({min_wave: parameters[0], max_wave: parameters[1], molecule: parameters[2], pressure: parameters[3], resolution: parameters[4], num_scan: parameters[5], zero_fill: parameters[6], source: parameters[7], beamsplitter: parameters[8], cell_windows: parameters[9], detector: parameters[10]}));
        }
        rawData = rawData.substring(index + 1);
    }

    // NOTE: May need to adjust wavelength params to have properly ranged graph
    dispatch(storeData({data: {x: xData, y: yData}}));
    toggleSucess(true);
  };

  return (
    <div className="open">
      <div className="row">
        <label className=".custom-file-upload button">
          Select a File
          <input type="file" name="file" onChange={changeHandler} />
        </label>
        <h1>{sucess && ("Upload Sucessful!")}</h1>
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
