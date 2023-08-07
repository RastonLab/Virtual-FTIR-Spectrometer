// URLs used to react the API either running locally or hosted online

export const FIND_PEAKS = "https://cloud.rastonlab.org/ftir/find_peaks"; // main
// export const FIND_PEAKS = "https://cloud.rastonlab.org/dev/ftir/find_peaks"; // dev
// export const FIND_PEAKS = "http://localhost:5000/find_peaks"; // local

export const BACKGROUND = "https://cloud.rastonlab.org/ftir/background"; // main
// export const BACKGROUND = "https://cloud.rastonlab.org/dev/ftir/background"; // dev
// export const BACKGROUND = "http://localhost:5000/background"; // local

export const SAMPLE = "https://cloud.rastonlab.org/ftir/spectrum"; // main
// export const SAMPLE = "https://cloud.rastonlab.org/dev/ftir/spectrum"; // dev
// export const SAMPLE = "http://localhost:5000/spectrum"; // local

// svg ids that are not associated with tooltips but can be selected
export const BAD_ID = [
  "beam-globar",
  "beam-insb",
  "beam-mct",
  "beam-tungsten",
  "beams",
  "customized-dialog-title",
  "ftir",
  "globar-laser",
  "hose-1",
  "hose-2",
  "insb-laser",
  "instrument-window",
  "instrument",
  "mct-laser",
  "opd-value",
  "manometer-value",
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
  1: {      value: 1,   distance: 0.5,  time: 0.703125 },
  0.5: {    value: 2,   distance: 1,    time: 1.40625 },
  0.25: {   value: 4,   distance: 2,    time: 2.8125 },
  0.125: {  value: 8,   distance: 4,    time: 5.625 },
  0.0625: { value: 16,  distance: 8,    time: 11.25 },
  // 0.03125: { value: 32, distance: 16, time: 22.5 },
  // 0.015625: { value: 64, distance: 32, time: 45 },
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

// frontend labels associated with user parameters/inputs
export const PARAMETER_LABEL = {
  beamsplitterZnSe: "AR-ZnSe",
  beamsplitterCaF2: "AR-CaF₂",
  cellWindowZnSe: "ZnSe",
  cellWindowCaF2: "CaF₂",
  detectorMCT: "MCT",
  detectorInSb: "InSb",
  mediumVacuum: "Vacuum",
  mediumAir: "Air",
  sourceGlobar: "Globar",
  sourceTungsten: "Tungsten",
};
