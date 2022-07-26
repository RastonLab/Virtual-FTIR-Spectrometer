import apd from "../components/svgs/tooltip/apd.svg";
import wheel from "../components/svgs/tooltip/aperture-wheel.svg";
import detector from "../components/svgs/tooltip/detector.svg";
import fcc from "../components/svgs/tooltip/fixed-corner-cube.svg";
import fm from "../components/svgs/tooltip/fixed-mirror.svg";
import frm from "../components/svgs/tooltip/flat-rotatable-mirror-1.svg";
import cdfrm from "../components/svgs/tooltip/flat-rotatable-mirror-2.svg";
import dcfrm from "../components/svgs/tooltip/flat-rotatable-mirror-3.svg";
import laser from "../components/svgs/tooltip/laser.svg";
import lecture from "../components/svgs/tooltip/lecture.svg";
import mcc from "../components/svgs/tooltip/movable-corner-cube.svg";
import pm from "../components/svgs/tooltip/parabolic-mirror.svg";
import pmh from "../components/svgs/tooltip/parabolic-mirror-hole.svg";
import pump from "../components/svgs/tooltip/pump.svg";
import sample from "../components/svgs/tooltip/sample-compartment.svg";
import source from "../components/svgs/tooltip/source.svg";

export const imgSource = {
  apd: apd,
  "aperture-wheel": wheel,
  "fixed-corner-cube": fcc,
  "fixed-mirror": fm,
  "flat-rotatable-mirror-1": frm,
  "flat-rotatable-mirror-3": cdfrm,
  "flat-rotatable-mirror-2": dcfrm,
  globar: source,
  insb: detector,
  laser: laser,
  lecture: lecture,
  mct: detector,
  "movable-corner-cube": mcc,
  "parabolic-mirror": pm,
  "parabolic-mirror-hole-1": pmh,
  "parabolic-mirror-hole-2": pmh,
  pump: pump,
  "sample-compartment": sample,
  tungsten: source,
};

export const toolTips = {
  apd: { title: "Avalanche Photodiode", text: "" },
  "aperture-wheel": {
    title: "Aperture Wheel",
    text: "This is a black wheel with apertures (holes) of different sizes. Smaller apertures allow for higher resolution at a cost of increased attenuation (blocking) of radiation.",
  },
  "fixed-corner-cube": {
    title: "Fixed Corner Cube",
    text: "Gold coated corner-cube. This component reflects back a return beam that is parallel to the incident beam.",
  },
  "fixed-mirror": { title: "Fixed Mirror", text: "Gold coated flat mirror." },
  "flat-rotatable-mirror-1": {
    title: "Flat Rotatable Mirror",
    text: "Gold plated flat rotatable mirror that reflects radiation from the source to the parabolic mirror.",
  },
  "flat-rotatable-mirror-2": {
    title: "Flat Rotatable Mirror",
    text: "Gold plated flat rotatable mirror that reflects radiation from the source to the parabolic mirror.",
  },
  "flat-rotatable-mirror-3": {
    title: "Flat Rotatable Mirror",
    text: "Gold plated flat rotatable mirror that reflects radiation from the source to the parabolic mirror.",
  },
  globar: {
    title: "Globar",
    text: "Globar heating element which produces radiation at a temperature of 1700 K. Its spectrum is very well approximated by Planck's law. Radiation is produced by passing a relatively large current through the material, which is silicon carbide (SiC). Note, the word “globar” is a portmanteau word which blends together “glow” and “bar”.",
  },
  insb: {
    title: "INSB",
    text: "Helium-neon (HeNe) laser. This is a source of coherent, monochromatic light, with a wavelength of 632.8 nm.",
  },
  laser: {
    title: "Laser",
    text: "Helium-neon (HeNe) laser. This is a source of coherent, monochromatic light, with a wavelength of 632.8 nm.",
  },
  lecture: { title: "Lecture Bottle", text: "" },
  mct: {
    title: "MCT",
    text: "Liquid nitrogen cooled Mercury-Cadmium-Telluride (MCT) detector with a sapphire window. This is a semiconductor detector that utilizes a photoelectric-like effect in order to convert light into electricity. The output current is proportional to the infrared intensity. It is more sensitive than InSb in the far-infrared region (below ~1500 cm-1).",
  },
  "movable-corner-cube": {
    title: "Movable Corner Cube",
    text: "Gold coated movable corner-cube. This component reflects back a return beam that is parallel to the incident beam and moves a distance that is inversely proportional to the resolution.",
  },
  "parabolic-mirror": {
    title: "Parabolic Mirror",
    text: "Gold plated parabolic mirror that focuses reflected radiation onto the detector.",
  },
  "parabolic-mirror-hole-1": {
    title: "Parabolic Mirror With Hole",
    text: "Gold plated parabolic mirror with centered hole for the laser beam to pass through.",
  },
  "parabolic-mirror-hole-2": {
    title: "Parabolic Mirror With Hole",
    text: "Gold plated parabolic mirror with centered hole for the laser beam to pass through.",
  },
  pump: { title: "Rotary Pump", text: "" },
  "sample-compartment": {
    title: "Sample Compartment",
    text: "This is a pyrex sample cell that has two valves for controlling gas flow into (right) and out from (right) it. There are uncoated salt windows on either end which can be either zinc selenide (ZnSe), which has good transmittance in the far-to-mid-infrared region (in particular, below 1100 cm-1), or calcium fluoride (CaF2), which has good transmittance in the mid-to-near-infrared region.",
  },
  tungsten: {
    title: "Tungsten",
    text: "Tungsten lamp which produces radiation at a temperature of 3100 K. Its spectrum is well approximated by Planck’s law. Radiation is produced by passing a current through a tungsten (W) filament, which is in an evacuated bulb.",
  },
};
