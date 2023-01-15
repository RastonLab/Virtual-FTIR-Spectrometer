import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProgress,
  setError,
  storeSpectrumData,
  storeBackgroundData,
  storeParams,
  setFlag,
} from "../redux/actions";
import { FlagOps } from "../redux/store";

// this component reaches out to the flask server with user parameters and receives X and Y coordinates to graph
export default function Fetch({ type, params, fetchURL, buttonText, isAir }) {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress);

  function checkParams(params) {
    // check if wavenumbers are correct
    if (params.minWave < 400 || params.minWave > 12500) {
      return "min wavenumber is out of range (400 - 12500)";
    } else if (params.maxWave < 400 || params.maxWave > 12500) {
      return "max wavenumber is out of range (400 - 12500)";
    } else if (params.minWave > params.maxWave) {
      return "min wavenumber is greater than max wavenumber";
    } else if (params.minWave === params.maxWave) {
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

    // check if the pressure is correct
    if (params.pressure < 0.0001 || params.pressure > 10) {
      return "pressure is out of range (0.0001 - 10)";
    }

    // check if the resolution is correct
    if (![1, 0.5, 0.25, 0.125, 0.0625].includes(params.resolution)) {
      return "resolution is not valid (1, 0.5, 0.25, 0.125, 0.0625)";
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
    if (params.cellWindow !== "ZnSe" && params.cellWindow !== "CaF2") {
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
    dispatch(storeParams(params));

    // remove any errors (if existing) and start a progress spinner
    dispatch(setError({ active: false }));
    dispatch(setProgress(true));

    // validate the user parameters
    let errorMessage = checkParams(params);

    let pressure = params.pressure;

    if (isAir) {
      pressure = 1.01325
    }

    console.log(pressure);
    // error occurred in checkParams, display error message to user
    if (errorMessage) {
      dispatch(setProgress(false));
      dispatch(setError({ active: true, text: String(errorMessage) }));
    }
    // checkParam succeeded, send request to api
    else {
      try {
        const response = await fetch(fetchURL, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            minWave: params.minWave,
            maxWave: params.maxWave,
            molecule: params.molecule,
            pressure: pressure,
            resolution: params.resolution,
            numScan: params.numScan,
            zeroFill: params.zeroFill,
            source: params.source,
            beamsplitter: params.beamsplitter,
            cellWindow: params.cellWindow,
            detector: params.detector,
          }),
        });

        const data = await response.json();

        // connection was successful
        if (response.ok) {
          // determine where to store received data
          if (data.success) {
            switch (type) {
              case "spectrum":
                dispatch(storeSpectrumData(data));
                dispatch(setFlag(FlagOps.Processed));
                break;
              case "background":
                dispatch(storeBackgroundData(data));
                dispatch(setFlag(FlagOps.Background));
                break;
              default:
                console.log("not processed or background");
                break;
            }
            dispatch(setProgress(false));
          }
          // display error message
          else {
            dispatch(setProgress(false));
            dispatch(setError({ active: true, text: String(data.text) }));
          }
        }
        // connection was unsuccessful
        else {
          dispatch(setProgress(false));
          dispatch(setError({ active: true, text: String(data.text) }));
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
        dispatch(setProgress(false));
        dispatch(setError({ active: true, text: errorMessage }));
      }
    }
  };

  return (
    <button id="button" disabled={progress} onClick={fetchLinode}>
      {buttonText}
    </button>
  );
}
