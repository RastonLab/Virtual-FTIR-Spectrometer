// components
import FileSaver from "file-saver";

// redux
// import * as React from "react";
import { useSelector } from "react-redux";

// export const spectrumDetails = () => {
//   const {
//     beamsplitter,
//     detector,
//     medium,
//     molecule,
//     pressure,
//     resolution,
//     scan,
//     source,
//     waveMax,
//     waveMin,
//     window,
//     zeroFill,
//   } = useSelector((store) => store.parameter);

//   return `# Spectrum details | Min Wavenumber: ${waveMin} Max Wavenumber: ${waveMax} Molecule: ${molecule} Pressure: ${pressure} Resolution: ${resolution} Number of Scans: ${scan} Zero Fill: ${zeroFill} Source: ${source} Beamsplitter: ${beamsplitter} Cell Window: ${window} Detector: ${detector} Medium: ${medium} \n`;

// }

// Saves a file containing the Absorbance spectrum
export const Save_Absorb = () => {

};

// Saves a file containing the peaks of the Absorbance spectrum
// TODO: adjust for zoom in range once that is implemented
export default function Save_Peaks() {

  const { peaksData } = useSelector((store) => store.peaksData);

  if (peaksData != null) {

    let data = "";

    for (const [peak, intensity] of Object.entries(peaksData.peaks)) {
      data += `${peak},${intensity}\n`;
    }

    const blob = new Blob(new Array([data]), { type: "application/csv" });
    FileSaver.saveAs(blob, `peaks.csv`);
  }

};

export const Save = () => {
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
  const { backgroundData } = useSelector((store) => store.backgroundData);
  const { spectrumData } = useSelector((store) => store.spectrumData);

  if (spectrumData === null) {
    return;
  }

  if (spectrumData != null) {
    console.log("saving processed");
    const xVals = spectrumData.x;
    const yVals = spectrumData.y;
    let data = `# Min Wavenumber: ${waveMin} Max Wavenumber: ${waveMax} Molecule: ${molecule} Pressure: ${pressure} Resolution: ${resolution} Number of Scans: ${scan} Zero Fill: ${zeroFill} Source: ${source} Beamsplitter: ${beamsplitter} Cell Window: ${window} Detector: ${detector} Medium: ${medium} \n`;
    for (let i = 0; i < xVals.length; i++) {
      data += `${xVals[i]},${yVals[i]}\n`;
    }

    const blob = new Blob(new Array([data]), { type: "application/csv" });
    FileSaver.saveAs(blob, `${waveMin}-${waveMax}-spectrum.csv`);
  }

  if (backgroundData != null) {
    console.log("saving background");
    const xVals = backgroundData.x;
    const yVals = backgroundData.y;
    let data = `# Min Wavenumber: ${waveMin} Max Wavenumber: ${waveMax} Molecule: ${molecule} Pressure: ${pressure} Resolution: ${resolution} Number of Scans: ${scan} Zero Fill: ${zeroFill} Source: ${source} Beamsplitter: ${beamsplitter} Cell Window: ${window} Detector: ${detector} Medium: ${medium} \n`;
    for (let i = 0; i < xVals.length; i++) {
      data += `${xVals[i]},${yVals[i]}\n`;
    }

    const blob = new Blob(new Array([data]), { type: "application/csv" });
    FileSaver.saveAs(blob, `${waveMin}-${waveMax}-background-spectrum.csv`);
  }
};
