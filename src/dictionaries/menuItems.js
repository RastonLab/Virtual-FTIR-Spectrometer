import Save from "../components/Save";
import { Open } from "../components/Open";
import Print from "../components/Print";
import Toggle_Mode  from "../functions/fetchURL.js";
import CancelScan from "../components/CancelScan";

// This file controls what shows up in the menu bar. To remove something
// from the menu bar, either remove the code or comment it out
export const menuItems = [
  {
    label: "File",
    submenu: [
      {
        label: "Open",
        button: true,
        title: "Please Select a File",
        text: <Open />,
      },
      {
        label: "Save",
        button: true,
        title: "",
        text: <Save />,
      },
      {
        label: "Print",
        button: true,
        title: "",
        text: <Print />,
      },
    ],
  },
  {
    label: "Scan Tools",
    submenu: [
      {
        label: "Cancel Scan",
        component: <CancelScan/>
      },
    ],
  },
  {
    label: "Window",
    submenu: [
      {
        label: "Experimental Setup",
        link: "/experimental-setup",
      },
      {
        label: "Instrument",
        link: "/instrument",
      },
      {
        label: "Spectrum",
        link: "/spectrum",
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        label: "Tutorial",
        button: true,
        title: "How to use the FTIR-SIS",
        text: (
          <div>
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
          </div>
        ),
      },
      {
        label: "Usage",
        button: true,
        title: "Components of the FITR-SIS",
        text: (
          <div>
            <h2>Window</h2>
            <p>
              The <strong>Window</strong> menu allows the user to view and
              interact with different pieces of the virtual spectrometer.
            </p>

            <h3>Experimental Setup</h3>
            <p>
              The <strong>experimental setup</strong> menu item allows users to
              view modifiable parameters, run the virtual spectrometer with
              those parameters, and to view a graphed output based on those
              parameters.
            </p>

            <h3>Instrument</h3>
            <p>
              The <strong>instrument</strong> menu item allows users to view and
              interact with a top-down view of the virtual instrument. The
              interactive instrument is made up of many images that when
              clicked, display a popup to the user. The popup contains a more
              detailed image as well as a description of the selected component.
              <br />
              <br />
              This menu item also displays some of the user selected parameters
              in a display titled <strong>Electronics</strong> and{" "}
              <strong>Readouts</strong>. The user is unable to change the
              parameters from the <strong>instrument</strong> window. Parameters
              must be changed in the <strong>experimental setup</strong> menu
              item.
            </p>

            <h3>Spectrum</h3>
            <p>
              The <strong>spectrum</strong> menu item allows users to view a
              full page graph on the spectrometers output. There are five tabs
              that will show various spectra. The{" "}
              <strong>Sample Spectrum</strong> shows the sample that the user
              generated or loaded from a file. The{" "}
              <strong>Background Spectrum</strong> shows the background spectrum
              that the user generated or loaded in from a file. The{" "}
              <strong>Transmittance Spectrum</strong> shows the trasmittance of
              the sample. This is calculated by dividing the sample data by the
              background data. The <strong>Absorbance Spectrum</strong> shows
              the absorbance of the sample. This is calculated by finding the
              negative log base 10 of the sample data divided by the background
              data. The final tab, <strong>All Spectra</strong>, shows separate
              graphs of all four spectra.
            </p>

            <h2>File</h2>
            <p>
              The <strong>File</strong> menu allows the user to import and
              export data with the web application.
            </p>

            <h3>Open</h3>
            <p>
              The <strong>open</strong> menu item allows users to upload and
              open a <strong>.CSV</strong> file to the web application. This
              allows the user to upload parameters, as well as data points that
              will be displayed to the user in <strong>spectrum</strong> window.
              <br />
              <br />
              The first line of parameters will look like this:
              <br />
              <br />
              <blockquote>
                # Min Wavenumber: 1900 Max Wavenumber: 2300 Molecule: CO
                Pressure: 0.001 Resolution: 1 Number of Scans: 1 Zero Fill: 0
                Source: 3100 Beamsplitter: AR_ZnSe Cell Window: CaF2 Detector:
                MCT
              </blockquote>
              <br />
              <br />
              The following excerpt is an example of what datapoints look like:
              <br />
              <br />
              <blockquote>
                5261.723152266546,0.0008834386851116477
                <br />
                5260.388874661239,0.0008841243897027239
                <br />
                5259.055273581491,0.0008805861620592779
                <br />
                5257.722348512898,0.0008855626861862154
                <br />
                5256.390098941579,0.0008759330608779286
                <br />
              </blockquote>
              <br />
              <br />
            </p>

            <h3>Save</h3>
            <p>
              The <strong>save</strong> menu item allows users to save a{" "}
              <strong>.CSV</strong> file from the web application. This file
              holds the users selected parameters, as well as the data points
              that were displayed to the user in the <strong>spectrum</strong>{" "}
              window.
              <br />
              <br />
              These files are named like:{" "}
              <strong>[min-wavenumber]-[max-wavenumber]-spectrum.csv</strong>
              <br />
              <br />
              If the user generated a background sample, that data will also be
              saved. These files are named like:{" "}
              <strong>
                [min-wavenumber]-[max-wavenumber]-background-spectrum.csv
              </strong>
              <br />
              <br />
            </p>

            <h3>Print</h3>
            <p>
              The <strong>print</strong> menu item allows users to print just a
              graph of the data points or both the graph and user parameters.
              Once the user selects the items they want printed, the browsers
              print preview will be displayed to the user.
              <br />
              <br />
              <br />
            </p>
          </div>
        ),
      },
      {
        label: "About",
        button: true,
        title: "About The Raston Lab: FTIR-SIS",
        text: (
          <p>
            This Virtual Instrument is one of four in development by Raston Lab.
            The goal of these Virtual Instruments is to provide students who do
            not have access to these tools with experience they will need after
            graduation. The FTIR-SIS allows students to generate spectra similar
            to those you would get from the physical instrument. This is achived
            through mathmatical computations combined with data pulled from
            RADIS, a spectrum generation tool that uses data from the latest
            HITRAN database.
          </p>
        ),
      },
    ],
  },
  {
    label: "Developer Tools",
    submenu: [
      {
        label: `Scan Delay Toggle`,
        action: Toggle_Mode
      },
    ]
  }
  
];
