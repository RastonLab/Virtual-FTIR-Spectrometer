export function animateCornerCube() {
  const mcc = document.getElementById("movable-corner-cube");
  const rayTop = document.getElementById("ray-top");
  const rayMiddle = document.getElementById("ray-middle");
  const rayBottom = document.getElementById("ray-bottom");
  const laser = document.getElementById("rect6675");

  if (mcc) {
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

    mcc.addEventListener(
      "transitionend",
      () => {
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
      },
      { once: true }
    );
  }
}

export function beamsplitterInteractivity(beamsplitter, caf2Value, znseValue) {
  const caf2 = document.getElementById("beamsplitter-caf2");
  const znse = document.getElementById("beamsplitter-znse");

  // ternary used to show/hide beamsplitter in the Main SVG
  beamsplitter === caf2Value
    ? (caf2.style.display = "inline")
    : (caf2.style.display = "none");
  beamsplitter === znseValue
    ? (znse.style.display = "inline")
    : (znse.style.display = "none");
}

export function detectorInteractivity(detector, insbValue, mctValue) {
  const insbMirror = document.getElementById("flat-rotatable-mirror-insb");
  const mctMirror = document.getElementById("flat-rotatable-mirror-mct");
  const insbBeam = document.getElementById("beam-insb");
  const mctBeam = document.getElementById("beam-mct");

  // ternary used to show/hide detector mirrors in the Main SVG
  detector === insbValue
    ? (insbMirror.style.display = "inline")
    : (insbMirror.style.display = "none");
  detector === insbValue
    ? (insbBeam.style.display = "inline")
    : (insbBeam.style.display = "none");

  // ternary used to show/hide detector beams in the Main SVG
  detector === mctValue
    ? (mctMirror.style.display = "inline")
    : (mctMirror.style.display = "none");
  detector === mctValue
    ? (mctBeam.style.display = "inline")
    : (mctBeam.style.display = "none");
}

export function sourceInteractivity(source, globarValue, tungstenValue) {
  const globarMirror = document.getElementById("flat-rotatable-mirror-globar");
  const tungstenMirror = document.getElementById(
    "flat-rotatable-mirror-tungsten"
  );
  const globarBeam = document.getElementById("beam-globar");
  const tungstenBeam = document.getElementById("beam-tungsten");

  // ternary used to show/hide source mirrors in the Main SVG
  source === globarValue
    ? (globarMirror.style.display = "inline")
    : (globarMirror.style.display = "none");
  source === globarValue
    ? (globarBeam.style.display = "inline")
    : (globarBeam.style.display = "none");

  // ternary used to show/hide source beams in the Main SVG
  source === tungstenValue
    ? (tungstenMirror.style.display = "inline")
    : (tungstenMirror.style.display = "none");
  source === tungstenValue
    ? (tungstenBeam.style.display = "inline")
    : (tungstenBeam.style.display = "none");
}

export function cellWindowInteractivity(window, caf2Value, znseValue) {
  const caf2 = document.getElementById("sample-cell-caf2");
  const znse = document.getElementById("sample-cell-znse");

  // ternary used to show/hide cell window in the Main SVG
  window === caf2Value
    ? (caf2.style.display = "inline")
    : (caf2.style.display = "none");
  window === znseValue
    ? (znse.style.display = "inline")
    : (znse.style.display = "none");
}

export function textInteractivity(
  molecule,
  opd,
  resolution,
  scan,
  waveMax,
  waveMin
) {
  const opdText = document.getElementById("opd-value");
  const scanText = document.getElementById("scan-value");
  const rangeText = document.getElementById("range-value");
  const resolutionText = document.getElementById("resolution-value");
  const moleculeText = document.getElementById("molecule-value");

  // set text in the readout panel
  opdText.textContent = opd[resolution] * scan;
  scanText.textContent = scan;
  rangeText.textContent = `${waveMin} - ${waveMax}`;
  resolutionText.textContent = resolution;

  // set text in the lecture bottle
  moleculeText.textContent = molecule;
}
