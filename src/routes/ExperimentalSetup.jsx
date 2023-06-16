import React from "react";

// components
import Fetch from "../components/Fetch";
import { ProcessedPlotly } from "../components/ProcessedPlotly";
import BackgroundPlotly from "../components/BackgroundPlotly";

// inputs
import Switch from "../components/inputs/Switch";
import Molecule from "../components/inputs/Molecule";
import Pressure from "../components/inputs/Pressure";
import Resolution from "../components/inputs/Resolution";
import Scan from "../components/inputs/Scan";
import Wavenumber from "../components/inputs/Wavenumber";
import ZeroFill from "../components/inputs/ZeroFill";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/ExperimentalSetup.css";

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
  const { progress } = useSelector((store) => store.progress);
  const { error, errorText } = useSelector((store) => store.error);

  return (
    <div id="experimental-setup">
      <div id="form">
        <div className="col">
          <div className="parameter">
            <Wavenumber />
          </div>

          <div className="parameter">
            <Pressure />
          </div>

          <div className="parameter">
            <Scan />
          </div>

          <div className="parameter">
            <Molecule />
          </div>

          <div className="parameter">
            <Resolution />
          </div>

          <div className="parameter">
            <ZeroFill />
          </div>
        </div>
        <div className="col">
          <div className="parameter">
            <Switch
              formLabel={"Source"}
              optionOneLabel={"Globar"}
              optionOneData={1700}
              optionTwoLabel={"Tungsten"}
              optionTwoData={3100}
              store={source}
            />
          </div>

          <div className="parameter">
            <Switch
              formLabel={"Beamsplitter"}
              optionOneLabel={"AR_ZnSe"}
              optionOneData={"AR_ZnSe"}
              optionTwoLabel={"AR_CaF2"}
              optionTwoData={"AR_CaF2"}
              store={beamsplitter}
            />
          </div>

          <div className="parameter">
            <Switch
              formLabel={"Cell Window"}
              optionOneLabel={"ZnSe"}
              optionOneData={"ZnSe"}
              optionTwoLabel={"CaF2"}
              optionTwoData={"CaF2"}
              store={window}
            />
          </div>

          <div className="parameter">
            <Switch
              formLabel={"Detector"}
              optionOneLabel={"MCT"}
              optionOneData={"MCT"}
              optionTwoLabel={"InSb"}
              optionTwoData={"InSb"}
              store={detector}
            />
          </div>

          <div className="parameter">
            <Switch
              formLabel={"Medium"}
              optionOneLabel={"Vacuum"}
              optionOneData={"Vacuum"}
              optionTwoLabel={"Air"}
              optionTwoData={"Air"}
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
              // fetchURL={"http://localhost:5000/background"}
              fetchURL={"https://api.ftir.rastonlab.org/background"}
              buttonText={"Collect Background Sample"}
            />
            <Fetch
              type="spectrum"
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
              // fetchURL={"http://localhost:5000/spectrum"}
              fetchURL={"https://api.ftir.rastonlab.org/spectrum"}
              buttonText="Collect Processed Spectrum"
            />
          </div>
        </div>
      </div>
      <div id="graph-and-error" className="col">
        {progress && <div id="spinner" />}
        {error && (
          <div id="error">
            <p style={{ fontSize: 30 }}>{errorText}</p>
          </div>
        )}
        {!progress && !error && <BackgroundPlotly />}
        {!progress && !error && <ProcessedPlotly />}
      </div>
    </div>
  );
}
