import React from "react";

// functions
import checkParams from "../functions/checkParams";

// redux
import { useDispatch, useSelector } from "react-redux";

// redux slices
import {
  activateError,
  deactivateError,
  updateErrorText,
} from "../features/errorSlice";
import {
  activateProgress,
  deactivateProgress,
} from "../features/progressSlice";
import { updateBackgroundData } from "../features/backgroundDataSlice";
import { updateSpectrumData } from "../features/spectrumDataSlice";

// this component reaches out to the flask server with user parameters and receives X and Y coordinates to graph
export default function Fetch({ type, params, fetchURL, buttonText }) {
  const dispatch = useDispatch();
  const { progress } = useSelector((store) => store.progress);

  const fetchLinode = async () => {
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
      // calculate medium if set to "Air"
      let mole = 1;
      let pressure = params.pressure;

      if (params.medium === "Air") {
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
            pressure: pressure,
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
                dispatch(updateSpectrumData(data));
                break;
              case "background":
                dispatch(updateBackgroundData(data));
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
