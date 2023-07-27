import { PARAMETER_VALUE } from "../dictionaries/constants";

export function animateCornerCube(time) {
  const mcc = document.getElementById("movable-corner-cube");
  const rayTop = document.getElementById("ray-top");
  const rayMiddle = document.getElementById("ray-middle");
  const rayBottom = document.getElementById("ray-bottom");
  const laser = document.getElementById("rect6675");

  if (mcc) {
    mcc.style.transition = `all ${time}s ease`;
    rayTop.style.transition = `all ${time}s ease`;
    rayMiddle.style.transition = `all ${time}s ease`;
    rayBottom.style.transition = `all ${time}s ease`;
    laser.style.transition = `all ${time}s ease`;

    // moveable corner cube
    mcc.setAttribute(
      "transform",
      "rotate(135 900.985 1021.051) translate(-800, -800)"
    );

    // top ray
    rayTop.setAttribute(
      "d",
      "m953.417-3217.12 94.391-91.071v1860.955l-94.391 95.49z"
    );

    // middle ray
    rayMiddle.setAttribute("transform", "rotate(90) translate (0, -1130)");

    // bottom ray
    rayBottom.setAttribute(
      "d",
      "m1164.195-3310.854 94.356 95.49v2632.447l-94.356 89.932z"
    );

    // laser
    laser.setAttribute(
      "d",
      "M1406.494 991.284v10H3190.73v209.254H344.494v10H3200.73V991.284Z"
    );

    setTimeout(() => {
      // moveable corner cube
      mcc.setAttribute(
        "transform",
        "rotate(135 900.985 1021.051) translate(0, 0)"
      );

      // top ray
      rayTop.setAttribute(
        "d",
        "m953.417-2026.826 94.391-93.734v673.324l-94.391 95.49z"
      );

      // middle ray
      rayMiddle.setAttribute("transform", "rotate(90) translate (0, 0)");

      // bottom ray
      rayBottom.setAttribute(
        "d",
        "m1164.195-2120.56 94.356 93.733v1443.91l-94.356 89.932z"
      );

      // laser
      laser.setAttribute(
        "d",
        "M1406.494 991.284v10h651.235v209.254H344.494v10H2067.73V991.284z"
      );
    }, time * 1000);
  }
}

export function beamsplitterInteractivity(beamsplitter) {
  // DOM elements
  const caf2 = document.getElementById("beamsplitter-caf2");
  const znse = document.getElementById("beamsplitter-znse");

  // constant parameter values
  const caf2Value = PARAMETER_VALUE.beamsplitterCaF2;
  const znseValue = PARAMETER_VALUE.beamsplitterZnSe;

  // ternary used to show/hide beamsplitter in the Main SVG
  caf2.style.display = beamsplitter === caf2Value ? "inline" : "none";
  znse.style.display = beamsplitter === znseValue ? "inline" : "none";
}

export function detectorInteractivity(detector) {
  // DOM elements
  const insbMirror = document.getElementById("flat-rotatable-mirror-insb");
  const mctMirror = document.getElementById("flat-rotatable-mirror-mct");
  const insbBeam = document.getElementById("beam-insb");
  const mctBeam = document.getElementById("beam-mct");

  // constant parameter values
  const insbValue = PARAMETER_VALUE.detectorInSb;
  const mctValue = PARAMETER_VALUE.detectorMCT;

  // ternary used to show/hide detector mirrors in the Main SVG
  insbMirror.style.display = detector === insbValue ? "inline" : "none";
  insbBeam.style.display = detector === insbValue ? "inline" : "none";

  // ternary used to show/hide detector beams in the Main SVG
  mctMirror.style.display = detector === mctValue ? "inline" : "none";
  mctBeam.style.display = detector === mctValue ? "inline" : "none";
}

export function sourceInteractivity(source) {
  // DOM elements
  const globarMirror = document.getElementById("flat-rotatable-mirror-globar");
  const tungstenMirror = document.getElementById(
    "flat-rotatable-mirror-tungsten"
  );
  const globarBeam = document.getElementById("beam-globar");
  const tungstenBeam = document.getElementById("beam-tungsten");

  // constant parameter values
  const globarValue = PARAMETER_VALUE.sourceGlobar;
  const tungstenValue = PARAMETER_VALUE.sourceTungsten;

  // ternary used to show/hide source mirrors in the Main SVG
  globarMirror.style.display = source === globarValue ? "inline" : "none";
  globarBeam.style.display = source === globarValue ? "inline" : "none";

  // ternary used to show/hide source beams in the Main SVG
  tungstenMirror.style.display = source === tungstenValue ? "inline" : "none";
  tungstenBeam.style.display = source === tungstenValue ? "inline" : "none";
}

export function cellWindowInteractivity(window) {
  // DOM elements
  const caf2 = document.getElementById("sample-cell-caf2");
  const znse = document.getElementById("sample-cell-znse");

  // constant parameter values
  const caf2Value = PARAMETER_VALUE.cellWindowCaF2;
  const znseValue = PARAMETER_VALUE.cellWindowZnSe;

  // ternary used to show/hide cell window in the Main SVG
  caf2.style.display = window === caf2Value ? "inline" : "none";
  znse.style.display = window === znseValue ? "inline" : "none";
}

export function textInteractivity(
  molecule,
  opd,
  resolution,
  scan,
  waveMax,
  waveMin
) {
  // DOM elements
  const opdText = document.getElementById("opd-value");
  const scanText = document.getElementById("scan-value");
  const rangeText = document.getElementById("range-value");
  const resolutionText = document.getElementById("resolution-value");
  const moleculeText = document.getElementById("molecule-value");

  // set text in the readout panel
  opdText.textContent = opd[resolution];
  scanText.textContent = scan;
  rangeText.textContent = `${waveMin} - ${waveMax}`;
  resolutionText.textContent = resolution;

  // set text in the lecture bottle
  moleculeText.textContent = molecule;
}

export function pumpValveInteractivity(medium) {
  // DOM elements
  const caf2ValveLeft = document.getElementById("caf2-valve-left");
  const znseValveLeft = document.getElementById("znse-valve-left");

  medium === "Air"
    ? caf2ValveLeft.setAttribute(
        "d",
        "M548.806 430.577a1.089 1.088 0 0 0-.643 1.056l-2.119.946a.256.256 0 0 0-.13.339l.105.234c.058.13.21.188.34.13l2.118-.945a1.089 1.088 0 0 0 1.216.227 1.089 1.088 0 0 0 .643-1.057l2.119-.945a.256.256 0 0 0 .13-.34l-.105-.234a.256.256 0 0 0-.34-.13l-2.118.946a1.089 1.088 0 0 0-1.216-.227z"
      )
    : caf2ValveLeft.setAttribute(
        "d",
        "M548.161 431.567a1.088 1.089 24.24 0 0 .7 1.02l-.008 2.32c0 .142.114.257.256.257l.257.001a.256.256 0 0 0 .257-.256l.008-2.32a1.088 1.089 24.24 0 0 .707-1.015 1.088 1.089 24.24 0 0-.7-1.02l.008-2.32a.256.256 0 0 0-.256-.258h-.256a.256.256 0 0 0-.258.255l-.008 2.32a1.088 1.089 24.24 0 0-.707 1.016z"
      );

  medium === "Air"
    ? znseValveLeft.setAttribute(
        "d",
        "M548.806 430.577a1.089 1.088 0 0 0-.643 1.056l-2.119.946a.256.256 0 0 0-.13.339l.105.234c.058.13.21.188.34.13l2.118-.945a1.089 1.088 0 0 0 1.216.227 1.089 1.088 0 0 0 .643-1.057l2.119-.945a.256.256 0 0 0 .13-.34l-.105-.234a.256.256 0 0 0-.34-.13l-2.118.946a1.089 1.088 0 0 0-1.216-.227z"
      )
    : znseValveLeft.setAttribute(
        "d",
        "M548.161 431.567a1.088 1.089 24.24 0 0 .7 1.02l-.008 2.32c0 .142.114.257.256.257l.257.001a.256.256 0 0 0 .257-.256l.008-2.32a1.088 1.089 24.24 0 0 .707-1.015 1.088 1.089 24.24 0 0-.7-1.02l.008-2.32a.256.256 0 0 0-.256-.258h-.256a.256.256 0 0 0-.258.255l-.008 2.32a1.088 1.089 24.24 0 0-.707 1.016z"
      );
}

export function lectureValveInteractivity(lectureBottleInUse) {
  // DOM elements
  const caf2ValveRight = document.getElementById("caf2-valve-right");
  const znseValveRight = document.getElementById("znse-valve-right");

  lectureBottleInUse
    ? caf2ValveRight.setAttribute(
        "d",
        "M571.026 430.577a1.089 1.088 0 0 0-.643 1.056l-2.119.946a.256.256 0 0 0-.13.339l.105.234c.058.13.21.188.34.13l2.118-.945a1.089 1.088 0 0 0 1.216.227 1.089 1.088 0 0 0 .643-1.057l2.119-.945a.256.256 0 0 0 .13-.34l-.105-.234a.256.256 0 0 0-.34-.13l-2.118.946a1.089 1.088 0 0 0-1.216-.227z"
      )
    : caf2ValveRight.setAttribute(
        "d",
        "M570.381 431.571a1.088 1.089 24 0 0 .704 1.017l.002 2.32c0 .143.115.257.257.257h.257a.256.256 0 0 0 .256-.257l-.002-2.32a1.088 1.089 24 0 0 .703-1.019 1.088 1.089 24 0 0-.704-1.017l-.002-2.32a.256.256 0 0 0-.257-.256h-.257a.256.256 0 0 0-.256.257l.002 2.32a1.088 1.089 24 0 0-.703 1.018z"
      );

  lectureBottleInUse
    ? znseValveRight.setAttribute(
        "d",
        "M571.026 430.577a1.089 1.088 0 0 0-.643 1.056l-2.119.946a.256.256 0 0 0-.13.339l.105.234c.058.13.21.188.34.13l2.118-.945a1.089 1.088 0 0 0 1.216.227 1.089 1.088 0 0 0 .643-1.057l2.119-.945a.256.256 0 0 0 .13-.34l-.105-.234a.256.256 0 0 0-.34-.13l-2.118.946a1.089 1.088 0 0 0-1.216-.227z"
      )
    : znseValveRight.setAttribute(
        "d",
        "M570.381 431.571a1.088 1.089 24 0 0 .704 1.017l.002 2.32c0 .143.115.257.257.257h.257a.256.256 0 0 0 .256-.257l-.002-2.32a1.088 1.089 24 0 0 .703-1.019 1.088 1.089 24 0 0-.704-1.017l-.002-2.32a.256.256 0 0 0-.257-.256h-.257a.256.256 0 0 0-.256.257l.002 2.32a1.088 1.089 24 0 0-.703 1.018z"
      );
}
