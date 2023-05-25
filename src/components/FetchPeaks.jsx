import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProgress,
  setError,
//   storeSpectrumData,
//   storeBackgroundData,
//   storeParams,
//   setFlag,
} from "../redux/actions";
// import { FlagOps } from "../redux/store";

// this component reaches out to the flask server with user parameters and receives X and Y coordinates to graph
export default function FetchPeaks({ type, params, fetchURL, buttonText}) {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress);

  const fetchLinode = async () => {
    // store the current user parameters
    // dispatch(storeParams(params));

    // remove any errors (if existing) and start a progress spinner
    dispatch(setError({ active: false }));
    dispatch(setProgress(true));

    // validate the user parameters
    // let errorMessage = checkParams(params); // you may need to add a check function if params are ever added

    // error occurred in checkParams, display error message to user
    // NOTE: Hardcoded bc there are no params
    if (false) {
      dispatch(setProgress(false));
    //   dispatch(setError({ active: true, text: String(errorMessage) }));
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
            "x": params.x,
            "y": params.y
          }),
        });

        const data = await response.json();
        // connection was successful
        if (response.ok) {
          // determine where to store received data
          if (data.success) {
            // NOTE: May need something similar if we need to store the peaks
            // switch (type) {
            //   case "spectrum":
            //     dispatch(storeSpectrumData(data));
            //     dispatch(setFlag(FlagOps.Processed));
            //     break;
            //   case "background":
            //     dispatch(storeBackgroundData(data));
            //     dispatch(setFlag(FlagOps.Background));
            //     break;
            //   default:
            //     console.log("not processed or background");
            //     break;
            // }
            console.log(data.peaks)
            dispatch(setProgress(false));
            console.log("AOK")
          }
          // display error message
          else {
            console.log("not sucess")
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
