import React from "react";

// redux
import { useSelector } from "react-redux";

// style
import "../style/components/Electronics.css";

// this component displays user selected parameters in a condensed fashion
export default function Electronics() {
  const { beamsplitter, detector, resolution, scan, source, waveMax, waveMin } =
    useSelector((store) => store.parameter);

  return (
    <div className="electronics">
      <div className="electronics-group">
        <h2>Electronics</h2>

        <div className="electronics-top">
          <div className="grid">
            <label>
              Source
              <input
                value={source === 1700 ? "Globar (1700K)" : "Tungsten (3100K)"}
                readOnly
              />
            </label>
          </div>

          <div className="grid">
            <label>
              Beamsplitter
              <input value={beamsplitter} readOnly />
            </label>
          </div>

          <div className="grid">
            <label>
              Gas
              <input value="294.15" readOnly />
            </label>
          </div>

          <div className="grid">
            <label>
              Detector
              <input value={detector} readOnly />
            </label>
          </div>
        </div>
      </div>

      <div className="electronics-group">
        <h2>Readouts</h2>

        <div className="electronics-bottom">
          <div className="grid">
            <label>
              OPD
              <input value={resolution} readOnly></input>
            </label>
          </div>

          <div className="grid">
            <label>
              Number of Scans
              <input value={scan} readOnly />
            </label>
          </div>

          <div className="grid">
            <label>
              Range
              <input
                value={`${waveMin} - ${waveMax} cm^-1`} // FIXME - find better way to superscript
                readOnly
              />
            </label>
          </div>

          <div className="grid">
            <label>
              Resolution
              <input value={`${resolution} cm`} readOnly />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
