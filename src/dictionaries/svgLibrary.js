// svg imports
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
import samplecaf2 from "../components/svgs/tooltip/sample-cell-caf2.svg";
import sampleznse from "../components/svgs/tooltip/sample-cell-znse.svg";
import tungsten from "../components/svgs/tooltip/tungsten.svg";

// graph imports
import AR_CaF2_graph from "./description_graphs/AR_CaF2_py.png";
import AR_ZnSe_graph from "./description_graphs/AR_ZnSe_py.png";
import blackbody_graph from "./description_graphs/Blackbody.png";
import CaF2_graph from "./description_graphs/CaF2_py.png";
import InSb_graph from "./description_graphs/InSb_py.png";
import MCT_graph from "./description_graphs/MCT_py.png";
import sourceCompartmentGraph from "./description_graphs/source-compartment-formula.png";
import ZnSe_graph from "./description_graphs/ZnSe_py.png";

// not in the tooltip object because it is used multiple times
const flatRotatableMirrorSource = {
  text: (
    <div className="popup-tooltip">
      <h1>Flat Rotatable Mirror</h1>

      <img className="tooltip-svg" src={fm} alt="Flat Rotatable Mirror SVG" />

      <p>
        Gold plated flat rotatable mirror that reflects radiation from the
        infrared source to the parabolic mirror.
      </p>
    </div>
  ),
};

// not in the tooltip object because it is used multiple times
const flatRotatableMirrorDetector = {
  text: (
    <div className="popup-tooltip">
      <h1>Flat Rotatable Mirror</h1>

      <img className="tooltip-svg" src={fm} alt="Flat Rotatable Mirror SVG" />

      <p>
        Gold plated flat rotatable mirror that reflects radiation towards a
        detector.
      </p>
    </div>
  ),
};

// not in the tooltip object because it is used multiple times
const parabolicMirrorHole = {
  text: (
    <div className="popup-tooltip">
      <h1>Parabolic Mirror With Hole</h1>

      <img
        className="tooltip-svg"
        src={pmh}
        alt="Parabolic Mirror With Hole SVG"
      />

      <p>
        Gold plated parabolic mirror with centered hole for the laser beam to
        pass through.
      </p>
    </div>
  ),
};

export const toolTips = {
  apd: {
    text: (
      <div className="popup-tooltip">
        <h1>Avalanche Photodiode</h1>

        <img className="tooltip-svg" src={apd} alt="Avalanche Photodiode SVG" />

        <p>
          Semiconductor detector that utilizes a photoelectric-like effect in
          order to convert light into electricity. The output current (signal)
          is proportional to the laser power, which is low (high) when
          destructive (constructive) interference occurs. This signal is used to
          very accurately and precisely determine the movable corner-cube
          mirror's displacement.
        </p>
      </div>
    ),
  },

  aperture: {
    text: (
      <div className="popup-tooltip">
        <h1>Aperture Wheel</h1>

        <img className="tooltip-svg" src={aperture} alt="Aperture Wheel SVG" />

        <p>
          Black wheel with apertures (holes) of different sizes. Smaller
          apertures allow for higher resolution at a cost of increased
          attenuation (blocking) of radiation.
        </p>
      </div>
    ),
  },

  "beamsplitter-caf2": {
    text: (
      <div className="popup-tooltip">
        <h1>
          Beamsplitter (AR-CaF<sub>2</sub>)
        </h1>

        <img
          className="tooltip-svg"
          src={bscaf2}
          alt="Beamsplitter (AR-CaF2) SVG"
        />

        <p>
          AntiReflective (AR) coated calcium fluoride (CaF<sub>2</sub>)
          beamsplitter, which has good transmittance and reflectance in the
          mid-to-near-infrared region. The following plot shows the
          transmittance spectrum of a 3 mm thick AR coated CaF<sub>2</sub>{" "}
          beamsplitter.
        </p>
        <img
          className="tooltip-graph"
          src={AR_CaF2_graph}
          alt="a graph showing the AR-CaF2 transmittance spectrum"
        />
      </div>
    ),
  },

  "beamsplitter-znse": {
    text: (
      <div className="popup-tooltip">
        <h1>Beamsplitter (AR-ZnSe)</h1>

        <img
          className="tooltip-svg"
          src={bsznse}
          alt="Beamsplitter (AR-ZnSe) SVG"
        />

        <p>
          AntiReflective (AR) coated zinc selenide (ZnSe) beamsplitter, which
          has good transmittance and reflectance in the mid-infrared region. The
          following plot shows the transmittance spectrum of a 3 mm thick AR
          coated ZnSe beamsplitter.
        </p>
        <img
          className="tooltip-graph"
          src={AR_ZnSe_graph}
          alt="a graph showing the AR-ZnSe transmittance spectrum"
        />
      </div>
    ),
  },

  "detector-compartment": {
    text: (
      <div className="popup-tooltip">
        <h1>Detector Compartment</h1>

        <p>
          This is the where the infrared radiation is detected. The detectors
          this FTIR is equipped with cover the mid (400-4000 cm<sup>-1</sup>)
          and near infrared (4000-12500 cm<sup>-1</sup>) ranges.
        </p>
      </div>
    ),
  },

  "fixed-corner-cube": {
    text: (
      <div className="popup-tooltip">
        <h1>Fixed Corner Cube</h1>

        <img className="tooltip-svg" src={fcc} alt="Fixed Corner Cube SVG" />

        <p>
          Gold coated corner-cube. This component reflects back a return beam
          that is parallel to the incident one.
        </p>
      </div>
    ),
  },

  "fixed-mirror": {
    text: (
      <div className="popup-tooltip">
        <h1>Fixed Mirror</h1>

        <img className="tooltip-svg" src={fm} alt="Fixed Mirror SVG" />

        <p>Gold coated flat mirror.</p>
      </div>
    ),
  },

  "flat-rotatable-mirror-insb": flatRotatableMirrorDetector,
  "flat-rotatable-mirror-globar": flatRotatableMirrorSource,
  "flat-rotatable-mirror-mct": flatRotatableMirrorDetector,
  "flat-rotatable-mirror-tungsten": flatRotatableMirrorSource,

  globar: {
    text: (
      <div className="popup-tooltip">
        <h1>Globar</h1>

        <img className="tooltip-svg" src={globar} alt="Globar SVG" />

        <p>
          Globar heating element which produces radiation at a temperature of
          1200 K. The word “globar” is a portmanteau word which blends together
          "glow" and "bar". Radiation is produced by passing a relatively large
          current through the material, which is silicon carbide (SiC).
        </p>
      </div>
    ),
  },

  insb: {
    text: (
      <div className="popup-tooltip">
        <h1>InSb</h1>

        <img className="tooltip-svg" src={insb} alt="InSb SVG" />

        <p>
          Liquid nitrogen cooled Indium Antimonide (InSb) detector with a
          sapphire window. This is a semiconductor detector that utilizes a
          photoelectric-like effect in order to convert light into electricity.
          The output current is proportional to the infrared intensity. It is
          more sensitive than the MCT detector above ~1800 cm<sup>-1</sup>. The
          following plot shows the InSb detector response spectrum.
        </p>

        <img
          className="tooltip-graph"
          src={InSb_graph}
          alt="a graph showing the InSb detector response spectrum"
        />
      </div>
    ),
  },

  "interferometer-compartment": {
    text: (
      <div className="popup-tooltip">
        <h1>Interferometer Compartment</h1>

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
          multiple of the wavelength [OPD = n·λ]. Conversely, when the OPD is a
          multiple of half of the wavelength, destructive interference occurs
          [OPD = (n+1/2)·λ]. When the movable mirror is scanned, an oscillating
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
          the resonant frequency of the laser (632.82 nm or 15802 cm
          <sup>-1</sup>). For the infrared beam, the spectrum typically consists
          of many peaks at the resonance frequency of the molecule. In this gas
          phase FTIR SIS, the resonance frequencies correspond to the spacing
          between quantized rotational-vibrational energy levels. Note that the
          HeNe laser allows for a very accurate and precise determination of the
          OPD, which results in precise determination of rotational-vibrational
          energy level spacings.
        </p>
      </div>
    ),
  },

  laser: {
    text: (
      <div className="popup-tooltip">
        <h1>Laser</h1>

        <img className="tooltip-svg" src={laser} alt="Laser SVG" />

        <p>
          Helium-neon (HeNe) reference laser that is used for calibration. This
          is a source of coherent, monochromatic light, with a primary
          wavelength of 632.816 nm.
        </p>
      </div>
    ),
  },

  lecture: {
    text: (
      <div className="popup-tooltip">
        <h1>Lecture Bottle</h1>

        <img className="tooltip-svg" src={lecture} alt="Lecture Bottle SVG" />

        <p>
          This lecture bottle contains gas that can be loaded into the sample
          cell.
        </p>
      </div>
    ),
  },

  manometer: {
    text: (
      <div className="popup-tooltip">
        <h1>Manometer</h1>

        <img className="tooltip-svg" src={gauge} alt="Manometer SVG" />

        <p>Pressure gauge (0-2 bar) with digital display.</p>
      </div>
    ),
  },

  mct: {
    text: (
      <div className="popup-tooltip">
        <h1>MCT</h1>

        <img className="tooltip-svg" src={mct} alt="MCT SVG" />

        <p>
          Liquid nitrogen cooled Mercury-Cadmium-Telluride (MCT) detector with a
          zinc selenide (ZnSe) window. This is a semiconductor detector that
          utilizes a photoelectric-like effect in order to convert light into
          electricity. The output current is proportional to the infrared
          intensity. It is more sensitive than the InSb detector below ~1800 cm
          <sup>-1</sup>. The following plot shows the MCT detector response
          spectrum.
        </p>

        <img
          className="tooltip-graph"
          src={MCT_graph}
          alt="a graph showing the MCT detector response spectrum"
        />
      </div>
    ),
  },

  "movable-corner-cube": {
    text: (
      <div className="popup-tooltip">
        <h1>Movable Corner Cube</h1>

        <img className="tooltip-svg" src={fcc} alt="Movable Corner Cube SVG" />

        <p>
          Gold coated movable corner-cube. This component reflects back a return
          beam that is parallel to the incident beam and moves a distance
          (OPD/2) that is inversely proportional to the resolution.
        </p>
      </div>
    ),
  },

  "parabolic-mirror-1": {
    text: (
      <div className="popup-tooltip">
        <h1>Parabolic Mirror</h1>

        <img className="tooltip-svg" src={pm} alt="Parabolic Mirror SVG" />

        <p>
          Gold plated parabolic mirror that focuses reflected radiation into the
          aperture wheel.
        </p>
      </div>
    ),
  },

  "parabolic-mirror-2": {
    text: (
      <div className="popup-tooltip">
        <h1>Parabolic Mirror</h1>

        <img className="tooltip-svg" src={pm} alt="Parabolic Mirror SVG" />

        <p>
          Gold plated parabolic mirror that focuses reflected radiation onto the
          detector.
        </p>
      </div>
    ),
  },

  "parabolic-mirror-hole-1": parabolicMirrorHole,
  "parabolic-mirror-hole-2": parabolicMirrorHole,

  pump: {
    text: (
      <div className="popup-tooltip">
        <h1>Rotary Pump</h1>

        <img className="tooltip-svg" src={pump} alt="Rotary Pump SVG" />

        <p>
          Rotary pump that is used to evacuate the sample cell. The exhaust gas
          flows into the fume hood exhaust system.
        </p>
      </div>
    ),
  },

  "sample-cell-caf2": {
    text: (
      <div className="popup-tooltip">
        <h1>
          Sample Cell (CaF<sub>2</sub>)
        </h1>

        <img
          className="tooltip-svg"
          src={samplecaf2}
          alt="Sample Cell (CaF2) SVG"
        />

        <p>
          Pyrex sample cell that has two valves for controlling gas flow in
          (right) and out (left) from it. The medium (space inside) can either
          be “vacuum” or “air”. When vacuum is selected, the pressure of the
          selected molecule is equal to the <i>total</i> pressure inside the
          cell. When air is selected, the pressure of the selected molecule is
          equal to the partial pressure inside the cell (the rest is filled with
          air to a total pressure of 1 atm or 1.01325 bar). The uncoated salt
          windows on either end of the cell are calcium fluoride (CaF
          <sub>2</sub>), which has good transmittance in the
          mid-to-near-infrared region. The following plot shows the
          transmittance spectrum of one of the 2 mm thick CaF<sub>2</sub>{" "}
          windows that this cell is equipped with.
        </p>

        <img
          className="tooltip-graph"
          src={CaF2_graph}
          alt="a graph of the CaF2 transmittance spectrum"
        />
      </div>
    ),
  },

  "sample-cell-znse": {
    text: (
      <div className="popup-tooltip">
        <h1>Sample Cell (ZnSe)</h1>

        <img
          className="tooltip-svg"
          src={sampleznse}
          alt="Sample Cell (ZnSe) SVG"
        />

        <p>
          Pyrex sample cell that has two valves for controlling gas flow in
          (right) and out (left) from it. The medium (space inside) can either
          be “vacuum” or “air”. When vacuum is selected, the pressure of the
          selected molecule is equal to the <i>total</i> pressure inside the
          cell. When air is selected, the pressure of the selected molecule is
          equal to the partial pressure inside the cell (the rest is filled with
          air to a total pressure of 1 atm or 1.01325 bar). The uncoated salt
          windows on either end of the cell are zinc selenide (ZnSe), which has
          good transmittance in the mid-infrared region (above 500 cm
          <sup>-1</sup>). The following plot shows the transmittance spectrum of
          one of the 2 mm thick ZnSe windows that this cell is equipped with.
        </p>

        <img
          className="tooltip-graph"
          src={ZnSe_graph}
          alt="a graph showing the ZnSe transmittance spectrum"
        />
      </div>
    ),
  },

  "sample-compartment": {
    text: (
      <div className="popup-tooltip">
        <h1>Sample Compartment</h1>

        <p>
          This compartment houses the sample cell within which the infrared
          radiation is focused. In a typical FTIR spectrometer, this gas cell
          can be switched out so that other sample types can be analyzed, such
          as KBr pellets.
        </p>
      </div>
    ),
  },

  "source-compartment": {
    text: (
      <div className="popup-tooltip">
        <h1>Source Compartment</h1>

        <p>
          This is where infrared radiation is generated. The energy density (
          <i>B</i>) emitted from both a globar and tungsten source are well
          approximated by Planck's law, which is given by
        </p>

        <img
          className="tooltip-planck"
          src={sourceCompartmentGraph}
          alt="Planck's Law formula"
        />

        <p>
          where <i>h</i> is Planck's constant, <i>c</i> is the speed of light,{" "}
          <i>ṽ</i> is the wavenumber,{" "}
          <i>
            k<sub>B</sub>
          </i>{" "}
          is Boltzmann's constant, and <i>T</i> is the temperature. The
          following plot shows normalized blackbody emission spectra at 1200 K
          (globar; blue) and 3400 K (tungsten; red) that was calculated using
          the above formula.
        </p>

        <img
          className="tooltip-graph"
          src={blackbody_graph}
          alt="a graph showing the blackbody emission spectra"
        />
      </div>
    ),
  },

  tungsten: {
    text: (
      <div className="popup-tooltip">
        <h1>Tungsten</h1>

        <img className="tooltip-svg" src={tungsten} alt="Tungsten SVG" />

        <p>
          Tungsten lamp which produces radiation at a temperature of 3400 K.
          Radiation is produced by passing a current through a tungsten (W)
          filament which is in an evacuated quartz bulb. The bulb contains trace
          amounts of bromine to keep the inner quartz surface clean.
        </p>
      </div>
    ),
  },
};
