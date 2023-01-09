export const Action = Object.freeze({
  StoreParams: "StoreParams",

  StoreProcessedData: "StoreProcessedData",

  StoreBackgroundData: "StoreBackgroundData",

  SetProgress: "SetProgress",

  SetError: "SetError",

  SetFlag: "SetFlag",
});

// -------------------- calc_spectrum parameters --------------------
export function storeParams(params) {
  return { type: Action.StoreParams, payload: params };
}

// -------------------- store processed data --------------------
export function storeProcessedData(processedData) {
  return { type: Action.StoreProcessedData, payload: processedData };
}

// -------------------- store background sample data --------------------
export function storeBackgroundData(backgroundData) {
  return { type: Action.StoreBackgroundData, payload: backgroundData };
}

// -------------------- progress spinner --------------------
export function setProgress(progress) {
  return { type: Action.SetProgress, payload: progress };
}

// -------------------- error text --------------------
export function setError(error) {
  return { type: Action.SetError, payload: error };
}

// -------------------- flag ----------------------
export function setFlag(flag) {
  return { type: Action.SetFlag, payload: flag };
}