import React from "react";

// components
import { SamplePlotly } from "../components/SamplePlotly";
import BackgroundPlotly from "../components/BackgroundPlotly";
import Fetch from "../components/Fetch";

// dictionaries
import { molecules } from "../dictionaries/moleculeDict";
import { resolutions } from "../dictionaries/resolutionDict";
import { zeroFills } from "../dictionaries/zeroFillDict";

// functions
import * as fetchURL from "../functions/fetchURL";

// inputs
import Dropdown from "../components/inputs/Dropdown";
import DualInputSlider from "../components/inputs/DualInputSlider";
import SingleInputSlider from "../components/inputs/SingleInputSlider";
import Switch from "../components/inputs/Switch";
import TextFieldUnit from "../components/inputs/TextFieldUnit";

// redux
import { useSelector } from "react-redux";

// style
import "../style/routes/ExperimentalSetup.css";
import "../style/components/Button.css";
import Spinner from "../components/Spinner";

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
  const { spinner } = useSelector((store) => store.spinner);

  return (
    <div id="experimental-setup">
      <div id="form">
        <div className="exp-col">
          <div className="parameter">
            <DualInputSlider
              formLabel={"Wavenumber range (cm⁻¹)"}
              storeMin={waveMin}
              storeMax={waveMax}
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
              max={256}
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
        <div className="exp-col">
          <div className="parameter">
            <Switch
              formLabel={"Source"}
              optionOneLabel={"Globar"}
              optionOneData={1200}
              optionTwoLabel={"Tungsten"}
              optionTwoData={3400}
              store={source}
            />
          </div>

          <div className="parameter">
            <Switch
              formLabel={"Beamsplitter"}
              optionOneLabel={"AR-ZnSe"}
              optionOneData={"AR_ZnSe"}
              optionTwoLabel={"AR-CaF₂"}
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
        {spinner && 
          <Spinner variant="indeterminate" size={200} />
        }
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
