import React from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// redux slices
import {
  activateError,
  deactivateError,
  updateErrorText,
} from "../features/error/errorSlice";
import {
  activateProgress,
  deactivateProgress,
} from "../features/progress/progressSlice";
import { updateBackgroundData } from "../features/backgroundData/backgroundDataSlice";
import { updateSpectrumData } from "../features/spectrumData/spectrumDataSlice";

// this component reaches out to the flask server with user parameters and receives X and Y coordinates to graph
export default function Fetch({ type, params, fetchURL, buttonText }) {
  const dispatch = useDispatch();
  const { progress } = useSelector((store) => store.progress);

  function checkParams(params) {
    // check if wavenumbers are correct
    if (params.waveMin < 400 || params.waveMin > 12500) {
      return "min wavenumber is out of range (400 - 12500)";
    } else if (params.waveMax < 400 || params.waveMax > 12500) {
      return "max wavenumber is out of range (400 - 12500)";
    } else if (params.waveMin > params.waveMax) {
      return "min wavenumber is greater than max wavenumber";
    } else if (params.waveMin === params.waveMax) {
      return "wavenumbers are the same";
    }

    // check if the molecule is correct
    if (
      (!"C2H2",
      "C2H4",
      "C2H6",
      "C2N2",
      "C4H2",
      "CF4",
      "CH3Br",
      "CH3Cl",
      "CH3CN",
      "CH3OH",
      "CH4",
      "ClO",
      "ClONO2",
      "CO",
      "CO2",
      "COCl2",
      "COF2",
      "CS",
      "H2",
      "H2CO",
      "H2O",
      "H2O2",
      "H2S",
      "HBr",
      "HC3N",
      "HCl",
      "HCN",
      "HCOOH",
      "HF",
      "HI",
      "HNO3",
      "HO2",
      "HOBr",
      "HOCl",
      "N2",
      "N2O",
      "NH3",
      "NO",
      "NO+",
      "NO2",
      "O",
      "O2",
      "O3",
      "OCS",
      "OH",
      "PH3",
      "SF6",
      "SO2",
      "SO3".includes(params.molecule))
    ) {
      return "molecule is not valid";
    }

    // check if the medium is correct
    if (params.medium !== "Vacuum" && params.medium !== "Air") {
      return "medium is not valid (Vacuum or Air)";
    }

    // check if the pressure is correct
    if (params.pressure < 0.0001 || params.pressure > 10) {
      return "pressure is out of range (0.0001 - 10)";
    }

    // check if the resolution is correct
    if (
      ![1, 0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625].includes(
        params.resolution
      )
    ) {
      return "resolution is not valid (1, 0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625)";
    }

    // check if the number of scans is correct
    if (params.numScan < 1 || params.numScan > 30000) {
      return "number of scans is out of range (1 - 30000)";
    }

    // check if the zero fill is correct
    if (![0, 1, 2].includes(params.zeroFill)) {
      return "zero fill is not valid (0, 1, 2)";
    }

    // check if source is correct
    if (params.source !== 1700 && params.source !== 3100) {
      return "source is not valid (globar = 1700 or tungsten = 3100)";
    }

    // check if beamsplitter is correct
    if (
      params.beamsplitter !== "AR_CaF2" &&
      params.beamsplitter !== "AR_ZnSe"
    ) {
      return "beamsplitter is not valid (AR_CaF2 or AR_ZnSe)";
    }

    // check if cell window is correct
    if (params.window !== "ZnSe" && params.window !== "CaF2") {
      return "cell window is not valid (ZnSe or CaF2)";
    }

    // check if detector is correct
    if (params.detector !== "InSb" && params.detector !== "MCT") {
      return "  detector is not valid (InSb or MCT)";
    }

    return false;
  }

  const fetchLinode = async () => {
    // store the current user parameters
    // TODO
    // dispatch(storeParams(params));

    // remove any errors (if existing) and start a progress spinner
    dispatch(deactivateError());
    dispatch(activateProgress());

    // validate the user parameters
    let errorMessage = checkParams(params);

    // error occurred in checkParams, display error message to user
    if (errorMessage) {
      dispatch(deactivateProgress());
      dispatch(activateError());
      dispatch(updateErrorText(String(errorMessage)));
    }
    // checkParam succeeded, send request to api
    else {
      let mole = 1;
      let pressure = params.pressure;

      if (params.airVac) {
        const air_pressure = 1.01325;
        mole = params.pressure / air_pressure;
        pressure = air_pressure;
      }

      try {
        const response = await fetch(fetchURL, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            beamsplitter: params.beamsplitter,
            detector: params.detector,
            medium: params.medium,
            mole: mole,
            molecule: params.molecule,
            pressure: params.pressure,
            resolution: params.resolution,
            scan: params.scan,
            source: params.source,
            waveMax: params.waveMax,
            waveMin: params.waveMin,
            window: params.window,
            zeroFill: params.zeroFill,
          }),
        });

        const data = await response.json();
        // connection was successful
        if (response.ok) {
          // determine where to store received data
          if (data.success) {
            switch (type) {
              case "spectrum":
                // TODO
                dispatch(updateSpectrumData(data));
                // dispatch(setFlag(e.Processed));
                break;
              case "background":
                // TODO
                dispatch(updateBackgroundData(data));
                // dispatch(setFlag(FlagOps.Background));
                break;
              default:
                console.log("not processed or background");
                break;
            }
            dispatch(deactivateProgress());
          }
          // display error message
          else {
            console.log("not success");
            dispatch(deactivateProgress());
            dispatch(activateError());
            dispatch(updateErrorText(String(data.text)));
          }
        }
        // connection was unsuccessful
        else {
          dispatch(deactivateProgress());
          dispatch(activateError());
          dispatch(updateErrorText(String(data.text)));
        }
      } catch (error) {
        // error occurred when reaching out to server
        let errorMessage = null;

        switch (error.message) {
          case "Failed to fetch":
            errorMessage = "client is unable to reach server";
            break;
          default:
            errorMessage = "unhandled error";
            console.log(error);
            break;
        }
        dispatch(deactivateProgress());
        dispatch(activateError());
        dispatch(updateErrorText(errorMessage));
      }
    }
  };

  return (
    <button id="button" disabled={progress} onClick={fetchLinode}>
      {buttonText}
    </button>
  );
}
