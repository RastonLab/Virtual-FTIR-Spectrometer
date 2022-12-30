import store from "./store";
import FileSaver from "file-saver";

export const Save = () => {
  const state = store.getState();

  if (state.data === null) {
    return;
  }

  const params = state.params;
  const pData = state.processedData;
  const bgData = state.backgroundData;



    let data = `# Min Wavenumber: ${params.minWave} Max Wavenumber: ${params.maxWave} Molecule: ${params.molecule} Pressure: ${params.pressure} Resolution: ${params.resolution} Number of Scans: ${params.numScan} Zero Fill: ${params.zeroFill} Source: ${params.source} Beamsplitter: ${params.beamsplitter} Cell Window: ${params.cellWindow} Detector: ${params.detector} \n`;

    for(let i = 0; i < pData.length; i++) {
      console.log(pData[i]);
      data += `${pData[i]}\n`
    }
  
  
    const blob = new Blob(new Array([data]), { type: "application/csv" });
    FileSaver.saveAs(blob, `${params.minWave}-${params.maxWave}-spectrum.csv`)
  

  if (bgData != null) {

    let data = `# Min Wavenumber: ${params.minWave} Max Wavenumber: ${params.maxWave} Molecule: ${params.molecule} Pressure: ${params.pressure} Resolution: ${params.resolution} Number of Scans: ${params.numScan} Zero Fill: ${params.zeroFill} Source: ${params.source} Beamsplitter: ${params.beamsplitter} Cell Window: ${params.cellWindow} Detector: ${params.detector} \n`;

    for(let i = 0; i < bgData.length; i++) {
  
      data += `${bgData[i]}\n`
    }
  
  
    const blob = new Blob(new Array([data]), { type: "application/csv" });
    FileSaver.saveAs(blob, `${params.minWave}-${params.maxWave}-background-spectrum.csv`)
  }


};
