import { useState } from "react";

// components
import { CSVDownload } from "react-csv";

// redux
import { useSelector } from "react-redux";

// style
import "../style/components/Button.css";
import "../style/components/Save.css";

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
  const { spectrumData } = useSelector((store) => store.spectrumData);

  const [data, setData] = useState();
  const [printSample, setPrintSample] = useState(false);
  const [printBack, setPrintBack] = useState(false);
  const [printTrans, setPrintTrans] = useState(false);
  const [printAbsorb, setPrintAbsorb] = useState(false);
  const [printPeaks, setPrintPeaks] = useState(false);
  const header = [
    `Spectrum details | Min Wavenumber: ${waveMin} Max Wavenumber: ${waveMax} Molecule: ${molecule} Pressure: ${pressure} Resolution: ${resolution} Number of Scans: ${scan} Zero Fill: ${zeroFill} Source: ${source} Beamsplitter: ${beamsplitter} Cell Window: ${window} Detector: ${detector} Medium: ${medium} `,
  ];
  // ^^ extra space at the end allows for uniform file reading

  const resetPrints = () => {
    setPrintSample(false);
    setPrintBack(false);
    setPrintTrans(false);
    setPrintAbsorb(false);
    setPrintPeaks(false);
  };

  const sampleCSV = () => {
    resetPrints();
    let newData = [];

    const specType = ["Spectrum Type: Sample Spectrum"];
    newData.push(specType);

    for (let i = 0; i < spectrumData.x.length; i++) {
      newData.push([spectrumData.x[i], spectrumData.y[i]]);
    }

    setData(newData);
    setPrintSample(true);
  };

  const backCSV = () => {
    resetPrints();
    let newData = [];

    const specType = ["Spectrum Type: Background Spectrum"];
    newData.push(specType);

    for (let i = 0; i < backgroundData.x.length; i++) {
      newData.push([backgroundData.x[i], backgroundData.y[i]]);
    }

    setData(newData);
    setPrintBack(true);
  };

  const transCSV = () => {
    resetPrints();
    let newData = [];

    const specType = ["Spectrum Type: Transmittance Spectrum"];
    newData.push(specType);

    for (let i = 0; i < spectrumData.x.length; i++) {
      let newY = spectrumData.y[i] / backgroundData.y[i];
      newData.push([spectrumData.x[i], newY]);
    }

    setData(newData);
    setPrintTrans(true);
  };

  const absorbCSV = () => {
    resetPrints();
    let newData = [];

    const specType = ["Spectrum Type: Absorbance Spectrum"];
    newData.push(specType);

    // easier to save in store and pull from there instead of repeating all the checks for Absorbance Data
    for (let i = 0; i < absorbanceData.x.length; i++) {
      newData.push([absorbanceData.x[i], absorbanceData.y[i]]);
    }

    setData(newData);
    setPrintAbsorb(true);
  };

  const peaksCSV = () => {
    resetPrints();
    let newData = [];

    for (const [peak, intensity] of Object.entries(peaksData.peaks)) {
      newData.push([peak, intensity]);
    }

    setData(newData);
    setPrintPeaks(true);
  };

  return (
    <div>
      {/* NOTE: cannot control filenames at the moment */}
      {printSample && <CSVDownload headers={header} data={data} target="." />}
      {printBack && <CSVDownload headers={header} data={data} target="." />}
      {printTrans && <CSVDownload headers={header} data={data} target="." />}
      {printAbsorb && <CSVDownload headers={header} data={data} target="." />}
      {printPeaks && <CSVDownload headers={header} data={data} target="." />}

      <h1>Save Data</h1>

      {spectrumData && backgroundData && (
        <h3>What data would you like to save?</h3>
      )}

      {(!spectrumData || !backgroundData) && (
        <h3>There is currently no data to save</h3>
      )}

      <div className="save-col">
        {spectrumData && (
          <button className="button" onClick={sampleCSV}>
            Sample Spectrum Data
          </button>
        )}

        {backgroundData && (
          <button className="button" onClick={backCSV}>
            Background Spectrum Data
          </button>
        )}

        {spectrumData && backgroundData && (
          <button className="button" onClick={transCSV}>
            Transmittance Spectrum Data
          </button>
        )}

        {spectrumData && backgroundData && (
          <button className="button" onClick={absorbCSV}>
            Absorbance Spectrum Data
          </button>
        )}

        {peaksData && (
          <button className="button" onClick={peaksCSV}>
            Peaks Data
          </button>
        )}
      </div>
    </div>
  );
}
