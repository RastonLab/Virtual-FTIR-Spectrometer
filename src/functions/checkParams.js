// dictionaries
import { molecules } from "../dictionaries/moleculeDict";
import { resolutions } from "../dictionaries/resolutionDict";
import { zeroFills } from "../dictionaries/zeroFillDict";

export default function checkParams(params) {
  // check if wavenumbers are correct
  if (params.waveMin < 400) {
    return "min wavenumber is out of range (400 - 12500)";
  }

  if (params.waveMax > 8000) {
    return "max wavenumber is out of range (400 - 12500)";
  }

  if (params.waveMin > params.waveMax) {
    return "min wavenumber is greater than max wavenumber";
  }

  if (params.waveMin === params.waveMax) {
    return "wavenumbers are the same";
  }

  // check if the molecule is correct
  if (!molecules.map(({ value }) => value).includes(params.molecule)) {
    return "molecule is not valid";
  }

  // check if the medium is correct
  if (params.medium !== "Vacuum" && params.medium !== "Air") {
    return "medium is not valid (Vacuum or Air)";
  }

  // check if the pressure is correct
  if (params.pressure < 0.0001 || params.pressure > 10) {
    return "pressure is out of range (0.0001 - 10)";
  }

  // check if the resolution is correct
  if (!resolutions.map(({ value }) => value).includes(params.resolution)) {
    return "resolution is not valid (1, 0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625)";
  }

  // check if the number of scans is correct
  if (params.numScan < 1 || params.numScan > 30000) {
    return "number of scans is out of range (1 - 30000)";
  }

  // check if the zero fill is correct
  if (!zeroFills.map(({ value }) => value).includes(params.zeroFill)) {
    return "zero fill is not valid (0, 1, 2)";
  }

  // check if source is correct
  // if (params.source !== 1700 && params.source !== 3100) {
  //   return "source is not valid (globar = 1700 or tungsten = 3100)";
  // }

  // check if beamsplitter is correct
  if (params.beamsplitter !== "AR_CaF2" && params.beamsplitter !== "AR_ZnSe") {
    return "beamsplitter is not valid (AR_CaF2 or AR_ZnSe)";
  }

  // check if cell window is correct
  if (params.window !== "ZnSe" && params.window !== "CaF2") {
    return "cell window is not valid (ZnSe or CaF2)";
  }

  // check if detector is correct
  if (params.detector !== "InSb" && params.detector !== "MCT") {
    return "  detector is not valid (InSb or MCT)";
  }

  return false;
}
