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

## Contributing

This project is intended to be a project for recruited undergraduate students, but pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Licensed under **_TODO_**

**Relevant third-party tools and resources we depend on:**

- [GitHub Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action): GitHub Action used to automate deployment of web applications to GitHub Pages (Licensed [MIT](https://github.com/JamesIves/github-pages-deploy-action/blob/dev/LICENSE))

- [MUI](https://mui.com/): React user interface component library (Licensed [MIT](https://github.com/mui/material-ui/blob/master/LICENSE))

- [Plotly.js](https://github.com/plotly/plotly.js): Javascript data visualization library (Licensed [MIT](https://github.com/plotly/plotly.js/blob/master/LICENSE))

- [Radis](https://radis.github.io/): Spectra generation (Licensed [LGPL-3.0](https://github.com/radis/radis/blob/develop/LICENSE))

- [React](https://react.dev/): Javascript library for building user interfaces (Licensed [MIT](https://github.com/facebook/react/blob/main/LICENSE))

- [React CSV](https://github.com/react-csv/react-csv): React components to build CSV files on the fly (Licensed [MIT](https://github.com/react-csv/react-csv/blob/master/LICENSE.txt))

- [React Router](https://github.com/remix-run/react-router): Declarative routing for React (Licensed [MIT](https://github.com/remix-run/react-router/blob/main/LICENSE.md))

- [React to Print](https://github.com/gregnb/react-to-print): React components for printing in the browser (Licensed [MIT](https://github.com/gregnb/react-to-print/blob/master/LICENSE))

- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit): Library for updating and managing application state (Licensed [MIT](https://github.com/reduxjs/redux-toolkit/blob/master/LICENSE))

- [SVGO](https://github.com/svg/svgo): Node.js tool for optimizing SVG files (Licensed [MIT](https://github.com/svg/svgo/blob/main/LICENSE))

- [SVGOMG](https://github.com/jakearchibald/svgomg): Web GUI for SVGO (Licensed [MIT](https://github.com/jakearchibald/svgomg/blob/main/LICENSE.md))

- [SVGR](https://github.com/gregberge/svgr): Tool for transforming SVGs into React components (Licensed [MIT](https://github.com/gregberge/svgr/blob/main/LICENSE))

**Inspiration from:**

- [Radis app](https://www.radis.app/): Inspiration for user interface components like the dual slider for the wavenumber range (Licensed [LGPL-3.0](https://github.com/suzil/radis-app/blob/main/LICENSE))
