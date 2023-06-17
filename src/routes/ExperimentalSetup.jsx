import React from "react";

// components
import Fetch from "../components/Fetch";
import { ProcessedPlotly } from "../components/ProcessedPlotly";
import BackgroundPlotly from "../components/BackgroundPlotly";

// dictionaries
import { molecules } from "../dictionaries/moleculeDict";
import { resolutions } from "../dictionaries/resolutionDict";
import { zeroFills } from "../dictionaries/zeroFillDict";

// inputs
import Dropdown from "../components/inputs/Dropdown";
import Switch from "../components/inputs/Switch";
import TextFieldUnit from "../components/inputs/TextFieldUnit";
import SingleInputSlider from "../components/inputs/SingleInputSlider";
import DualInputSlider from "../components/inputs/DualInputSlider";

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
            <DualInputSlider
              formLabel={"Wavenumber range"}
              storeMin={waveMin}
              storeMax={waveMax}
              unit={"cm⁻¹"}
              min={400}
              max={12500}
              step={10}
            />
          </div>

          <div className="parameter">
            <TextFieldUnit
              formLabel={"Pressure"}
              store={pressure}
              placeholder={"Enter pressure"}
              unit={"Bar"}
              min={0.0001}
              max={10}
              step={0.0001}
            />
          </div>

          <div className="parameter">
            <SingleInputSlider
              formLabel={"Scans"}
              store={scan}
              min={1}
              max={10000}
              step={10}
            />
          </div>

          <div className="parameter">
            <Dropdown
              dictionary={molecules}
              formLabel={"Molecule"}
              store={molecule}
            />
          </div>

          <div className="parameter">
            <Dropdown
              dictionary={resolutions}
              formLabel={"Resolution"}
              store={resolution}
            />
          </div>

          <div className="parameter">
            <Dropdown
              dictionary={zeroFills}
              formLabel={"Zero Fill"}
              store={zeroFill}
            />
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
              optionTwoLabel={"AR_CaF₂"}
              optionTwoData={"AR_CaF2"}
              store={beamsplitter}
            />
          </div>

          <div className="parameter">
            <Switch
              formLabel={"Cell Window"}
              optionOneLabel={"ZnSe"}
              optionOneData={"ZnSe"}
              optionTwoLabel={"CaF₂"}
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
