import store from "./store";
import FileSaver from "file-saver";

export const Save = () => {
  const state = store.getState();

  if (state.data === null) {
    return;
  }

  const params = state.params;
  const xVals = state.processedData.x;
  // console.log(xVals);
  const yVals = state.processedData.y;


  let data = `# Min Wavenumber: ${params.minWave} Max Wavenumber: ${params.maxWave} Molecule: ${params.molecule} Pressure: ${params.pressure} Resolution: ${params.resolution} Number of Scans: ${params.numScan} Zero Fill: ${params.zeroFill} Source: ${params.source} Beamsplitter: ${params.beamsplitter} Cell Window: ${params.cellWindow} Detector: ${params.detector} \n`;
  // console.log("start loop");
  for(let i = 0; i < xVals.length; i++) {
    // console.log('loop');
    console.log(`${xVals[i]} ${yVals[i]}\n`);
    data += `${xVals[i]} ${yVals[i]}\n`;
  }
  // console.log("exit loop");

  const blob = new Blob(new Array([data]), { type: "application/csv" });
  FileSaver.saveAs(blob, `${params.minWave}-${params.maxWave}-spectrum.csv`)
};
