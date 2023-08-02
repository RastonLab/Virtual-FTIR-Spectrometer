import { useRef, useState } from "react";

// components
import { CSVLink } from "react-csv";

// redux
import { useSelector } from "react-redux";

// helper function
import { generateTransmittance } from "../dictionaries/dataFunctions";

// style
import "../style/components/Button.css";
import "../style/components/Save.css";

/**
 * A component that is used to save a CSV file of X and Y coordinates and the user parameters that generated that data.
 */
export default function Save() {
  const {
    beamsplitter,
    detector,
    medium,
    molecule,
    pressure,
    resolution,
    scan,
    source,
    waveMax,
    waveMin,
    window,
    zeroFill,
  } = useSelector((store) => store.parameter);

  const { absorbanceData } = useSelector((store) => store.absorbanceData);
  const { backgroundData } = useSelector((store) => store.backgroundData);
  const { peaksData } = useSelector((store) => store.peaksData);
  const { sampleData } = useSelector((store) => store.sampleData);

  const [data, setData] = useState("");
  const [filename, setFilename] = useState("");
  const header = [
    `Spectrum details | Min Wavenumber: ${waveMin} Max Wavenumber: ${waveMax} Molecule: ${molecule} Pressure: ${pressure} Resolution: ${resolution} Number of Scans: ${scan} Zero Fill: ${zeroFill} Source: ${source} Beamsplitter: ${beamsplitter} Cell Window: ${window} Detector: ${detector} Medium: ${medium} `,
  ];
  // ^^ extra space at the end allows for uniform file reading

  const csvLink = useRef();

  const sampleCSV = () => {
    let newData = [];

    const specType = ["Spectrum Type: Sample Spectrum"];
    newData.push(specType);

    for (let i = 0; i < sampleData.x.length; i++) {
      newData.push([sampleData.x[i], sampleData.y[i]]);
    }

    setData(newData);
    setFilename("sample data.csv");
    setTimeout(() => {
      csvLink.current.link.click();
    }, 500);
  };

  const backCSV = () => {
    let newData = [];

    const specType = ["Spectrum Type: Background Spectrum"];
    newData.push(specType);

    for (let i = 0; i < backgroundData.x.length; i++) {
      newData.push([backgroundData.x[i], backgroundData.y[i]]);
    }

    setData(newData);
    setFilename("background data.csv");
    setTimeout(() => {
      csvLink.current.link.click();
    }, 500);
  };

  const transCSV = () => {
    let newData = [];

    const specType = ["Spectrum Type: Transmittance Spectrum"];
    newData.push(specType);
    
    const {transX, transY} = generateTransmittance(backgroundData, sampleData);

    for (let i = 0; i < transX.length; i++) {
      newData.push([transX[i], transY[i]]);
    }

    setData(newData);
    setFilename("transmittance data.csv");
    setTimeout(() => {
      csvLink.current.link.click();
    }, 500);
  };

  const absorbCSV = () => {
    let newData = [];

    const specType = ["Spectrum Type: Absorbance Spectrum"];
    newData.push(specType);

    // easier to save in store and pull from there instead of repeating all the checks for Absorbance Data
    for (let i = 0; i < absorbanceData.x.length; i++) {
      newData.push([absorbanceData.x[i], absorbanceData.y[i]]);
    }

    setData(newData);
    setFilename("absorbance data.csv");
    setTimeout(() => {
      csvLink.current.link.click();
    }, 500);
  };

  const peaksCSV = () => {
    let newData = [];

    for (const [peak, intensity] of Object.entries(peaksData.peaks)) {
      newData.push([peak, intensity]);
    }

    setData(newData);
    setFilename("peaks data.csv");
    setTimeout(() => {
      csvLink.current.link.click();
    }, 500);
  };

  return (
    <div>
      <h1>Save Data</h1>

      {(sampleData || backgroundData) && (
        <h3>What data would you like to save?</h3>
      )}

      {!sampleData && !backgroundData && (
        <h3>There is currently no data to save</h3>
      )}

      <div className="save-col">
        {sampleData && (
          <>
            <button className="button" onClick={sampleCSV}>
              Sample Spectrum Data
            </button>
          </>
        )}

        {backgroundData && (
          <button className="button" onClick={backCSV}>
            Background Spectrum Data
          </button>
        )}

        {sampleData && backgroundData && (
          <button className="button" onClick={transCSV}>
            Transmittance Spectrum Data
          </button>
        )}

        {absorbanceData && (
          <button className="button" onClick={absorbCSV}>
            Absorbance Spectrum Data
          </button>
        )}

        {peaksData && (
          <button className="button" onClick={peaksCSV}>
            Peaks Data
          </button>
        )}

        <CSVLink
          data={data}
          headers={header}
          filename={filename}
          className="hidden"
          ref={csvLink}
          target="_blank"
        />
      </div>
    </div>
  );
}
