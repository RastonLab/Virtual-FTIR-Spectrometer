// constants
import { PARAMETER_LABEL, PARAMETER_VALUE } from "../dictionaries/constants";

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
  if (!Object.keys(molecules).includes(params.molecule)) {
    return `${params.molecule} is not a valid molecule`;
  }

  // check if the medium is correct
  if (
    params.medium !== PARAMETER_VALUE.mediumVacuum &&
    params.medium !== PARAMETER_VALUE.mediumAir
  ) {
    return `Medium ${params.medium} is not valid. Should be ${PARAMETER_LABEL.mediumVacuum} or ${PARAMETER_LABEL.mediumAir}.`;
  }

  // check if the pressure is correct
  if (params.pressure < 0.0001 || params.pressure > 10) {
    return `Pressure ${params.pressure} is not in accepted range (0.0001 - 10)`;
  }

  // check if the resolution is correct
  if (!resolutions.includes(params.resolution)) {
    return `Resolution ${params.resolution} is not valid.`;
  }

  // check if the number of scans is correct
  if (params.numScan < 1 || params.numScan > 256) {
    return `Number of Scans ${params.numScan} is not valid`;
  }

  // check if the zero fill is correct
  if (!zeroFills.includes(params.zeroFill)) {
    return `Zero Fill ${params.zeroFill} is not valid.`;
  }

  // check if source is correct
  if (
    params.source !== PARAMETER_VALUE.sourceGlobar &&
    params.source !== PARAMETER_VALUE.sourceTungsten
  ) {
    return `Source Temperature ${params.source} k is not valid for globar (${PARAMETER_VALUE.sourceGlobar} k) or tungsten (${PARAMETER_VALUE.sourceTungsten} k)`;
  }

  // check if beamsplitter is correct
  if (
    params.beamsplitter !== PARAMETER_VALUE.beamsplitterCaF2 &&
    params.beamsplitter !== PARAMETER_VALUE.beamsplitterZnSe
  ) {
    return `Beamsplitter ${params.beamsplitter} is not valid. Should be either ${PARAMETER_LABEL.beamsplitterCaF2} or ${PARAMETER_LABEL.beamsplitterZnSe}.`;
  }

  // check if cell window is correct
  if (
    params.window !== PARAMETER_VALUE.cellWindowZnSe &&
    params.window !== PARAMETER_VALUE.cellWindowCaF2
  ) {
    return `Cell Window ${params.window} is not valid. Should be either ${PARAMETER_LABEL.cellWindowZnSe} or ${PARAMETER_LABEL.cellWindowCaF2}.`;
  }

  // check if detector is correct
  if (
    params.detector !== PARAMETER_VALUE.detectorInSb &&
    params.detector !== PARAMETER_VALUE.detectorMCT
  ) {
    return `Detector ${params.detector} is not valid. Should be either ${PARAMETER_LABEL.detectorInSb} or ${PARAMETER_LABEL.detectorMCT}.`;
  }

  return false;
}
