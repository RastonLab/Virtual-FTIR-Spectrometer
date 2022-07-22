import { useState } from "react";
import "../style/Open.css";

// https://dev.to/pankod/how-to-import-csv-file-with-react-4pj2

export const Open = () => {
  const [data, setData] = useState();

  const filereader = new FileReader();

  const changeHandler = (event) => {
    if (event.target.files[0]) {
      filereader.onload = function (e) {
        setData(e.target.result);
      };
      filereader.readAsText(event.target.files[0]);
    }
  };

  const handleSubmission = (event) => {};

  return (
    <div className="open">
      <div className="row">
        <label className=".custom-file-upload button">
          Select a File
          <input type="file" name="file" onChange={changeHandler} />
        </label>
        <button className="button" onClick={(e) => handleSubmission(e)}>
          Upload
        </button>
      </div>
      <div className="row file">
        <p className="content">{data}</p>
      </div>
    </div>
  );
};
