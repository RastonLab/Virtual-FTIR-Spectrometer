# Virtual-FTIR-Spectrometer

The Raston Lab's **Fourier Transform InfraRed - Scientific Instrument Simulator** (FTIR-SIS) was designed to emulate a student's classroom experience with an FTIR spectrometer. The web application focuses on both spectra generation and a simplified top-down view of the components that make up the spectrometer.

This project uses [React](https://github.com/facebook/react) for the frontend and [Flask](https://github.com/pallets/flask/) for the backend. The backend is located in a separate [repository](https://github.com/RastonLab/Virtual-FTIR-Functions).

## Installation

**NOTE:** The following setup steps are for the frontend, not the backend API.

1. Clone the repository

2. Move into the cloned repository's directory

   ```bash
   cd Virtual-FTIR-Spectrometer
   ```

3. Install all `npm` dependencies

   ```bash
   npm install
   ```

4. Run the server locally

   ```bash
   npm start
   ```

## Usage

The intended audience for this application is undergraduate chemistry students studying spectroscopy. The following screenshots are not exhaustive but acknowledge most of the main features:

- Experimental Setup (spectrometer parameters)

**_TODO_**

- Instrument Window (top-down view of simplified spectrometer)

**_TODO_**

- Spectrum Window (plotted spectra)

**_TODO_**

## Notes

The following sections will be about more complex features and implementations that new programmers to the project may need more explication.

### Redux Toolkit

Redux Toolkit is used to provide centralized state between different components and routes withing the application. An official [Redux Toolkit tutorial](https://redux-toolkit.js.org/tutorials/quick-start) and a [FreeCodeCamp Redux Toolkit course](https://www.freecodecamp.org/news/learn-redux-toolkit-the-recommended-way-to-use-redux) was used to setup state in our application.

### SVG

#### SVG Diagrams

One of the major features of this project is the interactive SVG that students can use to learn more about the spectrometer. All SVG assets can be found in an accompanying [GitHub repository](https://github.com/RastonLab/Virtual-Instrument-Diagrams).

#### SVG Optimization and Components

SVGs created in Inkscape have tags that are not supported in default React. Because of this, we need to _optimize_ the SVG by removing these tags. This optimization can be done easily in [SVGOMG's GUI](https://jakearchibald.github.io/svgomg/) (just remember to update the settings to not cleanup IDs).

We have implemented a solution that automates the optimization and/ or translation from native SVG to `.jsx` (allows for finer-grain control using JavaScript). (For both of the commands listed below, `svgo.config.js` is used to change some of the default `SVGO` settings.)

- To optimize tooltip SVGs, place the SVGs in the `src/images/tooltips/` directory and run `npm run svgo`.

- To optimize and translate the Instrument Window SVG, place the SVG into the `src/images/` directory and run `npm run svgr`. This command will remove the `.svg` file from the directory.

#### SVG Interactivity and Animation

To center text in the SVG, add the following style to the text element you want centered. This was completed by using Inkscape's XML Editor:

```css
text-anchor: middle;
dominant-baseline: central;
```

Then using Inkscape's Align and Distribute tool, center the text in the "parent" element.

#### SVG Tooltips

When certain parts of the Instrument Window are clicked, a popup with additional image(s) and a description will appear. The underlying component behind this is the [MUI Dialog](https://mui.com/material-ui/react-dialog/).

In the SVG, components are collated by setting group IDs (the `<g>` element). In JavaScript, the SVG is setup with an `onClick` listener that will target the parent element's ID (`event.target.parentElement.id`), which is the group's ID. A dictionary (`src/dictionaries/tooltips.js`) is used to store and format text and images associated with each tooltip.

A simplified version of this code is shown below:

```js
// InstrumentWindow.jsx
import React, { useState } from "react";

// components
import { Dialog } from "@mui/material";
import MySVG from "../images/InstrumentSVG";

// constants
import { BAD_ID } from "../dictionaries/constants";

// dictionaries - holds contents of the tooltips
import { tooltips } from "../dictionaries/tooltips";

// style
import "../style/routes/InstrumentWindow.css";

export default function InstrumentWindow() {
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState();

  // looks at click event and determines ID selected
  //   some IDs are considered "bad" (do not have tooltips)
  const handleClick = (event) => {
    if (!BAD_ID.includes(event.target.parentElement.id)) {
      setElement(event.target.parentElement.id);
      setToggled(!toggled);
    }
  };

  return (
    <div>
      <MySVG onClick={handleClick} />

      {element && (
        <Dialog
          onClose={handleClick}
          open={toggled}
          fullScreen={element === "display" ? true : false}
        >
          {toolTips[element].text}
        </Dialog>
      )}
    </div>
  );
}
```

## Contributing

Upkeep of this project is intended for recruited undergraduate students, but pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Licensed under **_TODO_**

**Relevant third-party tools and resources we depend on:**

- [GitHub Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action): GitHub Action used to automate deployment of web applications to GitHub Pages (Licensed [MIT](https://github.com/JamesIves/github-pages-deploy-action/blob/dev/LICENSE))

- [MUI](https://mui.com/): React user interface component library (Licensed [MIT](https://github.com/mui/material-ui/blob/master/LICENSE))

- [Plotly.js](https://github.com/plotly/plotly.js): JavaScript data visualization library (Licensed [MIT](https://github.com/plotly/plotly.js/blob/master/LICENSE))

- [Radis](https://radis.github.io/): Spectra generation (Licensed [LGPL-3.0](https://github.com/radis/radis/blob/develop/LICENSE))

- [React](https://react.dev/): JavaScript library for building user interfaces (Licensed [MIT](https://github.com/facebook/react/blob/main/LICENSE))

- [React CSV](https://github.com/react-csv/react-csv): React components to build CSV files on the fly (Licensed [MIT](https://github.com/react-csv/react-csv/blob/master/LICENSE.txt))

- [React Router](https://github.com/remix-run/react-router): Declarative routing for React (Licensed [MIT](https://github.com/remix-run/react-router/blob/main/LICENSE.md))

- [React to Print](https://github.com/gregnb/react-to-print): React components for printing in the browser (Licensed [MIT](https://github.com/gregnb/react-to-print/blob/master/LICENSE))

- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit): Library for updating and managing application state (Licensed [MIT](https://github.com/reduxjs/redux-toolkit/blob/master/LICENSE))

- [SVGO](https://github.com/svg/svgo): Node.js tool for optimizing SVG files (Licensed [MIT](https://github.com/svg/svgo/blob/main/LICENSE))

- [SVGOMG](https://github.com/jakearchibald/svgomg): Web GUI for SVGO (Licensed [MIT](https://github.com/jakearchibald/svgomg/blob/main/LICENSE.md))

- [SVGR](https://github.com/gregberge/svgr): Tool for transforming SVGs into React components (Licensed [MIT](https://github.com/gregberge/svgr/blob/main/LICENSE))

**Inspiration from:**

- [Make a README](https://www.makeareadme.com/): Inspiration for README.md template (Licensed [MIT](https://github.com/dguo/make-a-readme/blob/main/LICENSE))

- [Radis app](https://www.radis.app/): Inspiration for user interface components like the dual slider for the wavenumber range (Licensed [LGPL-3.0](https://github.com/suzil/radis-app/blob/main/LICENSE))
