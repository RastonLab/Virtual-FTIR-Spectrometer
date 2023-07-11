// SVG Imports
import apd from "../components/svgs/tooltip/apd.svg";
import aperture from "../components/svgs/tooltip/aperture-wheel.svg";
import bscaf2 from "../components/svgs/tooltip/beamsplitter-caf2.svg";
import bsznse from "../components/svgs/tooltip/beamsplitter-znse.svg";
import fcc from "../components/svgs/tooltip/fixed-corner-cube.svg";
import fm from "../components/svgs/tooltip/flat-mirror.svg";
import gauge from "../components/svgs/tooltip/pressure-gauge.svg";
import globar from "../components/svgs/tooltip/globar.svg";
import insb from "../components/svgs/tooltip/insb.svg";
import laser from "../components/svgs/tooltip/laser.svg";
import lecture from "../components/svgs/tooltip/lecture.svg";
import mct from "../components/svgs/tooltip/mct.svg";
import pm from "../components/svgs/tooltip/parabolic-mirror.webp";
import pmh from "../components/svgs/tooltip/parabolic-mirror-hole.webp";
import pump from "../components/svgs/tooltip/pump.svg";
import samplecaf2 from "../components/svgs/tooltip/sample-compartment-caf2.svg";
import sampleznse from "../components/svgs/tooltip/sample-compartment-znse.svg";
import tungsten from "../components/svgs/tooltip/tungsten.svg";

// Graph Imports
import AR_CaF2_graph from "./description_graphs/AR_CaF2_py.png";
import AR_ZnSe_graph from "./description_graphs/AR_ZnSe_py.png";
import blackbody_graph from "./description_graphs/Blackbody.png";
import CaF2_graph from "./description_graphs/CaF2_py.png";
import InSb_graph from "./description_graphs/InSb_py.png";
import MCT_graph from "./description_graphs/MCT_py.png";
import ZnSe_graph from "./description_graphs/ZnSe_py.png";

// Not in the toolTip Object because it is is used multiple times
const flatRotatableMirrorSource = {
  image: fm,
  title: "Flat Rotatable Mirror",
  text: "Gold plated flat rotatable mirror that reflects radiation from the infrared source to the parabolic mirror.",
};

const flatRotatableMirrorDetector = {
  image: fm,
  title: "Flat Rotatable Mirror",
  text: "Gold plated flat rotatable mirror that reflects radiation towards a detector.",
};

// Not in the toolTip Object because it is is used multiple times
const parabolicMirrorHole = {
  image: pmh,
  title: "Parabolic Mirror With Hole",
  text: "Gold plated parabolic mirror with centered hole for the laser beam to pass through.",
};

export const toolTips = {
  apd: {
    image: apd,
    title: "Avalanche Photodiode",
    text: "Semiconductor detector that utilizes a photoelectric-like effect in order to convert light into electricity. The output current (signal) is proportional to the laser power, which is low (high) when destructive (constructive) interference occurs. This signal is used to very accurately and precisely determine the movable corner-cube mirror’s displacement.",
  },
  "aperture-wheel": {
    image: aperture,
    title: "Aperture Wheel",
    text: "Black wheel with apertures (holes) of different sizes. Smaller apertures allow for higher resolution at a cost of increased attenuation (blocking) of radiation.",
  },

  // beamsplitters
  "beamsplitter-caf2": {
    image: bscaf2,
    title: "Beamsplitter (AR-CaF₂)",
    text: (
      <div>
        <p>
          AntiReflective (AR) coated calcium fluoride (CaF₂) beamsplitter, which
          has good transmittance and reflectance in the mid-to-near-infrared
          region. The following plot shows the transmittance spectrum of a 3 mm
          thick AR coated CaF2 beamsplitter.
        </p>
        <img
          src={AR_CaF2_graph}
          alt="a graph showing the AR-CaF2 transmittance spectrum"
        />
      </div>
    ),
  },
  "beamsplitter-znse": {
    image: bsznse,
    title: "Beamsplitter (AR-ZnSe)",
    text: (
      <div>
        <p>
          AntiReflective (AR) coated zinc selenide (ZnSe) beamsplitter, which
          has good transmittance and reflectance in the mid-infrared region. The
          following plot shows the transmittance spectrum of a 3 mm thick AR
          coated ZnSe beamsplitter.
        </p>
        <img
          src={AR_ZnSe_graph}
          alt="a graph showing the AR-ZnSe transmittance spectrum"
        />
      </div>
    ),
  },
  "detector-compartment": {
    title: "Detector Compartment",
    text: "This is the where the infrared radiation is detected. The detectors this FTIR is equipped with cover the mid (400-4000 cm-1) and near infrared (4000-12500 cm-1) ranges.",
  },

  "fixed-corner-cube": {
    image: fcc,
    title: "Fixed Corner Cube",
    text: "Gold coated corner-cube. This component reflects back a return beam that is parallel to the incident one.",
  },
  "fixed-mirror": {
    image: fm,
    title: "Fixed Mirror",
    text: "Gold coated flat mirror.",
  },

  // flat rotatable mirrors
  "flat-rotatable-mirror-insb": flatRotatableMirrorDetector,
  "flat-rotatable-mirror-globar": flatRotatableMirrorSource,
  "flat-rotatable-mirror-mct": flatRotatableMirrorDetector,
  "flat-rotatable-mirror-tungsten": flatRotatableMirrorSource,

  "info-cell-chamber": { title: "Cell Chamber" },
  "info-detector-chamber": { title: "Detector Chamber" },
  "info-source-chamber": { title: "Source Chamber" },

  "pressure-gauge": {
    image: gauge,
    title: "Manometer",
    text: "Pressure gauge (0-2 bar) with digital display.",
  },
  globar: {
    image: globar,
    title: "Globar",
    text: 'Globar heating element which produces radiation at a temperature of 1200 K. The word “globar” is a portmanteau word which blends together "glow" and "bar". Radiation is produced by passing a relatively large current through the material, which is silicon carbide (SiC).',
  },
  insb: {
    image: insb,
    title: "InSb",
    text: (
      <div>
        <p>
          Liquid nitrogen cooled Indium Antimonide (InSb) detector with a
          sapphire window. This is a semiconductor detector that utilizes a
          photoelectric-like effect in order to convert light into electricity.
          The output current is proportional to the infrared intensity. It is
          more sensitive than the MCT detector above ~1800 cm⁻¹. The following
          plot shows the InSb detector response spectrum.
        </p>
        <img
          src={InSb_graph}
          alt="a graph showing the InSb detector response spectrum"
        />
      </div>
    ),
  },
  "interferometer-compartment": {
    title: "Interferometer Compartment",
    text: (
      <div>
        <p>
          This compartment houses a Michelson interferometer which lies at the
          heart of the FTIR spectrometer. It consists of a beamsplitter, a
          movable mirror, and a stationary mirror. The beamsplitter divides both
          the laser beam and infrared beam into two. These beams reflect of a
          stationary mirror and movable mirror after which they recombine at the
          beamsplitter. When both mirrors are at the same distance from the
          beamsplitter there is zero path difference (ZPD) and the recombined
          beams constructively interfere (so the incoming and outgoing beams are
          the same). When the distances are different, there will be a
          wavelength dependent interference effect in the recombined beams.
        </p>
        <p>
          The interference is constructive when crests (troughs) in the
          electromagnetic wave overlap with crests (troughs). This occurs when
          the optical path difference (OPD) between the mirrors is equal to a
          multiple of the wavelength [OPD = n·]. Conversely, when the OPD is a
          multiple of half of the wavelength, destructive interference occurs
          [OPD = (n+1/2)·]. When the movable mirror is scanned, an oscillating
          signal appears in the interferogram (which is a plot of the signal
          against the OPD). For the laser beam, this oscillating signal is
          simply a sine wave, because it is a monochromatic source (there is no
          wavelength dependence). The infrared beam, on the other hand, consists
          of broadband radiation, and so the interference pattern that is
          detected is more complicated.
        </p>
        <p>
          The Fourier transform of an interferogram gives rise to a frequency
          domain spectrum. For the laser beam, the spectrum is a single peak at
          the resonant frequency of the laser (632.82 nm or 15802 cm-1). For the
          infrared beam, the spectrum typically consists of many peaks at the
          resonance frequency of the molecule. In this gas phase FTIR SIS, the
          resonance frequencies correspond to the spacing between quantized
          rotational-vibrational energy levels. Note that the HeNe laser allows
          for a very accurate and precise determination of the OPD, which
          results in precise determination of rotational-vibrational energy
          level spacings.
        </p>
      </div>
    ),
  },
  laser: {
    image: laser,
    title: "Laser",
    text: "Helium-neon (HeNe) reference laser that is used for calibration. This is a source of coherent, monochromatic light, with a primary wavelength of 632.816 nm.",
  },
  lecture: {
    image: lecture,
    title: "Lecture Bottle",
    text: "This lecture bottle contains gas that can be loaded into the sample cell.",
  },
  mct: {
    image: mct,
    title: "MCT",
    text: (
      <div>
        <p>
          Liquid nitrogen cooled Mercury-Cadmium-Telluride (MCT) detector with a
          zinc selenide (ZnSe) window. This is a semiconductor detector that
          utilizes a photoelectric-like effect in order to convert light into
          electricity. The output current is proportional to the infrared
          intensity. It is more sensitive than the InSb detector below ~1800
          cm⁻¹. The following plot shows the MCT detector response spectrum.
        </p>
        <img
          src={MCT_graph}
          alt="a graph showing the MCT detector response spectrum"
        />
      </div>
    ),
  },
  "movable-corner-cube": {
    image: fcc,
    title: "Movable Corner Cube",
    text: "Gold coated movable corner-cube. This component reflects back a return beam that is parallel to the incident beam and moves a distance (OPD/2) that is inversely proportional to the resolution.",
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
    text: "Rotary pump that is used to evacuate the sample cell. The exhaust gas flows into the fume hood exhaust system.",
  },

  // sample compartments
  "sample-compartment-base": {
    title: "Sample Compartment",
    text: "This compartment houses the sample cell within which the infrared radiation is focused. In a typical FTIR spectrometer, this gas cell can be switched out so that other sample types can be analyzed, such as KBr pellets.",
  },
  "sample-compartment-caf2": {
    image: samplecaf2,
    title: "Sample Cell (CaF₂)",
    text: (
      <div>
        <p>
          Pyrex sample cell that has two valves for controlling gas flow in
          (right) and out (left) from it. The medium (space inside) can either
          be “vacuum” or “air”. When vacuum is selected, the pressure of the
          selected molecule is equal to the total pressure inside the cell. When
          air is selected, the pressure of the selected molecule is equal to the
          partial pressure inside the cell (the rest is filled with air to a
          total pressure of 1 atm or 1.01325 bar). The uncoated salt windows on
          either end of the cell are calcium fluoride (CaF2), which has good
          transmittance in the mid-to-near-infrared region. The following plot
          shows the transmittance spectrum of one of the 2 mm thick CaF2 windows
          that this cell is equipped with.
        </p>
        <img
          src={CaF2_graph}
          alt="a graph of the CaF2 transmittance spectrum"
        />
      </div>
    ),
  },
  "sample-compartment-znse": {
    image: sampleznse,
    title: "Sample Cell (ZnSe)",
    text: (
      <div>
        <p>
          Pyrex sample cell that has two valves for controlling gas flow in
          (right) and out (left) from it. The medium (space inside) can either
          be “vacuum” or “air”. When vacuum is selected, the pressure of the
          selected molecule is equal to the total pressure inside the cell. When
          air is selected, the pressure of the selected molecule is equal to the
          partial pressure inside the cell (the rest is filled with air to a
          total pressure of 1 atm or 1.01325 bar). The uncoated salt windows on
          either end of the cell are zinc selenide (ZnSe), which has good
          transmittance in the mid-infrared region (above 500 cm⁻¹). The
          following plot shows the transmittance spectrum of one of the 2 mm
          thick ZnSe windows that this cell is equipped with.
        </p>
        <img
          src={ZnSe_graph}
          alt="a graph showing the ZnSe transmittance spectrum"
        />
      </div>
    ),
  },
  "source-compartment": {
    title: "Source Compartment",
    text: (
      <div>
        <p>
          This is where infrared radiation is generated. The energy density (B)
          emitted from both a globar and tungsten source are well approximated
          by Planck's law, which is given by
          <blockquote>ADD MATH HERE</blockquote>
          where h is Planck’s constant, c is the speed of light, ṽ is the
          wavenumber, kB is Boltzmann’s constant, and T is the temperature. The
          following plot shows normalized blackbody emission spectra at 1200 K
          (globar; blue) and 3400 K (tungsten; red) that was calculated using
          the above formula.
        </p>
        <img
          src={blackbody_graph}
          alt="a graph showing the blackbody emission spectra"
        />
      </div>
    ),
  },
  tungsten: {
    image: tungsten,
    title: "Tungsten",
    text: "Tungsten lamp which produces radiation at a temperature of 3100 K. Its spectrum is well approximated by Planck's law. Radiation is produced by passing a current through a tungsten (W) filament, which is in an evacuated bulb.",
  },
};
