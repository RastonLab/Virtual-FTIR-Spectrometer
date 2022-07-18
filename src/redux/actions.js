export const Action = Object.freeze({
  StoreParams: "StoreParams",

  StoreData: "StoreData",

  ShowProgress: "ShowProgress",
  HideProgress: "HideProgress",

  ShowError: "ShowError",
  HideError: "HideError",
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
export function showProgress(progress) {
  return { type: Action.ShowProgress, payload: progress };
}
export function hideProgress(progress) {
  return { type: Action.HideProgress, payload: progress };
}

// -------------------- error text --------------------
export function showError(error) {
  return { type: Action.ShowError, payload: error };
}
export function hideError(error) {
  return { type: Action.HideError, payload: error };
}
