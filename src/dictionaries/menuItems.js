import { Save } from "../redux/save";
import { Open } from "../components/Open";
import Print from "../components/Print";
import Fetch from "../components/Fetch";

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
  {
    label: "Collect",
    submenu: [
      {
          label: <Fetch
          type="background"
          // params={{
          //   state.minWave,
          //   state.maxWave,
          //   state.molecule,
          //   state.pressure,
          //   state.resolution,
          //   state.numScan,
          //   state.zeroFill,
          //   state.source,
          //   state.beamsplitter,
          //   state.cellWindow,
          //   state.detector,
          // }}
          // fetchURL={"http://localhost:5000/fetch_background"}
          fetchURL={"https://ftir.rastonlab.org/fetch_background"}
          buttonText={"Generate Background Sample"}
        />
      },
      // {
      //   label: "Stop Acquisition",
      // },
    ],
  },
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
  // {
  //   label: "Help",
  //   submenu: [
  //     {
  //       label: "Tutorial",
  //     },
  //     {
  //       label: "Usage",
  //     },
  //     {
  //       label: "About",
  //       button: true,
  //       title: "About The FTIR",
  //       text: (
  //         <p>
  //           Insert Lorem ipsum text
  //           <br />
  //           Format test
  //         </p>
  //       ),
  //     },
  //   ],
  // },
];
