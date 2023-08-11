import React, { useState } from "react";

// components
import CloseButton from "./CloseButton.jsx";

// mui
import { Dialog } from "@mui/material";

// style
import "../style/components/Popup.css";

// this component is used to display popup overlays for the instrument and certain menu items
/**
 * A component that contains a MUI Dialog (popup) to display information in the File and Help menus
 *
 * @param {string} label - The text that appears in the MenuBar.
 * @param {string} title - The text that appears at the top of the popup.
 * @param {object} text - The text that appears that the bottom of the popup.
 */
export default function Tutorial() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="popup-button dropdown-items" onClick={handleClickOpen}>
        Tutorial
      </button>
      <Dialog className="popup" onClose={handleClose} open={open}>
        <CloseButton id="customized-dialog-title" onClose={handleClose}>
          <h2>How to use the FTIR-SIS</h2>
        </CloseButton>
        <p>
          This is a brief tutorial that shows how to acquire spectra, find
          peaks, and export data using FTIR-SIS. In this tutorial we focus
          on carbon monoxide (CO) in the mid-IR.
        </p>
        <ol>
          <li>
            Navigate to the <b>Window</b> menu and chose{" "}
            <b>Experimental Setup</b>. Select appropriate parameters: In
            this example we chose CO at a partial pressure of 0.002 bar (in
            air), a wavenumber range of 400-5000 cm<sup>-1</sup>, and 100
            scans at a resolution of 0.125 cm<sup>-1</sup> with a
            zero-filling factor of 2. The radiation source, optics, and
            detector were set to values that maximize the radiation
            throughput in the mid-IR: Tungsten source, antireflective CaF
            <sub>2</sub> beamsplitter (AR-CaF<sub>2</sub>), CaF<sub>2</sub>{" "}
            gas cell windows, and InSb detector.
          </li>
          <li>
            Navigate to the <b>Window</b> menu and chose <b>Instrument</b>.
            Click/tap on the "Collect Background Spectrum" button. You will
            see the corner cube mirror on the right move back and forth as
            the spectrum is acquired. The spectrum shown in the lower left
            corner of the window corresponds to a running average over the
            number of scans that has been completed. While the averaging is
            occurring, you are encouraged to click/tap on the various
            components to learn about their functionality.
          </li>
          <li>
            After the background scans have been completed, click/tap on the
            "Collect Sample Spectrum" button. This will initiate the
            acquisition of a spectrum with your sample in the gas cell. The
            graph in the lower left corner of the window compares the
            averaged background spectrum to a running average of the sample
            spectrum. Note: You can zoom in and out of different regions of
            the plots while spectra are being acquired.
          </li>
          <li>
            After both spectra have been acquired, navigate to the{" "}
            <b>Window</b> menu and choose <b>Spectra</b>. Directly below the
            menu bar, four types are listed: Sample Spectrum (I), Background
            Spectrum (I<sub>o</sub>), Transmittance Spectrum (T=I/I
            <sub>o</sub>), and Absorbance Spectrum (-log<sub>10</sub>T).
            Click/tap on "Absorbance Spectrum" and zoom in on the
            (rotationally resolved) fundamental band of CO (~2000-2250 cm
            <sup>-1</sup>).
          </li>
          <li>
            Below the spectrum are parameter cells that can be adjusted so
            that peaks can be picked (identified). Set the "Lower Domain
            Bound" to 2000 cm<sup>-1</sup>, the "Upper Domain Bound" to 2250
            cm<sup>-1</sup>, and the "Threshold" to a positive number (this
            is the absorbance value above which peaks will be identified).
            Click/tap on "Find Peaks" after which a list of peaks and their
            intensities will appear. The peak list can then be exported by
            navigating to the <b>File</b> menu and choosing <b>Save</b>,
            followed by selecting the "Save Peaks Data" option (note the
            other option which is to "Save Absorbance Spectrum Data").
          </li>
          <li>
            If you wish to analyze the overtone band of CO, then zoom in
            from ~4150-4350 cm<sup>-1</sup>. The signal-to-noise in this
            region can be improved by performing more averaging (increasing
            the number of scans), or by increasing the gas cell pressure.
            After (optionally) optimizing conditions, then you can generate
            a peak list and export it as mentioned above.
          </li>
        </ol>
        <p>
          Note that one cannot (yet) perform a rovibrational analysis to
          determine molecular constants using FTIR-SIS. For more information
          please go to the <b>Help</b> menu and choose <b>Usage</b>.
        </p>
      </Dialog>
    </div>
  );
}
