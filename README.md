# Virtual-FTIR-Spectrometer

This web application is intended to provide users with an overview of the anatomy of a Fourier Transform InfraRed (FTIR) spectrometer. The application also allows users to experiment with the spectrometer's parameters and observing its graphed output.

The web application is accessible at: https://rastonlab.github.io/Virtual-FTIR-Spectrometer/

# Usage

## File

The `File` menu allows the user to import and export data with the web application.

### Open

The `open` menu item allows users to upload and open a `.CSV` file to the web application. This allows the user to upload parameters, as well as data points that will be displayed to the user in `spectrum` window.

The first line of parameters will look like this:

```
# Min Wavenumber: 1900 Max Wavenumber: 2300 Molecule: CO Pressure: 0.001 Resolution: 1 Number of Scans: 1 Zero Fill: 0 Source: 3100 Beamsplitter: AR_ZnSe Cell Window: CaF2 Detector: MCT
```

The following lines will contain datapoints like:

```
5261.723152266546 0.0008834386851116477
5260.388874661239 0.0008841243897027239
5259.055273581491 0.0008805861620592779
5257.722348512898 0.0008855626861862154
5256.390098941579 0.0008759330608779286
...
```

### Save

The `save` menu item allows users to save a `.CSV` file from the web application. This file hols the users selected parameters, as well as the data points that were displayed to the user in the `spectrum` window.

These files are named like: `[min-wavenumber]-[max-wavenumber]-spectrum.csv`

### Print

The `print` menu item allows users to print just a graph of the data points or both the graph and user parameters. Once the user selects the items they want printed, the browsers print preview will be displayed to the user.

## Collect

### Acquire Background Sample

### Stop Acquisition

## Window

The `Window` menu allows the user to view and interact with different pieces of the virtual spectrometer.

### Experimental Setup

The `experimental setup` menu item allows users to view modifiable parameters, run the virtual spectrometer with those parameters, and to view a graphed output based on those parameters.

### Instrument

The `instrument` menu item allows users to view and interact with a top-down view of the virtual instrument. The interactive instrument is made up of many images that when clicked, display a popup to the user. The popup contains a more detailed image as well as a description of the selected component.

This menu item also displays some of the user selected parameters in a display titled `Electronics` and `Readouts`. The user is unable to change the parameters from the `instrument` window. Parameters must be changed in the `experimental setup` menu item.

### Spectrum

The `spectrum` menu item allows users to view a full page graph on the spectrometers output.

## Help

### Tutorial

### Usage

### About

# Running locally

The virtual spectrometer is made up of two programs.

- [Virtual-FTIR-Spectrometer](https://github.com/RastonLab/Virtual-FTIR-Spectrometer)

  - This repository contains the front-end of the program using the React JavaScript library.

- [Virtual-FTIR-Functions](https://github.com/RastonLab/Virtual-FTIR-Functions)

  - This repository contains the back-end of the program using the Flask web framework written in Python.

## Front-end

## Back-end

# Architecture

## GitHub Pages

## EC2
