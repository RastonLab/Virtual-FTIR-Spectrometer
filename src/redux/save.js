import store from "./store";
import FileSaver from "file-saver";

export const Save = () => {
  const state = store.getState();
  const params = state.params2;
  const xVals = state.data.data.x;
  const yVals = state.data.data.y;

  // TODO Add params to first line
  let data = `# Min Wavenumber: ${params.min_wave} Max Wavenumber: ${params.max_wave} Molecule: ${params.molecule} Pressure: ${params.pressure} Resolution: ${params.pressure} Number of Scans: ${params.num_scan} Zero Fill: ${params.zero_fill} Source: ${params.source} Beamsplitter: ${params.beamsplitter} Cell Window: ${params.cell_window} Detector: ${params.detector} \n`;

  for(let i = 0; i < xVals.length; i++) {

    data += `${xVals[i]} ${yVals[i]}\n`
  }


  const blob = new Blob(new Array([data]), { type: "application/csv" });
  FileSaver.saveAs(blob, `${params.min_wave}-${params.max_wave}-spectrum.csv`)
};
