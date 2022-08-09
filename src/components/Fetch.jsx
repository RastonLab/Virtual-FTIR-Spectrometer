import React from "react";
import { useDispatch } from "react-redux";

import {
  setProgress,
  setError,
  storeData,
  storeParams,
} from "../redux/actions";

export default function Fetch({ params }) {
  const dispatch = useDispatch();

  function checkParams(params) {
    // console.log("----- check if wavenumbers are correct -----");
    if (400 > params.minWave > 12500 || 400 > params.maxWave > 12500) {
      console.log(
        "  wavenumber is out of range (400 - 12500). provided min: " +
          params.minWave +
          "  provided max: " +
          params.maxWave
      );
    } else if (params.minWave > params.maxWave) {
      console.log(
        "  min wavenumber is greater than max wavenumber. provided min: " +
          params.minWave +
          "  provided max: " +
          params.maxWave
      );
    } else if (params.maxWave < params.minWave) {
      console.log(
        "  max wavenumber is less than min wavenumber. provided min: " +
          params.minWave +
          "  provided max: " +
          params.maxWave
      );
    } else if (params.minWave === params.maxWave) {
      console.log(
        "  min wavenumber is equivalent to max wavenumber. provided min: " +
          params.minWave +
          "  provided max: " +
          params.maxWave
      );
    } else {
      // console.log("  good!");
    }

    // console.log("----- check if the molecule is correct -----");
    const validMolecules = [
      "C2H2",
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
      "SO3",
    ];
    if (validMolecules.includes(params.molecule)) {
      // console.log("  good!");
    } else {
      console.log(
        "  molecule is not valid. provided molecule: " + params.molecule
      );
    }

    // console.log("----- check if the pressure is correct -----");
    if (0.0001 <= params.pressure <= 10) {
      // console.log("  good!");
    } else {
      console.log(
        "  pressure is out of range (0.0001 - 10). provided pressure: " +
          params.pressure
      );
    }

    // console.log("----- check if the resolution is correct -----");
    const validResolution = [1, 0.5, 0.25, 0.125, 0.0625];
    if (validResolution.includes(params.resolution)) {
      // console.log("  good!");
    } else {
      console.log(
        "  resolution is not valid. provided resolution: " + params.resolution
      );
    }

    // console.log("----- check if the number of scans is correct -----");
    if (1 <= params.numScan <= 1024) {
      // console.log("  good!");
    } else {
      console.log(
        "  number of scans is out of range (1 - 1024). provided number of scans: " +
          params.numScan
      );
    }

    // console.log("----- check if the zero fill is correct -----");
    const validFill = [0, 1, 2];
    if (validFill.includes(params.zeroFill)) {
      // console.log("  good!");
    } else {
      console.log(
        "  zero fill is not valid. provided zero fill: " + params.zeroFill
      );
    }

    // console.log("----- check if source is correct -----");
    if (params.source === "Globar") {
      params.source = 1700;
      // console.log("  good!");
    } else if (params.source === "Tungsten") {
      params.source = 3100;
      // console.log("  good!");
    } else {
      console.log("  source is not valid. provided source: " + params.source);
    }

    // console.log("----- check if beamsplitter is correct -----");
    if (
      params.beamsplitter === "AR_CaF2" ||
      params.beamsplitter === "AR_ZnSe"
    ) {
      // console.log("  good!");
    } else {
      console.log(
        "  beamsplitter is not valid. provided beamsplitter: " +
          params.beamsplitter
      );
    }

    // console.log("----- check if cell window is correct -----");
    if (params.cellWindow === "ZnSe" || params.cellWindow === "CaF2") {
      // console.log("  good!");
    } else {
      console.log(
        "  cell window is not valid. provided cell window: " + params.cellWindow
      );
    }

    // console.log("----- check if detector is correct -----");
    if (params.detector === "InSb" || params.detector === "MCT") {
      // console.log("  good!");
    } else {
      console.log(
        "  detector is not valid. provided detector: " + params.detector
      );
    }
  }

  async function fetchRadis() {
    dispatch(storeParams(params));

    dispatch(setError({ active: false }));
    dispatch(setProgress(true));

    checkParams(params);

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    let response;
    try {
      response = await fetch(
        "http://localhost:5000/post_json",
        // "http://ec2-44-203-44-133.compute-1.amazonaws.com/post_json",
        {
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "text/plain;charset=UTF-8",
          },
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
            minWave: params.minWave,
            maxWave: params.maxWave,
            molecule: params.molecule,
            pressure: params.pressure,
            resolution: params.resolution,
            numScan: params.numScan,
            zeroFill: params.zeroFill,
            source: params.source,
            beamsplitter: params.beamsplitter,
            cellWindow: params.cellWindow,
            detector: params.detector,
          }),
          method: "POST",
          mode: "cors",
          credentials: "omit",
        }
      );

      const data = await response.json();
      if (data.success) {
        // console.log(data);
        dispatch(storeData(data));
        dispatch(setProgress(false));
      } else {
        // console.log(data);
        dispatch(setProgress(false));
        dispatch(setError({ active: true, text: String(data.text) }));
      }
    } catch (error) {
      // console.log(error);
      dispatch(setProgress(false));
      dispatch(setError({ active: true, text: "Uncaught error" }));
    }
  }

  return (
    <button id="button" onClick={fetchRadis}>
      Perform Fetch Request
    </button>
  );
}
