import { Save } from "../redux/save";
import { Open } from "../components/Open";
import Print from "../components/Print";

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
        action: Save,
      },
      {
        label: "Print",
        button: true,
        title: "",
        text: <Print />,
      },
    ],
  },
  // {
  //   label: "Collect",
  //   submenu: [
  //     {
  //       label: "Generate Background Sample",
  //     },
  //     {
  //       label: "Stop Acquisition",
  //     },
  //   ],
  // },
  // {
  //     label: 'Analyze',
  //     submenu: [
  //         {
  //             label:'Find Peaks',
  //         },
  //     ]
  // },
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
      },
      {
        label: "Usage",
        button: true,
        title: "How to use the FITR",
        text: (
          <div>
            <h2>Window</h2> 
            <p>
              The <strong>Window</strong> menu allows the user to view and interact with different pieces of the virtual spectrometer.
            </p>

            <h3>Experimental Setup</h3>
            <p>
              The <strong>experimental setup</strong> menu item allows users to view modifiable parameters, run the virtual spectrometer with those parameters, and to view a graphed output based on those parameters.
            </p>

            <h3>Instrument</h3>
            <p>
              The <strong>instrument</strong> menu item allows users to view and interact with a top-down view of the virtual instrument. The interactive instrument is made up of many images that when clicked, display a popup to the user. The popup contains a more detailed image as well as a description of the selected component.<br/>
              
              This menu item also displays some of the user selected parameters in a display titled <strong>Electronics</strong> and <strong>Readouts</strong>. The user is unable to change the parameters from the <strong>instrument</strong> window. Parameters must be changed in the <strong>experimental setup</strong> menu item.
            </p>

            <h3>Spectrum</h3>
            <p>
              The <strong>spectrum</strong> menu item allows users to view a full page graph on the spectrometers output.
            </p>
          </div>),
      },
      {
        label: "About",
        button: true,
        title: "About The Raston Lab: FTIR",
        text: (
          <p>
            This Virtual Instrument is one of four in development by Raston Lab. The goal of these Virtual Instruments is to provide students who do not have access to these tools with experience they will need after graduation. The Virtual FTIR allows students to generate spectra similar to those you would get from the physical instrument. This is achived through mathmatical computations combined with data pulled from RADIS, a spectrum generation tool that uses data from the latest HITRAN database. 
          </p>
        ),
      },
    ],
  },
];
