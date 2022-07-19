import { Save } from "../redux/save";
export const menuItems = [
  {
    label: "File",
    submenu: [
      {
        label: "Open",
      },
      {
        label: "Save As",
        action: Save
      },
      {
        label: "Print",
      },
    ],
  },
  {
    label: "Collect",
    submenu: [
      {
        label: "Aquire Background Sample",
      },
      {
        label: "Stop Aquisition",
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
        label: "Experimental Setup 2",
        link: "/experiment2",
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
            Insert Lorum ipsum text
            <br />
          </p>
        ),
      },
    ],
  },
];
