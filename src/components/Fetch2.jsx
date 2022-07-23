import React from "react";
import { useDispatch } from "react-redux";

import {
  hideError,
  hideProgress,
  showError,
  showProgress,
  storeData,
  storeParams,
} from "../redux/actions";

export default function Fetch({ params }) {
  const dispatch = useDispatch();

  async function fetchRadis() {
    dispatch(storeParams(params));

    dispatch(hideError());
    dispatch(showProgress());

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    let response;
    try {
      response = await fetch("http://localhost:5000/post_json", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          min_wave: params.minWave,
          max_wave: params.maxWave,
          molecule: params.molecule,
          pressure: params.pressure,
          resolution: params.resolution,
          num_scan: params.numScan,
          zero_fill: params.zeroFill,
          source: params.source,
          beamsplitter: params.beamsplitter,
          cell_window: params.cellWindow,
          detector: params.detector,
        }),
      });

      if (response.ok) {
        const data = await response.text();
        dispatch(storeData(JSON.parse(data)));
        dispatch(hideProgress());
      } else {
        dispatch(hideProgress());
        dispatch(showError());
      }
    } catch (error) {
      console.log(error);
      dispatch(hideProgress());
      dispatch(showError());
    }
  }

  return (
    <button id="button" onClick={fetchRadis}>
      Perform Fetch Request
    </button>
  );
}
