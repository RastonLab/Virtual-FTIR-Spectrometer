
// Controls whether or not the Toggle Dev Mode Button is visible
export const SHOW_DEVMODE = true;

// URLs used to react the API either running locally or hosted online

export const FIND_PEAKS = "https://cloud.rastonlab.org/ftir/find_peaks"; // main
// export const FIND_PEAKS = "https://cloud.rastonlab.org/dev/ftir/find_peaks"; // dev
// export const FIND_PEAKS = "http://localhost:5000/find_peaks"; // local

export const BACKGROUND = "https://cloud.rastonlab.org/ftir/background"; // main
// export const BACKGROUND = "https://cloud.rastonlab.org/dev/ftir/background"; // dev
// export const BACKGROUND = "http://localhost:5000/background"; // local

export const SAMPLE = "https://cloud.rastonlab.org/ftir/sample"; // main
// export const SAMPLE = "https://cloud.rastonlab.org/dev/ftir/sample"; // dev
// export const SAMPLE = "http://localhost:5000/sample"; // local

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
  1: { value: 1, distance: 0.5, time: 0.703125 },
  0.5: { value: 2, distance: 1, time: 1.40625 },
  0.25: { value: 4, distance: 2, time: 2.8125 },
  0.125: { value: 8, distance: 4, time: 5.625 },
  0.0625: { value: 16, distance: 8, time: 11.25 },
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

// ---------- ANIMATION KEYFRAMES ----------
export const BLUE_BALL_KEYFRAMES = {
  1: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, -150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(375px, -150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(625px, -150px)" },
    { transform: "translate(750px, 0px)" },
    { transform: "translate(875px, -150px)" },
    { transform: "translate(750px, 0px)" },
    { transform: "translate(625px, -150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(375px, -150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  2: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-90px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(300px, -150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(500px, -150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(700px, -150px)" },
    { transform: "translate(800px, 0px)" },
    { transform: "translate(700px, -150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(500px, -150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(300px, -150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  3: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, -150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(375px, -150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(625px, -150px)" },
    { transform: "translate(750px, 0px)" },
    { transform: "translate(625px, -150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(375px, -150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  4: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, -150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-100px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(300px, -150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(500px, -150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(700px, -150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(500px, -150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(300px, -150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  5: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, -150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(375px, -150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(625px, -150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(375px, -150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, -150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  6: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-115px, -150px)" },
    { transform: "translate(-230px, 0px)" },
    { transform: "translate(-335px, -150px)" },
    { transform: "translate(-230px, 0px)" },
    { transform: "translate(-115px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(115px, -150px)" },
    { transform: "translate(230px, 0px)" },
    { transform: "translate(345px, -150px)" },
    { transform: "translate(460px, 0px)" },
    { transform: "translate(575px, -150px)" },
    { transform: "translate(460px, 0px)" },
    { transform: "translate(345px, -150px)" },
    { transform: "translate(230px, 0px)" },
    { transform: "translate(115px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  7: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(300px, -150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(500px, -150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(300px, -150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, -150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-300px, -150px)" },
    { transform: "translate(-380px, 0px)" },
    { transform: "translate(-300px, -150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-100px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  8: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-150px, -150px)" },
    { transform: "translate(-300px, 0px)" },
    { transform: "translate(-450px, -150px)" },
    { transform: "translate(-300px, 0px)" },
    { transform: "translate(-150px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(150px, -150px)" },
    { transform: "translate(300px, 0px)" },
    { transform: "translate(450px, -150px)" },
    { transform: "translate(300px, 0px)" },
    { transform: "translate(150px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  9: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(300px, -150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(300px, -150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, -150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-300px, -150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-500px, -150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-300px, -150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-100px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  10: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-80px, -150px)" },
    { transform: "translate(-160px, 0px)" },
    { transform: "translate(-240px, -150px)" },
    { transform: "translate(-320px, 0px)" },
    { transform: "translate(-400px, -150px)" },
    { transform: "translate(-480px, 0px)" },
    { transform: "translate(-560px, -150px)" },
    { transform: "translate(-480px, 0px)" },
    { transform: "translate(-400px, -150px)" },
    { transform: "translate(-320px, 0px)" },
    { transform: "translate(-240px, -150px)" },
    { transform: "translate(-160px, 0px)" },
    { transform: "translate(-80px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(80px, -150px)" },
    { transform: "translate(160px, 0px)" },
    { transform: "translate(240px, -150px)" },
    { transform: "translate(320px, 0px)" },
    { transform: "translate(240px, -150px)" },
    { transform: "translate(160px, 0px)" },
    { transform: "translate(80px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  11: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(90px, -150px)" },
    { transform: "translate(180px, 0px)" },
    { transform: "translate(270px, -150px)" },
    { transform: "translate(180px, 0px)" },
    { transform: "translate(90px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-90px, -150px)" },
    { transform: "translate(-180px, 0px)" },
    { transform: "translate(-270px, -150px)" },
    { transform: "translate(-360px, 0px)" },
    { transform: "translate(-450px, -150px)" },
    { transform: "translate(-540px, 0px)" },
    { transform: "translate(-630px, -150px)" },
    { transform: "translate(-540px, 0px)" },
    { transform: "translate(-450px, -150px)" },
    { transform: "translate(-360px, 0px)" },
    { transform: "translate(-270px, -150px)" },
    { transform: "translate(-180px, 0px)" },
    { transform: "translate(-90px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  12: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, -150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-300px, -150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-500px, -150px)" },
    { transform: "translate(-600px, 0px)" },
    { transform: "translate(-680px, -150px)" },
    { transform: "translate(-600px, 0px)" },
    { transform: "translate(-500px, -150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-300px, -150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-100px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  13: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, -150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-375px, -150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-625px, -150px)" },
    { transform: "translate(-740px, 0px)" },
    { transform: "translate(-625px, -150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-375px, -150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(130px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  14: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, -150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, -150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-300px, -150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-500px, -150px)" },
    { transform: "translate(-600px, 0px)" },
    { transform: "translate(-700px, -150px)" },
    { transform: "translate(-800px, 0px)" },
    { transform: "translate(-700px, -150px)" },
    { transform: "translate(-600px, 0px)" },
    { transform: "translate(-500px, -150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-300px, -150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-100px, -150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  15: [
    { transform: "translate(20px, 0px)" },
    { transform: "translate(-120px, -150px)" },
    { transform: "translate(-240px, 0px)" },
    { transform: "translate(-360px, -150px)" },
    { transform: "translate(-480px, 0px)" },
    { transform: "translate(-600px, -150px)" },
    { transform: "translate(-720px, 0px)" },
    { transform: "translate(-840px, -150px)" },
    { transform: "translate(-720px, 0px)" },
    { transform: "translate(-600px, -150px)" },
    { transform: "translate(-480px, 0px)" },
    { transform: "translate(-360px, -150px)" },
    { transform: "translate(-240px, 0px)" },
    { transform: "translate(-120px, -150px)" },
    { transform: "translate(20px, 0px)" },
  ],
}

export const RED_BALL_KEYFRAMES = {
  1: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(150px, 150px)" },
    { transform: "translate(300px, 0px)" },
    { transform: "translate(450px, 150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(750px, 150px)" },
    { transform: "translate(875px, 0px)" },
    { transform: "translate(750px, 150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(450px, 150px)" },
    { transform: "translate(300px, 0px)" },
    { transform: "translate(150px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  2: [
    { transform: "translate(-20px, 0px)" },
    { transform: "translate(200px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(600px, 150px)" },
    { transform: "translate(850px, 0px)" },
    { transform: "translate(600px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(200px, 150px)" },
    { transform: "translate(-20px, 0px)" },
  ],
  3: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-70px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(80px, 150px)" },
    { transform: "translate(160px, 0px)" },
    { transform: "translate(240px, 150px)" },
    { transform: "translate(320px, 0px)" },
    { transform: "translate(400px, 150px)" },
    { transform: "translate(480px, 0px)" },
    { transform: "translate(560px, 150px)" },
    { transform: "translate(640px, 0px)" },
    { transform: "translate(720px, 150px)" },
    { transform: "translate(810px, 0px)" },
    { transform: "translate(720px, 150px)" },
    { transform: "translate(640px, 0px)" },
    { transform: "translate(560px, 150px)" },
    { transform: "translate(480px, 0px)" },
    { transform: "translate(400px, 150px)" },
    { transform: "translate(320px, 0px)" },
    { transform: "translate(240px, 150px)" },
    { transform: "translate(160px, 0px)" },
    { transform: "translate(80px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  4: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(625px, 150px)" },
    { transform: "translate(725px, 0px)" },
    { transform: "translate(810px, 150px)" },
    { transform: "translate(725px, 0px)" },
    { transform: "translate(625px, 150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  5: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(500px, 150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(700px, 150px)" },
    { transform: "translate(780px, 0px)" },
    { transform: "translate(700px, 150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(500px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  6: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(200px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(600px, 150px)" },
    { transform: "translate(750px, 0px)" },
    { transform: "translate(600px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(200px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-150px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  7: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(-180px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(500px, 150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(700px, 150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(500px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  8: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-200px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(175px, 150px)" },
    { transform: "translate(350px, 0px)" },
    { transform: "translate(525px, 150px)" },
    { transform: "translate(700px, 0px)" },
    { transform: "translate(525px, 150px)" },
    { transform: "translate(350px, 0px)" },
    { transform: "translate(175px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  9: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(-240px, 0px)" },
    { transform: "translate(-120px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(645px, 150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  10: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(625px, 150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(125px, 0px)" },
  ],
  11: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(500px, 150px)" },
    { transform: "translate(600px, 0px)" },
    { transform: "translate(500px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-280px, 150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  12: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(150px, 150px)" },
    { transform: "translate(300px, 0px)" },
    { transform: "translate(450px, 150px)" },
    { transform: "translate(580px, 0px)" },
    { transform: "translate(450px, 150px)" },
    { transform: "translate(300px, 0px)" },
    { transform: "translate(150px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-150px, 150px)" },
    { transform: "translate(-300px, 0px)" },
    { transform: "translate(-150px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  13: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-345px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(530px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  14: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(500px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  15: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(490px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-300px, 150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-300px, 150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  16: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(220px, 150px)" },
    { transform: "translate(440px, 0px)" },
    { transform: "translate(220px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-220px, 150px)" },
    { transform: "translate(-440px, 0px)" },
    { transform: "translate(-220px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  17: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(400px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-300px, 150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-480px, 150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-300px, 150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  18: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(375px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  19: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-175px, 150px)" },
    { transform: "translate(-350px, 0px)" },
    { transform: "translate(-525px, 150px)" },
    { transform: "translate(-350px, 0px)" },
    { transform: "translate(-175px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(175px, 150px)" },
    { transform: "translate(350px, 0px)" },
    { transform: "translate(175px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  20: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-150px, 150px)" },
    { transform: "translate(-300px, 0px)" },
    { transform: "translate(-450px, 150px)" },
    { transform: "translate(-590px, 0px)" },
    { transform: "translate(-450px, 150px)" },
    { transform: "translate(-300px, 0px)" },
    { transform: "translate(-150px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(150px, 150px)" },
    { transform: "translate(300px, 0px)" },
    { transform: "translate(150px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  21: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(300px, 150px)" },
    { transform: "translate(200px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-300px, 150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-500px, 150px)" },
    { transform: "translate(-580px, 0px)" },
    { transform: "translate(-500px, 150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-300px, 150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  22: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-625px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  23: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-650px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(250px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  24: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-115px, 150px)" },
    { transform: "translate(-230px, 0px)" },
    { transform: "translate(-345px, 150px)" },
    { transform: "translate(-460px, 0px)" },
    { transform: "translate(-575px, 150px)" },
    { transform: "translate(-690px, 0px)" },
    { transform: "translate(-575px, 150px)" },
    { transform: "translate(-460px, 0px)" },
    { transform: "translate(-345px, 150px)" },
    { transform: "translate(-230px, 0px)" },
    { transform: "translate(-115px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(115px, 150px)" },
    { transform: "translate(215px, 0px)" },
    { transform: "translate(115px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  25: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(75px, 150px)" },
    { transform: "translate(160px, 0px)" },
    { transform: "translate(75px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-300px, 150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-500px, 150px)" },
    { transform: "translate(-600px, 0px)" },
    { transform: "translate(-700px, 150px)" },
    { transform: "translate(-600px, 0px)" },
    { transform: "translate(-500px, 150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-300px, 150px)" },
    { transform: "translate(-200px, 0px)" },
    { transform: "translate(-100px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  26: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(150px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-200px, 150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-600px, 150px)" },
    { transform: "translate(-730px, 0px)" },
    { transform: "translate(-600px, 150px)" },
    { transform: "translate(-400px, 0px)" },
    { transform: "translate(-200px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  27: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(125px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-625px, 150px)" },
    { transform: "translate(-750px, 0px)" },
    { transform: "translate(-625px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  28: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(100px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-625px, 150px)" },
    { transform: "translate(-775px, 0px)" },
    { transform: "translate(-625px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  29: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(60px, 150px)" },
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-75px, 150px)" },
    { transform: "translate(-150px, 0px)" },
    { transform: "translate(-225px, 150px)" },
    { transform: "translate(-300px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-450px, 0px)" },
    { transform: "translate(-525px, 150px)" },
    { transform: "translate(-600px, 0px)" },
    { transform: "translate(-675px, 150px)" },
    { transform: "translate(-750px, 0px)" },
    { transform: "translate(-825px, 150px)" },
    { transform: "translate(-750px, 0px)" },
    { transform: "translate(-675px, 150px)" },
    { transform: "translate(-600px, 0px)" },
    { transform: "translate(-525px, 150px)" },
    { transform: "translate(-450px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-300px, 0px)" },
    { transform: "translate(-225px, 150px)" },
    { transform: "translate(-150px, 0px)" },
    { transform: "translate(-75px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
  30: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-150px, 150px)" },
    { transform: "translate(-300px, 0px)" },
    { transform: "translate(-450px, 150px)" },
    { transform: "translate(-600px, 0px)" },
    { transform: "translate(-750px, 150px)" },
    { transform: "translate(-850px, 0px)" },
    { transform: "translate(-750px, 150px)" },
    { transform: "translate(-600px, 0px)" },
    { transform: "translate(-450px, 150px)" },
    { transform: "translate(-300px, 0px)" },
    { transform: "translate(-150px, 150px)" },
    { transform: "translate(10px, 0px)" },
  ],
  31: [
    { transform: "translate(0px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-625px, 150px)" },
    { transform: "translate(-750px, 0px)" },
    { transform: "translate(-875px, 150px)" },
    { transform: "translate(-750px, 0px)" },
    { transform: "translate(-625px, 150px)" },
    { transform: "translate(-500px, 0px)" },
    { transform: "translate(-375px, 150px)" },
    { transform: "translate(-250px, 0px)" },
    { transform: "translate(-125px, 150px)" },
    { transform: "translate(0px, 0px)" },
  ],
}
