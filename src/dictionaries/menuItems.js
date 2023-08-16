// components
import { Open } from "../components/Open";
import CancelScan from "../components/CancelScan";
import Fetch from "../components/Fetch";
import FindPeaks from "../components/FindPeaks";
import Save from "../components/Save";
import Tutorial from "../components/Tutorial";

// constants
import { BACKGROUND, SAMPLE } from "../dictionaries/constants";

// router
import { Link } from "react-router-dom";
import LandingPage from "../components/LandingPage";

/**
 * Controls what appears in the MenuBar. To remove something, either remove the code or comment it out
 */
export const menuItems = [
  {
    label: "File",
    submenu: [
      {
        label: "Open",
        component: <Open />,
      },
      {
        label: "Save",
        component: <Save />,
      },
    ],
  },
  {
    label: "Window",
    submenu: [
      {
        label: "Experimental Setup",
        component: (
          <Link to="/experimental-setup">
            <div>Experimental Setup</div>
          </Link>
        ),
      },
      {
        label: "Instrument",
        component: (
          <Link to="/instrument">
            <div>Instrument</div>
          </Link>
        ),
      },
      {
        label: "Spectrum",
        component: (
          <Link to="/spectrum">
            <div>Spectrum</div>
          </Link>
        ),
      },
      {
        label: "Find Peaks",
        component: <FindPeaks />,
      },
    ],
  },
  {
    label: "Measure",
    submenu: [
      {
        label: "Collect Background Sample",
        component: (
          <Fetch
            type="background"
            fetchURL={BACKGROUND}
            buttonText={"Collect Background Spectrum"}
          />
        ),
      },
      {
        label: "Collect Processed",
        component: (
          <Fetch
            type="sample"
            fetchURL={SAMPLE}
            buttonText={"Collect Sample Spectrum"}
          />
        ),
      },
      {
        label: "Cancel Scan",
        component: <CancelScan />,
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        label: "Tutorial",
        component: <Tutorial />,
      },
      {
        label: "Landing Page",
        component: <LandingPage isMenu={true} />,
      },
      // {
      //   label: "Usage",
      //   button: true,
      //   title: "Components of the FITR-SIS",
      //   text: "",
      // },
      // {
      //   label: "About",
      //   button: true,
      //   title: "About The Raston Lab: FTIR-SIS",
      //   text: (
      //     <p>
      //       This Virtual Instrument is one of four in development by Raston Lab.
      //       The goal of these Virtual Instruments is to provide students who do
      //       not have access to these tools with experience they will need after
      //       graduation. The FTIR-SIS allows students to generate spectra similar
      //       to those you would get from the physical instrument. This is achived
      //       through mathmatical computations combined with data pulled from
      //       RADIS, a spectrum generation tool that uses data from the latest
      //       HITRAN database.
      //     </p>
      //   ),
      // },
    ],
  },
];
