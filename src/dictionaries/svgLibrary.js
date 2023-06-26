import apd from "../components/svgs/tooltip/apd.svg";
import aperture from "../components/svgs/tooltip/aperture-wheel.svg";
import bscaf2 from "../components/svgs/tooltip/beamsplitter-caf2.svg";
import bsznse from "../components/svgs/tooltip/beamsplitter-znse.svg";
import fcc from "../components/svgs/tooltip/fixed-corner-cube.svg";
import fm from "../components/svgs/tooltip/fixed-mirror.svg";
import gauge from "../components/svgs/tooltip/pressure-gauge.svg";
import globar from "../components/svgs/tooltip/globar.svg";
import insb from "../components/svgs/tooltip/insb.svg";
import laser from "../components/svgs/tooltip/laser.svg";
import lecture from "../components/svgs/tooltip/lecture.svg";
import mct from "../components/svgs/tooltip/mct.svg";
import pm from "../components/svgs/tooltip/parabolic-mirror.svg";
import pmh from "../components/svgs/tooltip/parabolic-mirror-hole.svg";
import pump from "../components/svgs/tooltip/pump.svg";
import samplecaf2 from "../components/svgs/tooltip/sample-compartment-caf2.svg";
import sampleznse from "../components/svgs/tooltip/sample-compartment-znse.svg";
import tungsten from "../components/svgs/tooltip/tungsten.svg";

const flatRotatableMirror = {
  image: fm,
  title: "Flat Rotatable Mirror",
  text: "Gold plated flat rotatable mirror that reflects radiation from the source to the parabolic mirror.",
};

const parabolicMirrorHole = {
  image: pmh,
  title: "Parabolic Mirror With Hole",
  text: "Gold plated parabolic mirror with centered hole for the laser beam to pass through.",
};

export const toolTips = {
  apd: {
    image: apd,
    title: "Avalanche Photodiode",
    text: "This is a semiconductor detector that utilizes a photoelectric-like effect in order to convert light into electricity. The output current is proportional to the laser power, which is low (high) when destructive (constructive) interference occurs.",
  },
  "aperture-wheel": {
    image: aperture,
    title: "Aperture Wheel",
    text: "This is a black wheel with apertures (holes) of different sizes. Smaller apertures allow for higher resolution at a cost of increased attenuation (blocking) of radiation.",
  },

  // beamsplitters
  "beamsplitter-caf2": {
    image: bscaf2,
    title: "Beamsplitter (AR_CaF₂)",
    text: "AntiReflective (AR) coated calcium fluoride (CaF₂) beamsplitter, which has good transmittance and reflectance in the mid-to-near-infrared region.",
  },
  "beamsplitter-znse": {
    image: bsznse,
    title: "Beamsplitter (AR_ZnSe)",
    text: "AntiReflective (AR) coated zinc selenide (ZnSe) beamsplitter, which has good transmittance and reflectance in the far-to-mid-infrared region.",
  },

  "fixed-corner-cube": {
    image: fcc,
    title: "Fixed Corner Cube",
    text: "Gold coated corner-cube. This component reflects back a return beam that is parallel to the incident beam.",
  },
  "fixed-mirror": {
    image: fm,
    title: "Fixed Mirror",
    text: "Gold coated flat mirror.",
  },

  // flat rotatable mirrors
  "flat-rotatable-mirror-insb": flatRotatableMirror,
  "flat-rotatable-mirror-globar": flatRotatableMirror,
  "flat-rotatable-mirror-mct": flatRotatableMirror,
  "flat-rotatable-mirror-tungsten": flatRotatableMirror,

  "pressure-gauge": {
    image: gauge,
    title: "Manometer",
    text: "Digital pressure gauge (0-2 bar).",
  },
  globar: {
    image: globar,
    title: "Globar",
    text: 'Globar heating element which produces radiation at a temperature of 1700 K. Its spectrum is very well approximated by Planck\'s law. Radiation is produced by passing a relatively large current through the material, which is silicon carbide (SiC). Note, the word “globar” is a portmanteau word which blends together "glow" and "bar".',
  },
  insb: {
    image: insb,
    title: "InSb",
    text: "Liquid nitrogen cooled Indium Antimonide (InSb) detector with a sapphire window. This is a semiconductor detector that utilizes a photoelectric-like effect in order to convert light into electricity. The output current is proportional to the infrared intensity. It is more sensitive than MCT in the mid- and near-infrared regions (above ~1500 cm⁻¹).",
  },
  laser: {
    image: laser,
    title: "Laser",
    text: "Helium-neon (HeNe) laser. This is a source of coherent, monochromatic light, with a wavelength of 632.8 nm.",
  },
  lecture: {
    image: lecture,
    title: "Lecture Bottle",
    text: "This lecture bottle contains gas that can be loaded into the sample cell.",
  },
  mct: {
    image: mct,
    title: "MCT",
    text: "Liquid nitrogen cooled Mercury-Cadmium-Telluride (MCT) detector with a sapphire window. This is a semiconductor detector that utilizes a photoelectric-like effect in order to convert light into electricity. The output current is proportional to the infrared intensity. It is more sensitive than InSb in the far-infrared region (below ~1500 cm⁻¹).",
  },
  "movable-corner-cube": {
    image: fcc,
    title: "Movable Corner Cube",
    text: "Gold coated movable corner-cube. This component reflects back a return beam that is parallel to the incident beam and moves a distance that is inversely proportional to the resolution.",
  },

  // parabolic mirrors
  "parabolic-mirror-1": {
    image: pm,
    title: "Parabolic Mirror",
    text: "Gold plated parabolic mirror that focuses reflected radiation onto the aperture wheel.",
  },
  "parabolic-mirror-2": {
    image: pm,
    title: "Parabolic Mirror",
    text: "Gold plated parabolic mirror that focuses reflected radiation onto the detector.",
  },

  // parabolic mirrors with hole
  "parabolic-mirror-hole-1": parabolicMirrorHole,
  "parabolic-mirror-hole-2": parabolicMirrorHole,

  pump: {
    image: pump,
    title: "Rotary Pump",
    text: "The rotary pump is used to evacuate the sample cell. The exhaust gas flows to the rooftop.",
  },

  // sample compartments
  "sample-compartment-caf2": {
    image: samplecaf2,
    title: "Sample Compartment (CaF₂)",
    text: "This is a pyrex sample cell that has two valves for controlling gas flow into (right) and out from (right) it. The uncoated salt windows on either end are calcium fluoride (CaF2), which has good transmittance in the mid-to-near-infrared region.",
  },
  "sample-compartment-znse": {
    image: sampleznse,
    title: "Sample Compartment (ZnSe)",
    text: "This is a pyrex sample cell that has two valves for controlling gas flow into (right) and out from (right) it. The uncoated salt windows on either end are zinc selenide (ZnSe), which has good transmittance in the far-to-mid-infrared region (in particular, below 1100 cm⁻¹).",
  },

  tungsten: {
    image: tungsten,
    title: "Tungsten",
    text: "Tungsten lamp which produces radiation at a temperature of 3100 K. Its spectrum is well approximated by Planck's law. Radiation is produced by passing a current through a tungsten (W) filament, which is in an evacuated bulb.",
  },
};
