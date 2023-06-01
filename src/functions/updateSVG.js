export default function updateSVG(source, detector) {
  // tungsten (1700) or globar (3100)
  if (source === 1700) {
    document.getElementById("tungsten-laser").style.display = "";
    document.getElementById("globar-laser").style.display = "none";
  } else if (source === 3100) {
    document.getElementById("globar-laser").style.display = "";
    document.getElementById("tungsten-laser").style.display = "none";
  } else {
    console.log("error finding source: " + source);
  }

  // mct or insb
  if (detector === "MCT") {
    document.getElementById("mct-laser").style.display = "";
    document.getElementById("insb-laser").style.display = "none";
  } else if (detector === "InSb") {
    document.getElementById("insb-laser").style.display = "";
    document.getElementById("mct-laser").style.display = "none";
  } else {
    console.log("error finding detector: " + detector);
  }
}
