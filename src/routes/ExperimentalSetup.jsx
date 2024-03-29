import React from "react";

// components
import { SamplePlotly } from "../components/SamplePlotly";
import BackgroundPlotly from "../components/BackgroundPlotly";
import Spinner from "../components/Spinner";

// constants
import { PARAMETER_VALUE } from "../dictionaries/constants";

// dictionaries
import { molecules } from "../dictionaries/molecule";
import { resolutions } from "../dictionaries/resolution";
import { zeroFills } from "../dictionaries/zeroFill";

// inputs
import Wavenumber from "../components/inputs/Wavenumber";
import Pressure from "../components/inputs/Pressure";
import Scan from "../components/inputs/Scan";
import Molecule from "../components/inputs/Molecule";
import Resolution from "../components/inputs/Resolution";
import ZeroFill from "../components/inputs/ZeroFill";
import Source from "../components/inputs/Source";
import Beamsplitter from "../components/inputs/Beamsplitter";
import CellWindow from "../components/inputs/CellWindow";
import Detector from "../components/inputs/Detector";
import Medium from "../components/inputs/Medium";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/ExperimentalSetup.css";
import "../style/components/Button.css";

/**
 * Route that contains:
 * - User editable parameters
 * - Buttons to collect spectrum
 * - Progress spinner
 * - Background and Sample Plotlys
 */
export default function ExperimentalSetup() {
  const {
    beamsplitter,
    detector,
    medium,
    molecule,
    pressure,
    resolution,
    scan,
    source,
    waveMax,
    waveMin,
    window,
    zeroFill,
  } = useSelector((store) => store.parameter);

  const { error, errorText } = useSelector((store) => store.error);
  const { fetching, prefetch } = useSelector((store) => store.progress);
  const { devMode } = useSelector((store) => store.devMode);

  return (
    <div id="experimental-setup">
      {/* user input parameters */}
      <div id="form">
        <div className="exp-col">
          <div className="parameter">
            <div className="parameter">
              <Molecule dictionary={molecules} store={molecule} />
            </div>

            <div className="parameter">
              <Pressure store={pressure} min={0.0001} max={10} step={0.0001} />
            </div>

            <Wavenumber
              storeMin={waveMin}
              storeMax={waveMax}
              min={400}
              max={12500}
              step={10}
            />
          </div>

          <div className="parameter">
            <Scan store={scan} min={2} max={256} step={2} />
          </div>

          <div className="parameter">
            <Resolution dictionary={resolutions} store={resolution} />
          </div>

          <div className="parameter">
            <ZeroFill dictionary={zeroFills} store={zeroFill} />
          </div>
        </div>
        <div className="exp-col">
          <div className="parameter">
            <Source
              optionOneData={PARAMETER_VALUE.sourceGlobar}
              optionTwoData={PARAMETER_VALUE.sourceTungsten}
              store={source}
            />
          </div>

          <div className="parameter">
            <Beamsplitter
              optionOneData={PARAMETER_VALUE.beamsplitterZnSe}
              optionTwoData={PARAMETER_VALUE.beamsplitterCaF2}
              store={beamsplitter}
            />
          </div>

          <div className="parameter">
            <CellWindow
              optionOneData={PARAMETER_VALUE.cellWindowZnSe}
              optionTwoData={PARAMETER_VALUE.cellWindowCaF2}
              store={window}
            />
          </div>

          <div className="parameter">
            <Detector
              optionOneData={PARAMETER_VALUE.detectorMCT}
              optionTwoData={PARAMETER_VALUE.detectorInSb}
              store={detector}
            />
          </div>

          <div className="parameter">
            <Medium
              optionOneData={PARAMETER_VALUE.mediumVacuum}
              optionTwoData={PARAMETER_VALUE.mediumAir}
              store={medium}
            />
          </div>
        </div>
      </div>

      {/* error message, spinner, and graphs */}
      <div id="graph-and-error" className="exp-col">
        {prefetch && <Spinner variant="indeterminate" size={200} />}
        {error && devMode && (
          <div id="error">
            <p style={{ fontSize: 30 }}>{errorText}</p>
          </div>
        )}
        {!fetching && !error && devMode && <BackgroundPlotly />}
        {!fetching && !error && devMode && <SamplePlotly />}
      </div>
    </div>
  );
}
