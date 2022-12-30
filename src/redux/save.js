import store from "./store";
import FileSaver from "file-saver";

export const Save = () => {
  const state = store.getState();

  if (state.data === null) {
    return;
  }

  const params = state.params;
  const yVals = state.processedData.y;
  console.log("just fine\n");
  const xVals = state.processedData.x;


  let data = `# Min Wavenumber: ${params.minWave} Max Wavenumber: ${params.maxWave} Molecule: ${params.molecule} Pressure: ${params.pressure} Resolution: ${params.resolution} Number of Scans: ${params.numScan} Zero Fill: ${params.zeroFill} Source: ${params.source} Beamsplitter: ${params.beamsplitter} Cell Window: ${params.cellWindow} Detector: ${params.detector} \n`;

  for(let i = 0; i < xVals.length; i++) {

    data += `${xVals[i]} ${yVals[i]}\n`
  }


  const blob = new Blob(new Array([data]), { type: "application/csv" });
  FileSaver.saveAs(blob, `${params.minWave}-${params.maxWave}-spectrum.csv`)
};
