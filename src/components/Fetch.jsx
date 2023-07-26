import React from "react";

// constants
import { OPD } from "../dictionaries/constants";

// functions
import checkParams from "../functions/checkParams";

// redux
import { useDispatch, useSelector } from "react-redux";

// redux slices
import { setError } from "../redux/errorSlice";
import { setProgress } from "../redux/progressSlice";
import { setBackgroundData } from "../redux/backgroundDataSlice";
import { setSampleData } from "../redux/sampleDataSlice";
import { setPeaksData } from "../redux/peaksDataSlice";
import { setAbsorbanceData } from "../redux/absorbanceDataSlice";
import { setSpinner } from "../redux/spinnerSlice";
import { setTimer } from "../redux/timerSlice";
import { setLectureBottle } from "../redux/lectureBottleSlice"

import { useNavigate } from "react-router-dom";

export let sleepID = 0;

// this component reaches out to the flask server with user parameters and receives X and Y coordinates to graph
export default function Fetch({
  type,
  params,
  fetchURL,
  buttonText,
  buttonStyle,
}) {
  const dispatch = useDispatch();
  const { progress } = useSelector((store) => store.progress);
  const { devMode } = useSelector((store) => store.devMode);
  let {
    beamsplitter,
    detector,
    medium,
    pressure,
    molecule,
    resolution,
    scan,
    source,
    waveMax,
    waveMin,
    window,
    zeroFill,
  } = useSelector((store) => store.parameter);

  let nav = useNavigate();
  if (devMode) {
    nav = (route, num) => {};
  }

  const fetchLinode = async () => {
    // remove any errors (if existing) and start a progress spinner
    dispatch(setError([false, null]));
    dispatch(setProgress(true));

    let body = "";
    let delay = 0; // Default value => immediate

    if (
      type.localeCompare("background") === 0 ||
      type.localeCompare("sample") === 0
    ) {
      // Allows the user to generate new absorbance data (there was a recursive issue in the Absorbance Plotly)
      dispatch(setAbsorbanceData([null, null, null]));
      dispatch(setSpinner(true)); // Turns on the "waiting" spinner
      dispatch(setTimer(0));

      if (params) {
        // validate the user parameters
        let errorMessage = checkParams(params);

        // error occurred in checkParams, display error message to user
        if (errorMessage) {
          dispatch(setProgress(false));
          dispatch(setSpinner(false));
          dispatch(setError([true, String(errorMessage)]));
          return;
        }

        beamsplitter = params.beamsplitter;
        detector = params.detector;
        medium = params.medium;
        molecule = params.molecule;
        pressure = params.pressure;
        resolution = params.resolution;
        scan = params.scan;
        source = params.source;
        waveMax = params.waveMax;
        waveMin = params.waveMin;
        window = params.window;
        zeroFill = params.zeroFill;
      }

      // Leaves delay as Immediate if in devMode
      if (!devMode) {
        // Calculate time the scan would take
        delay = OPD[resolution] * scan * 1000; // 1000 is to convert to milliseconds
      }

      // Controls the Label and valve on the Lecture Bottle
      if (type.localeCompare("background") === 0 ) {
        dispatch(setLectureBottle(false));
      } else if (type.localeCompare("sample") === 0 ) {
        dispatch(setLectureBottle(true));
      }

      // calculate medium if set to "Air"
      let mole = 1;
      let pressure_param = pressure;

      if (medium === "Air") {
        const air_pressure = 1.01325;
        mole = pressure / air_pressure;
        pressure_param = air_pressure;
      }

      // Construct message body
      body = JSON.stringify({
        beamsplitter: beamsplitter,
        detector: detector,
        medium: medium,
        mole: mole,
        molecule: molecule,
        pressure: pressure_param,
        resolution: resolution,
        scan: scan,
        source: source,
        waveMax: waveMax,
        waveMin: waveMin,
        window: window,
        zeroFill: zeroFill,
      });
    } else if (type.localeCompare("find_peaks") === 0) {

      let startIndex = params.x.findIndex((element) => {
        return element >= params.lowerBound;
      });

      if (startIndex === -1) {
        startIndex = 0;
      }

      let endIndex = params.x.findIndex((element) => {
        return element >= params.upperBound;
      });

      if (endIndex === -1) {
        endIndex = params.x.length - 1
      }

      body = JSON.stringify({
        x: params.x.slice(startIndex, endIndex + 1),
        y: params.y.slice(startIndex, endIndex + 1),
        lowerbound: params.lowerBound,
        upperbound: params.upperBound,
        threshold: params.threshold,
      });
    } else {
      dispatch(setProgress(false));
      dispatch(setSpinner(false));
      dispatch(
        setError([
          true,
          `Invalid Request Type. Received "${type}": expected sample, background, or find_peaks`,
        ])
      );
      return;
    }

    // checkParam succeeded and build message body, send request to api
    try {
      const response = await fetch(fetchURL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: body,
      });

      const data = await response.json();
      // connection was successful
      if (response.ok) {
        // determine where to store received data
        if (data.success) {
          switch (type) {
            case "sample":

              // Reset Stored Data
              dispatch(setSampleData([null, null, null]));

              // Only navigate to Instrument Window when !devMode
              devMode ? console.log("devMode") : nav("/instrument", -1);
              
              // Turns off "waiting" spinner
              dispatch(setSpinner(false)); 

              // Delays the appearance of generated data
              sleepID = setTimeout(() => {
                devMode ? dispatch(setProgress(false)) : console.log("userMode");
                dispatch(setSampleData([data, waveMin, waveMax]));
              }, delay);
              break;
            case "background":

              // Reset Stored Data
              dispatch(setBackgroundData([null, null, null]));

              // Only navigate to Instrument Window when !devMode
              devMode ? console.log("devMode") : nav("/instrument", -1);
              
              // Turns off "waiting" spinner
              dispatch(setSpinner(false)); 

              // Delays the appearance of generated data
              sleepID = setTimeout(() => {
                devMode ? dispatch(setProgress(false)) : console.log("userMode");
                dispatch(setBackgroundData([data, waveMin, waveMax]));
              }, delay);
              break;
            case "find_peaks":
              dispatch(setProgress(false));
              dispatch(setPeaksData(data));
              break;
            default:
              console.log(
                `Invalid Request Type. Received: "${type}" expected sample, background, or find_peaks`
              );
              break;
          }
        }
        // display error message
        else {
          console.log("not success");
          dispatch(setProgress(false));
          dispatch(setSpinner(false));
          dispatch(setError([true, String(data.text)]));
        }
      }
      // connection was unsuccessful
      else {
        dispatch(setProgress(false));
        dispatch(setSpinner(false));
        dispatch(setError([true, String(data.text)]));
      }
    } catch (error) {
      // error occurred when reaching out to server
      let errorMessage =
        "We could not collect your data at this time. Please wait a few moments and try again.";
      console.log(error);

      // switch (error.message) {
      //   case "Failed to fetch":
      //     errorMessage = "We could not collect your data at this time. Please wait a few moments and try again.";
      //     break;
      //   default:
      //     errorMessage = "unhandled error";
      //     break;
      // }
      dispatch(setProgress(false));
      dispatch(setSpinner(false));
      dispatch(setError([true, errorMessage]));
    }
  };

  return (
    <button className={buttonStyle} disabled={progress} onClick={fetchLinode}>
      {buttonText}
    </button>
  );
}
