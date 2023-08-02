// dictionaries
import { PARAMETER_VALUE } from "../dictionaries/constants";

/**
 * Function that moves the moveable corner cube and associated rays/lasers
 *
 * @param {number} time - The time (in seconds) that it takes for the animation to move in one direction.
 */
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

    mcc.setAttribute("transform", "translate(1130, 0)");

    laser.setAttribute(
      "d",
      "M1406.494 991.284v10H3190.73v209.254H344.494v10H3200.73V991.284Z"
    );

    rayTop.setAttribute(
      "d",
      "m3233.15 953.417 89.492 94.391H1447.236l-95.49-94.391z"
    );

    rayMiddle.setAttribute("transform", "translate (1130, 0)");

    rayBottom.setAttribute(
      "d",
      "m3326.56 1164.195-99.733 94.356H582.917l-89.932-94.356z"
    );

    setTimeout(() => {
      mcc.setAttribute("transform", "translate(0, 0)");

      laser.setAttribute(
        "d",
        "M1406.494 991.284v10h651.235v209.254H344.494v10H2067.73V991.284z"
      );

      rayTop.setAttribute(
        "d",
        "m2026.826 953.417 93.734 94.391h-673.324l-95.49-94.391z"
      );

      rayMiddle.setAttribute("transform", "translate (0, 0)");

      rayBottom.setAttribute(
        "d",
        "m2120.56 1164.195-93.733 94.356H582.917l-89.932-94.356z"
      );
    }, time * 1000);
  }
}

/**
 * Function that changes the visibility of the beamsplitter based on user set parameters
 *
 * @param {string} store - The current value selected by the user.
 */
export function beamsplitterInteractivity(store) {
  // DOM elements
  const caf2 = document.getElementById("beamsplitter-caf2");
  const znse = document.getElementById("beamsplitter-znse");

  // constant parameter values
  const caf2Value = PARAMETER_VALUE.beamsplitterCaF2;
  const znseValue = PARAMETER_VALUE.beamsplitterZnSe;

  // ternary used to show/hide beamsplitter in the Main SVG
  caf2.style.display = store === caf2Value ? "inline" : "none";
  znse.style.display = store === znseValue ? "inline" : "none";
}

/**
 * Function that changes the visibility of the detector mirrors and beams based on user set parameters
 *
 * @param {string} store - The current value selected by the user.
 */
export function detectorInteractivity(store) {
  // DOM elements
  const insbMirror = document.getElementById("flat-rotatable-mirror-insb");
  const mctMirror = document.getElementById("flat-rotatable-mirror-mct");
  const insbBeam = document.getElementById("beam-insb");
  const mctBeam = document.getElementById("beam-mct");

  // constant parameter values
  const insbValue = PARAMETER_VALUE.detectorInSb;
  const mctValue = PARAMETER_VALUE.detectorMCT;

  // ternary used to show/hide detector mirrors in the Main SVG
  insbMirror.style.display = store === insbValue ? "inline" : "none";
  insbBeam.style.display = store === insbValue ? "inline" : "none";

  // ternary used to show/hide detector beams in the Main SVG
  mctMirror.style.display = store === mctValue ? "inline" : "none";
  mctBeam.style.display = store === mctValue ? "inline" : "none";
}

/**
 * Function that changes the visibility of the source mirrors and beams based on user set parameters
 *
 * @param {number} store - The current value selected by the user.
 */
export function sourceInteractivity(store) {
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
  globarMirror.style.display = store === globarValue ? "inline" : "none";
  globarBeam.style.display = store === globarValue ? "inline" : "none";

  // ternary used to show/hide source beams in the Main SVG
  tungstenMirror.style.display = store === tungstenValue ? "inline" : "none";
  tungstenBeam.style.display = store === tungstenValue ? "inline" : "none";
}

/**
 * Function that changes the visibility of the cell window based on user set parameters
 *
 * @param {string} store - The current value selected by the user.
 */
export function cellWindowInteractivity(store) {
  // DOM elements
  const caf2 = document.getElementById("sample-cell-caf2");
  const znse = document.getElementById("sample-cell-znse");

  // constant parameter values
  const caf2Value = PARAMETER_VALUE.cellWindowCaF2;
  const znseValue = PARAMETER_VALUE.cellWindowZnSe;

  // ternary used to show/hide cell window in the Main SVG
  caf2.style.display = store === caf2Value ? "inline" : "none";
  znse.style.display = store === znseValue ? "inline" : "none";
}

/**
 * Function that changes the text of the SVG text elements in the readout panel
 *
 * @param {string} molecule - The current value selected by the user.
 * @param {object} opd - A key-value pair table used in conjunction with the resolution.
 * @param {number} resolution - The current value selected by the user.
 * @param {number} scan - The current value selected by the user.
 * @param {number} waveMax - The current upper bound selected by the user.
 * @param {number} waveMin - The current lower bound selected by the user.
 */
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
  opdText.textContent = opd[resolution].value;
  scanText.textContent = scan;
  rangeText.textContent = `${waveMin} - ${waveMax}`;
  resolutionText.textContent = resolution;

  // set text in the lecture bottle
  moleculeText.textContent = molecule;
}

/**
 * Function that changes the orientation of the valve directed to the pump
 *
 * @param {boolean} isAir - The value used to determine if the user has selected air.
 */
export function pumpValveInteractivity(isAir) {
  // DOM elements
  const caf2ValveLeft = document.getElementById("caf2-valve-left");
  const znseValveLeft = document.getElementById("znse-valve-left");

  isAir
    ? caf2ValveLeft.setAttribute(
        "d",
        "M548.806 430.577a1.089 1.088 0 0 0-.643 1.056l-2.119.946a.256.256 0 0 0-.13.339l.105.234c.058.13.21.188.34.13l2.118-.945a1.089 1.088 0 0 0 1.216.227 1.089 1.088 0 0 0 .643-1.057l2.119-.945a.256.256 0 0 0 .13-.34l-.105-.234a.256.256 0 0 0-.34-.13l-2.118.946a1.089 1.088 0 0 0-1.216-.227z"
      )
    : caf2ValveLeft.setAttribute(
        "d",
        "M548.161 431.567a1.088 1.089 24.24 0 0 .7 1.02l-.008 2.32c0 .142.114.257.256.257l.257.001a.256.256 0 0 0 .257-.256l.008-2.32a1.088 1.089 24.24 0 0 .707-1.015 1.088 1.089 24.24 0 0-.7-1.02l.008-2.32a.256.256 0 0 0-.256-.258h-.256a.256.256 0 0 0-.258.255l-.008 2.32a1.088 1.089 24.24 0 0-.707 1.016z"
      );

  isAir
    ? znseValveLeft.setAttribute(
        "d",
        "M548.806 430.577a1.089 1.088 0 0 0-.643 1.056l-2.119.946a.256.256 0 0 0-.13.339l.105.234c.058.13.21.188.34.13l2.118-.945a1.089 1.088 0 0 0 1.216.227 1.089 1.088 0 0 0 .643-1.057l2.119-.945a.256.256 0 0 0 .13-.34l-.105-.234a.256.256 0 0 0-.34-.13l-2.118.946a1.089 1.088 0 0 0-1.216-.227z"
      )
    : znseValveLeft.setAttribute(
        "d",
        "M548.161 431.567a1.088 1.089 24.24 0 0 .7 1.02l-.008 2.32c0 .142.114.257.256.257l.257.001a.256.256 0 0 0 .257-.256l.008-2.32a1.088 1.089 24.24 0 0 .707-1.015 1.088 1.089 24.24 0 0-.7-1.02l.008-2.32a.256.256 0 0 0-.256-.258h-.256a.256.256 0 0 0-.258.255l-.008 2.32a1.088 1.089 24.24 0 0-.707 1.016z"
      );
}

/**
 * Function that changes the orientation of the valve directed to the lecture bottle
 *
 * @param {boolean} lectureBottleInUse - The boolean value of if the spectrum collection is sample
 */
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

/**
 * Function that changes the visibility of the text on the display based on when the user generates data
 *
 * @param {object} background - Holds the X and Y coordinates for the background.
 * @param {object} sample - Holds the X and Y coordinates for the sample.
 */
export function displayInteractivity(background, sample) {
  // DOM elements
  const backgroundText = document.getElementById("ready-background");
  const sampleText = document.getElementById("ready-sample");

  // ternary used to show/hide display text in the Main SVG
  backgroundText.style.display = background ? "inline" : "none";
  sampleText.style.display = sample ? "inline" : "none";
}

/**
 * Function that changes the visibility and text of the distance marker for the moveable corner cube
 *
 * @param {boolean} progress - The value of if a scan is currently running. This value is reused to not create repeat code. Progress is only true when a scan is occurring, and this is the only time we want the distance text to appear.
 * @param {number} distance - The distance in centimeters that the mirror would physically move on a real spectrometer.
 */
export function distanceInteractivity(progress, distance) {
  // DOM elements
  const distanceText = document.getElementById("distance-value");
  const distanceMarker = document.getElementById("distance-marker");

  // ternary used to show/hide distance marker and value
  distanceText.style.display = progress ? "inline" : "none";
  distanceMarker.style.display = progress ? "inline" : "none";

  // set text in the readout panel
  distanceText.textContent = `${distance} cm`;
}

/**
 * Function that changes the visibility and animates "air" molecules in the sample cell
 *
 * @param {boolean} isAir - The value used to determine if the user has selected air.
 * @param {number} time - The number of milliseconds it takes for an animation to loop.
 */
export function bubblesAnimation(isAir, time) {
  // DOM elements
  const bubbleOne = document.getElementById("bubble-1");
  const bubbleTwo = document.getElementById("bubble-2");
  const bubbleThree = document.getElementById("bubble-3");
  const bubbleFour = document.getElementById("bubble-4");

  // ternary used to show/hide "air" bubbles
  bubbleOne.style.display = isAir ? "inline" : "none";
  bubbleTwo.style.display = isAir ? "inline" : "none";
  bubbleThree.style.display = isAir ? "inline" : "none";
  bubbleFour.style.display = isAir ? "inline" : "none";

  if (isAir) {
    bubbleOne.animate(
      [
        // keyframes
        { transform: "translate(0px, 0px)" },
        { transform: "translate(200px, -140px)" },
        { transform: "translate(400px, 0px)" },
        { transform: "translate(600px, -140px)" },
        { transform: "translate(800px, 0px)" },
        { transform: "translate(860px, -50px)" },
        { transform: "translate(800px, -140px)" },
        { transform: "translate(600px, 0px)" },
        { transform: "translate(400px, -140px)" },
        { transform: "translate(200px, 0px)" },
        { transform: "translate(0px, -140px)" },
        { transform: "translate(0px, 0px)" },
      ],
      {
        // timing options
        duration: time,
        iterations: Infinity,
      }
    );

    bubbleTwo.animate(
      [
        // keyframes
        { transform: "translate(0px, 0px)" },
        { transform: "translate(-200px, 140px)" },
        { transform: "translate(-400px, 0px)" },
        { transform: "translate(-600px, 140px)" },
        { transform: "translate(-800px, 0px)" },
        { transform: "translate(-860px, 50px)" },
        { transform: "translate(-800px, 140px)" },
        { transform: "translate(-600px, 0px)" },
        { transform: "translate(-400px, 140px)" },
        { transform: "translate(-200px, 0px)" },
        { transform: "translate(0px, 140px)" },
        { transform: "translate(0px, 0px)" },
      ],
      {
        // timing options
        duration: time,
        iterations: Infinity,
      }
    );

    bubbleThree.animate(
      [
        // keyframes
        { transform: "translate(0px, 0px)" },
        { transform: "translate(-100px, -140px)" },
        { transform: "translate(-200px, 0px)" },
        { transform: "translate(-300px, -50px)" },
        { transform: "translate(-400px, -140px)" },
        { transform: "translate(-500px, 0px)" },
        { transform: "translate(-600px, -140px)" },
        { transform: "translate(-700px, 0px)" },
        { transform: "translate(-800px, -140px)" },
        { transform: "translate(0px, 0px)" },
      ],
      {
        // timing options
        duration: time,
        iterations: Infinity,
      }
    );

    bubbleFour.animate(
      [
        // keyframes
        { transform: "translate(0px, 0px)" },
        { transform: "translate(850px, 30px)" },
        { transform: "translate(0px, 60px)" },
        { transform: "translate(850px, 90px)" },
        { transform: "translate(0px, 120px)" },
        { transform: "translate(850px, 75px)" },
        { transform: "translate(0px, 0px)" },
      ],
      {
        // timing options
        duration: time,
        iterations: Infinity,
      }
    );
  }
}
