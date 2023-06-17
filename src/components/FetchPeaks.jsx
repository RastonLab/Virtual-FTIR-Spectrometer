import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";

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
import { updatePeaksData } from "../features/peaksDataSlice";

// this component reaches out to the flask server with user parameters and receives X and Y coordinates to graph
export default function FetchPeaks({
  type,
  params,
  fetchURL,
  buttonText,
  openPopup,
}) {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress);

  const fetchLinode = async () => {
    // store the current user parameters
    // dispatch(storeParams(params));

    // remove any errors (if existing) and start a progress spinner
    dispatch(deactivateError());
    dispatch(activateProgress());

    // validate the user parameters
    // let errorMessage = checkParams(params); // you may need to add a check function if params are ever added

    // error occurred in checkParams, display error message to user
    // NOTE: Hardcoded bc there are no params that need to be checked
    if (false) {
      dispatch(deactivateProgress());
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
            x: params.x,
            y: params.y,
            lowerbound: params.lowerBound,
            upperbound: params.upperBound,
            threshold: params.threshold,
          }),
        });

        const data = await response.json();
        // connection was successful
        if (response.ok) {
          // determine where to store received data
          if (data.success) {
            dispatch(deactivateProgress());
            dispatch(updatePeaksData(data));
          }
          // display error message
          else {
            console.log("not sucess");
            dispatch(updatePeaksData(data));
            dispatch(deactivateProgress());
            dispatch(activateError());
            dispatch(updateErrorText(String(data.error)));
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
    openPopup(true);
  };

  return (
    <button id="button" disabled={!progress} onClick={fetchLinode}>
      {buttonText}
    </button>
  );
}
