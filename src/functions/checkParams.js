// dictionaries
import { molecules } from "../dictionaries/molecule";
import { resolutions } from "../dictionaries/resolution";
import { zeroFills } from "../dictionaries/zeroFill";

export default function checkParams(params) {
  // check if wavenumbers are correct
  if (params.waveMin < 400) {
    return `Minimum Wavenumber ${params.waveMin} is out of accepted range (400 - 12500)`;
  }

  if (params.waveMax > 12500) {
    return `Maximum Wavenumber ${params.waveMax} is out of accepted range (400 - 12500)`;
  }

  if (params.waveMin > params.waveMax) {
    return `Minimum Wavenumber ${params.waveMin} is greater than Maximum Wavenumber ${params.waveMax}`;
  }

  if (params.waveMin === params.waveMax) {
    return `Wavenumbers are the same: ${params.waveMax}`;
  }

  // check if the molecule is correct
  if (!molecules.map(({ value }) => value).includes(params.molecule)) {
    return `${params.molecule} is not a vaild molecule`;
  }

  // check if the medium is correct
  if (params.medium !== "Vacuum" && params.medium !== "Air") {
    return `Medium ${params.medium} is not valid. Should be Vacuum or Air.`;
  }

  // check if the pressure is correct
  if (params.pressure < 0.0001 || params.pressure > 10) {
    return `Pressure ${params.pressure} is not in accepted range (0.0001 - 10)`;
  }

  // check if the resolution is correct
  if (!resolutions.map(({ value }) => value).includes(params.resolution)) {
    return `Resolution ${params.resolution} is not valid. Should be either 1, 0.5, 0.25, 0.125, 0.0625, 0.03125, or 0.015625.`;
  }

  // check if the number of scans is correct
  if (params.numScan < 1 || params.numScan > 256) {
    return `Number of Scans ${params.numScan} is not in accepted range (1 - 256)`;
  }

  // check if the zero fill is correct
  if (!zeroFills.map(({ value }) => value).includes(params.zeroFill)) {
    return `Zero Fill ${params.zeroFill} is not valid. Should be either 0, 1, or 2`;
  }

  // check if source is correct
  if (params.source !== 1200 && params.source !== 3400) {
    return `Source Temperature ${params.source} k is not valid for globar (1200 k) or tungsten (3400 k)`;
  }

  // check if beamsplitter is correct
  if (params.beamsplitter !== "AR_CaF2" && params.beamsplitter !== "AR_ZnSe") {
    return `Beamsplitter ${params.beamsplitter} is not valid. Should be either AR-CaF2 or AR-ZnSe.`;
  }

  // check if cell window is correct
  if (params.window !== "ZnSe" && params.window !== "CaF2") {
    return `Cell Window ${params.window} is not valid. Should be either ZnSe or CaF2.`;
  }

  // check if detector is correct
  if (params.detector !== "InSb" && params.detector !== "MCT") {
    return `Detector ${params.detector} is not valid. Should be either InSb or MCT.`;
  }

  return false;
}
