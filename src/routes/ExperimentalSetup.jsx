import React from "react";

// components
import { SamplePlotly } from "../components/SamplePlotly";
import BackgroundPlotly from "../components/BackgroundPlotly";
import Fetch from "../components/Fetch";
import Spinner from "../components/Spinner";

// dictionaries
import { molecules } from "../dictionaries/molecule";
import { resolutions } from "../dictionaries/resolution";
import { zeroFills } from "../dictionaries/zeroFill";

// functions
import * as fetchURL from "../functions/fetchURL";

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

  // progress and error values
  const { error, errorText } = useSelector((store) => store.error);
  const { progress } = useSelector((store) => store.progress);
  const { spinner } = useSelector((store) => store.spinner);

  return (
    <div id="experimental-setup">
      <div id="form">
        <div className="exp-col">
          <div className="parameter">
            <Wavenumber
              storeMin={waveMin}
              storeMax={waveMax}
              min={400}
              max={12500}
              step={10}
            />
          </div>

          <div className="parameter">
            <Pressure store={pressure} min={0.0001} max={10} step={0.0001} />
          </div>

          <div className="parameter">
            <Scan store={scan} min={1} max={256} step={10} />
          </div>

          <div className="parameter">
            <Molecule dictionary={molecules} store={molecule} />
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
              optionOneData={1200} // globar
              optionTwoData={3400} // tungsten
              store={source}
            />
          </div>

          <div className="parameter">
            <Beamsplitter
              optionOneData={"AR_ZnSe"} // ar_znse
              optionTwoData={"AR_CaF2"} // ar_caf2
              store={beamsplitter}
            />
          </div>

          <div className="parameter">
            <CellWindow
              optionOneData={"ZnSe"} // znse
              optionTwoData={"CaF2"} // caf2
              store={window}
            />
          </div>

          <div className="parameter">
            <Detector
              optionOneData={"MCT"} // mct
              optionTwoData={"InSb"} // insb
              store={detector}
            />
          </div>

          <div className="parameter">
            <Medium
              optionOneData={"Vacuum"} // vacuum
              optionTwoData={"Air"} // air
              store={medium}
            />
          </div>

          <div className="fetch-zone">
            <Fetch
              type="background"
              params={{
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
              }}
              fetchURL={fetchURL.BACKGROUND}
              buttonText={"Collect Background Spectrum"}
              buttonStyle={"button"}
            />
            <Fetch
              type="sample"
              params={{
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
              }}
              fetchURL={fetchURL.SAMPLE}
              buttonText="Collect Sample Spectrum"
              buttonStyle={"button"}
            />
          </div>
        </div>
      </div>
      <div id="graph-and-error" className="exp-col">
        {spinner && <Spinner variant="indeterminate" size={200} />}
        {error && (
          <div id="error">
            <p style={{ fontSize: 30 }}>{errorText}</p>
          </div>
        )}
        {!progress && !error && <BackgroundPlotly />}
        {!progress && !error && <SamplePlotly />}
      </div>
    </div>
  );
}
