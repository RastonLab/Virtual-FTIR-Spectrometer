export const Action = Object.freeze({
  StoreParams: "StoreParams",

  StoreData: "StoreData",

  SetProgress: "SetProgress",

  SetError: "SetError",
});

// -------------------- calc_spectrum parameters --------------------
export function storeParams(params) {
  return { type: Action.StoreParams, payload: params };
}

// -------------------- graph data (Plotly) --------------------
export function storeData(data) {
  return { type: Action.StoreData, payload: data };
}

// -------------------- progress spinner --------------------
export function setProgress(progress) {
  return { type: Action.SetProgress, payload: progress };
}

// -------------------- error text --------------------
export function setError(error) {
  return { type: Action.SetError, payload: error };
}
