import { useState } from "react";

export const Open = () => {
    
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
        console.log(event.target.files);
		setIsSelected(true);
	};

	const handleSubmission = () => {
        if (isSelected) {
            fetch(selectedFile)
                .then((response) => response.text())
                .then((result) => {
                    console.log('Success:', result);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

	};

    return(
        <div>
            <input type='file' name='file' onChange={changeHandler} />
            <button onClick={handleSubmission}>Upload</button>
            <p className="content" ></p>
        </div>
    );
}