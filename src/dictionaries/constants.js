// URLs used to react the API either running locally or hosted online

// export const FIND_PEAKS = "http://localhost:5000/find_peaks";
export const FIND_PEAKS = "https://api.ftir.rastonlab.org/find_peaks";

// export const BACKGROUND = "http://localhost:5000/background";
export const BACKGROUND = "https://api.ftir.rastonlab.org/background";

// export const SAMPLE = "http://localhost:5000/spectrum";
export const SAMPLE = "https://api.ftir.rastonlab.org/spectrum";

// If true, will not add artificial delay for background and sample scans
// and will not take you to the instrument window after running a scan
export let DEVELOPER_MODE = false;

export function Toggle_Mode() {
  DEVELOPER_MODE = !DEVELOPER_MODE;
}

// svg ids that are not associated with tooltips but can be selected
export const BAD_ID = [
  "beam-globar",
  "beam-insb",
  "beam-mct",
  "beam-tungsten",
  "beams",
  "ftir",
  "globar-laser",
  "hose-1",
  "hose-2",
  "insb-laser",
  "instrument-window",
  "instrument",
  "mct-laser",
  "opd-value",
  "molecule-value",
  "range-value",
  "rays",
  "readout",
  "resolution-value",
  "scan-value",
  "tungsten-laser",
];

// OPD values used to calculate a scans length
export const OPD = {
  1: 1,
  0.5: 2,
  0.25: 4,
  0.125: 8,
  0.0625: 16,
  0.03125: 32,
  0.015625: 64,
};

// backend values associated with user parameters/inputs
export const PARAMETER_VALUE = {
  beamsplitterZnSe: "AR_ZnSe",
  beamsplitterCaF2: "AR_CaF2",
  cellWindowZnSe: "ZnSe",
  cellWindowCaF2: "CaF2",
  detectorMCT: "MCT",
  detectorInSb: "InSb",
  mediumVacuum: "Vacuum",
  mediumAir: "Air",
  sourceGlobar: 1200,
  sourceTungsten: 3400,
};
