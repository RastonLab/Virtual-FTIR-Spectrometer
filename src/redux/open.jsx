import { useState } from "react";
import "../style/Open.css";

// https://dev.to/pankod/how-to-import-csv-file-with-react-4pj2

export const Open = () => {
    
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [data, setData] = useState();

    const filereader = new FileReader();

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = (event) => {
        event.preventDefault();
        console.log(data);

        if(isSelected) {
            filereader.onload = function (e) {
                setData(e.target.result);
            };
            filereader.readAsText(selectedFile);
        }
        console.log(data);

    }

    return(
        <div className="open">
            <div className="row">
                <label className=".custom-file-upload button">
                    Select a File
                    <input type='file' name='file' onChange={changeHandler} />
                </label>
                <button className="button" onClick={(e) => handleSubmission(e)}>Upload</button>
            </div>
            <div className="row file">
                <p className="content" >{data}</p>
            </div>
        </div>
    );
}