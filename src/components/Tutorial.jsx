import React, { useState } from "react";

// components
import CloseButton from "./CloseButton.jsx";

// images
import plotlyScreenshotTool from "../images/other/Plotly_Screenshot_Tool.png";

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
        <CloseButton id="customized-dialog-title" onClose={handleClose} />

        <h2>Tutorial</h2>

        <p>
          This is a brief tutorial that shows how to acquire spectra, find
          peaks, and export data using FTIR-SIS. In this tutorial we focus on
          carbon monoxide (CO) in the mid-IR.
        </p>
        <ol>
          <li>
            Navigate to the <b>Window</b> menu and choose{" "}
            <b>Experimental Setup</b>. Select appropriate parameters: In this
            example we used CO at a partial pressure of 0.002 bar (in air), a
            wavenumber range of 1000-5000 cm<sup>-1</sup>, and 100 scans at a
            resolution of 0.125 cm<sup>-1</sup> with a zero-filling factor of 2.
            The radiation source, optics, and detector were set to values that
            maximize the radiation throughput in the mid-IR: Globar source,
            antireflective ZnSe beamsplitter (AR-ZnSe), ZnSe gas cell windows,
            and Mercury-Cadmium-Telluride (MCT) detector.
          </li>
          <li>
            Navigate to the <b>Measure</b> menu and select{" "}
            <b>Collect Background Spectrum</b>. You will be taken to the{" "}
            <b>Instrument window</b> where you will see the corner cube mirror
            on the right move back and forth as the spectrum is acquired. While
            the averaging is occurring, please take the time to click/tap on
            various objects to learn about their functionality. You can also
            click/tap on the information buttons which describe each compartment
            of the FTIR.
          </li>
          <li>
            After the background scans have been completed, navigate to the{" "}
            <b>Measure</b> menu and choose <b>Collect Sample Spectrum</b>. This
            will initiate the acquisition of a spectrum with your sample in the
            gas cell. Once again, you will be taken to the{" "}
            <b>Instrument window</b> where you can learn more about the FTIR
            spectrometer while your sample spectrum is being averaged.
          </li>
          <li>
            After both spectra have been acquired, navigate to the <b>Window</b>{" "}
            menu and choose <b>Spectra</b> (alternatively you can click/tap on
            the monitor). Directly below the menu bar, four types are listed:
            Sample Spectrum (I), Background Spectrum (I<sub>o</sub>),
            Transmittance Spectrum (T=I/I<sub>o</sub>), and Absorbance Spectrum
            (-log<sub>10</sub>T). These spectra are graphed with plotly, which
            allows for the user to zoom in by dragging a rectangle over the
            region of interest. Click/tap on “Absorbance Spectrum” and zoom in
            on the (rotationally resolved) fundamental band of CO (~2000-2250 cm
            <sup>-1</sup>). You can download an image of this plot by selecting
            the camera icon in plotly's menu bar:
            <br />
            <img
              src={plotlyScreenshotTool}
              alt="an shows where the plotly screenshot tool is located"
            />
            <br />
            Feel free to zoom in further and explore the lineshapes of
            individual peaks (which should be more-or-less indistinguishable
            from peaks in a real spectrum of CO). If you would like to export
            the spectra for loading into another program (e.g., OPUS or OMNIC)
            then navigate to the <b>File</b> menu and choose <b>Save</b> and
            then <b>Absorbance Spectrum Data</b>.
          </li>
          <li>
            A particularly useful feature of FTIR-SIS is the ability to generate
            a list of peaks and their intensities. Using these values you can
            perform analyses to determine molecular constants and the rotational
            temperature. To generate such a list, navigate to the <b>Window</b>{" "}
            menu and choose <b>Find Peaks</b>. Set the “Lower Domain Bound” to
            2000 cm<sup>-1</sup>, the “Upper Domain Bound” to 2250 cm
            <sup>-1</sup>, and the “Threshold” to a positive number like 0.1
            (this is the absorbance value above which peaks will be identified).
            Click/tap on “Find Peaks”, after which a list of peak positions and
            their intensities will appear. Note that if you have a very large
            number of peaks you might want to consider increasing the threshold.
            These values can be selected and copied to a spreadsheet for
            analysis, or you can save them to file by navigating to the{" "}
            <b>File</b> menu and choosing <b>Save</b> and then <b>Peaks Data</b>
            .
          </li>
          <li>
            Also within the wavenumber range covered is the first overtone band
            of CO, however, at the suggested pressure (0.002 bar), its peaks are
            buried in the noise. If you would like to clearly observe this band
            then increase the pressure of CO by at least 10x, then collect a new
            sample spectrum and zoom in on the new absorbance spectrum from
            ~4150-4350 cm<sup>-1</sup>. Once again, you can generate a peak list
            and export it as mentioned above.
          </li>
        </ol>
        <p>
          That's it for now. Please note that the spectra you have generated
          with FTIR-SIS will be almost indistinguishable from real spectra
          collected with a commercial grade FTIR spectrometer. We hope you enjoy
          the program we have developed!
        </p>
      </Dialog>
    </div>
  );
}
