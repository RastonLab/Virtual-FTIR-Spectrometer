// dictionaries
import { PARAMETER_VALUE, RED_BALL_KEYFRAMES, BLUE_BALL_KEYFRAMES } from "../dictionaries/constants";

// functions
import calculateBalls from "../functions/calculateBalls";

/**
 * Function that moves the moveable corner cube and associated rays/lasers
 *
 * Examples used and information from: https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
 *
 * @param {number} cycles - The number of times the mirror moves out and back. One cycle is equivalent to two scans.
 * @param {number} time - The time (in seconds) that it takes for the animation to complete one cycle. One cycle is equivalent to two scans.
 */
export function animateCornerCube(cycles, time) {
  const mcc = document.getElementById("movable-corner-cube");
  const rayTop = document.getElementById("ray-top");
  const rayMiddle = document.getElementById("ray-middle");
  const rayBottom = document.getElementById("ray-bottom");
  const laser = document.getElementById("rect6675");

  const easing = "linear";

  mcc.animate(
    [
      // keyframes
      { transform: "translate(0px, 0px)" },
      { transform: "translate(1130px, 0px)" },
      { transform: "translate(0px, 0px)" },
    ],
    {
      // timing options
      duration: time * 1000,
      iterations: cycles,
      easing: easing,
    }
  );

  laser.animate(
    [
      // keyframes
      {
        d: "path('M1406.494 991.284v10h651.235v209.254H344.494v10H2067.73V991.284z')",
      },
      {
        d: "path('M1406.494 991.284v10H3190.73v209.254H344.494v10H3200.73V991.284Z')",
      },
      {
        d: "path('M1406.494 991.284v10h651.235v209.254H344.494v10H2067.73V991.284z')",
      },
    ],
    {
      // timing options
      duration: time * 1000,
      iterations: cycles,
      easing: easing,
    }
  );

  rayTop.animate(
    [
      // keyframes
      {
        d: "path('m2026.826 953.417 93.734 94.391h-673.324l-95.49-94.391z')",
      },
      {
        d: "path('m3233.15 953.417 89.492 94.391H1447.236l-95.49-94.391z')",
      },
      {
        d: "path('m2026.826 953.417 93.734 94.391h-673.324l-95.49-94.391z')",
      },
    ],
    {
      // timing options
      duration: time * 1000,
      iterations: cycles,
      easing: easing,
    }
  );

  rayMiddle.animate(
    [
      // keyframes
      { transform: "translate(0px, 0px)" },
      { transform: "translate(1130px, 0px)" },
      { transform: "translate(0px, 0px)" },
    ],
    {
      // timing options
      duration: time * 1000,
      iterations: cycles,
      easing: easing,
    }
  );

  rayBottom.animate(
    [
      // keyframes
      {
        d: "path('m2120.56 1164.195-93.733 94.356H582.917l-89.932-94.356z')",
      },
      {
        d: "path('m3326.56 1164.195-99.733 94.356H582.917l-89.932-94.356z')",
      },
      {
        d: "path('m2120.56 1164.195-93.733 94.356H582.917l-89.932-94.356z')",
      },
    ],
    {
      // timing options
      duration: time * 1000,
      iterations: cycles,
      easing: easing,
    }
  );
}

/**
 * Function that stops the current animation of the moveable corner cube and reset its location
 */
export function stopCornerCube() {
  const mcc = document.getElementById("movable-corner-cube");
  const rayTop = document.getElementById("ray-top");
  const rayMiddle = document.getElementById("ray-middle");
  const rayBottom = document.getElementById("ray-bottom");
  const laser = document.getElementById("rect6675");

  mcc.getAnimations().forEach((animation) => animation.cancel());
  laser.getAnimations().forEach((animation) => animation.cancel());
  rayTop.getAnimations().forEach((animation) => animation.cancel());
  rayMiddle.getAnimations().forEach((animation) => animation.cancel());
  rayBottom.getAnimations().forEach((animation) => animation.cancel());

  mcc.style.transform = "translate(0px, 0px)";

  laser.setAttribute(
    "d",
    "M1406.494 991.284v10h651.235v209.254H344.494v10H2067.73V991.284z"
  );

  rayTop.setAttribute(
    "d",
    "m2026.826 953.417 93.734 94.391h-673.324l-95.49-94.391z"
  );

  rayMiddle.style.transform = "translate(0px, 0px)";

  rayBottom.setAttribute(
    "d",
    "m2120.56 1164.195-93.733 94.356H582.917l-89.932-94.356z"
  );
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
  pressure,
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
  const pressureText = document.getElementById("pressure-value");

  // set text in the readout panel
  opdText.textContent = opd[resolution].value;
  scanText.textContent = scan;
  rangeText.textContent = `${waveMin} - ${waveMax}`;
  resolutionText.textContent = resolution;

  // set text in the lecture bottle
  moleculeText.textContent = molecule;

  // set text in manometer
  pressureText.textContent = pressure;
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
 * Function that changes the visibility and animates molecules in the sample cell
 *
 * @param {boolean} isAir - The value used to determine if the user has selected air as the medium.
 * @param {boolean} isMolecule - The value used to determine if the user has selected a sample spectrum.
 * @param {number} pressure - The value entered by the user. 
 */
export function bubblesAnimation(isAir, isMolecule, pressure) {
  // loop through each blue ball
  for (let i = 1; i <= 15; i++) {
    const element = document.getElementById(`blue-bubble-${i}`);

    if (i < calculateBalls(pressure) && isAir) {
      element.style.display = "inline";

      element.animate(BLUE_BALL_KEYFRAMES[i], {
        duration: Math.random() * (7000 - 2000) + 2000,
        iterations: Infinity,
      });

    } else {
      element.style.display = "none"
    }
  }

  // loop through each red ball
  for (let i = 1; i <= 31; i++) {
    const element = document.getElementById(`red-bubble-${i}`);

    if (i < calculateBalls(pressure) && isMolecule) {
      element.style.display = "inline";

      element.animate(RED_BALL_KEYFRAMES[i], {
        duration: Math.random() * (7000 - 2000) + 2000,
        iterations: Infinity,
      });

    } else {
      element.style.display = "none"
    }
  }
}
