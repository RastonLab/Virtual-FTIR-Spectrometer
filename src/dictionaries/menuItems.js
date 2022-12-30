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
  {
    label: "Collect",
    submenu: [
      {
        label: "Acquire Background Sample",
      },
      {
        label: "Stop Acquisition",
      },
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
  {
    label: "Help",
    submenu: [
      {
        label: "Tutorial",
      },
      {
        label: "Usage",
      },
      {
        label: "About",
        button: true,
        title: "About The FTIR",
        text: (
          <p>
            Insert Lorem ipsum text
            <br />
            Format test
          </p>
        ),
      },
    ],
  },
];
