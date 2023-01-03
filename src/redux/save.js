import store from "./store";
import FileSaver from "file-saver";

export const Save = () => {
  const state = store.getState();

  if (state.data === null) {
    return;
  }

  const params = state.params;


  if (state.processedData != null) {
    console.log("saving processed")
    const xVals = state.processedData.x;
    const yVals = state.processedData.y;
    let data = `# Min Wavenumber: ${params.minWave} Max Wavenumber: ${params.maxWave} Molecule: ${params.molecule} Pressure: ${params.pressure} Resolution: ${params.resolution} Number of Scans: ${params.numScan} Zero Fill: ${params.zeroFill} Source: ${params.source} Beamsplitter: ${params.beamsplitter} Cell Window: ${params.cellWindow} Detector: ${params.detector} \n`;
    for(let i = 0; i < xVals.length; i++) {
      data += `${xVals[i]},${yVals[i]}\n`;
    }
  
    const blob = new Blob(new Array([data]), { type: "application/csv" });
    FileSaver.saveAs(blob, `${params.minWave}-${params.maxWave}-spectrum.csv`)
  }

  if (state.backgroundData != null) {
    console.log("saving background")
    const xVals = state.backgroundData.x;
    const yVals = state.backgroundData.y;
    let data = `# Min Wavenumber: ${params.minWave} Max Wavenumber: ${params.maxWave} Molecule: ${params.molecule} Pressure: ${params.pressure} Resolution: ${params.resolution} Number of Scans: ${params.numScan} Zero Fill: ${params.zeroFill} Source: ${params.source} Beamsplitter: ${params.beamsplitter} Cell Window: ${params.cellWindow} Detector: ${params.detector} \n`;
    for(let i = 0; i < xVals.length; i++) {
      data += `${xVals[i]},${yVals[i]}\n`;
    }
  
    const blob = new Blob(new Array([data]), { type: "application/csv" });
    FileSaver.saveAs(blob, `${params.minWave}-${params.maxWave}-background-spectrum.csv`)
  }


};
