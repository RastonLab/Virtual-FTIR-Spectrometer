// URLs used to react the API either running locally or hosted online

// export const FIND_PEAKS = "http://localhost:5000/find_peaks"
export const FIND_PEAKS = "https://api.ftir.rastonlab.org/find_peaks";

// export const BACKGROUND = "http://localhost:5000/background"
export const BACKGROUND = "https://api.ftir.rastonlab.org/background";

// export const SAMPLE = "http://localhost:5000/spectrum";
export const SAMPLE = "https://api.ftir.rastonlab.org/spectrum";

// If false, will add artificial delay for background and sample scans
export let DEVELOPER_MODE = false;

export default function Toggle_Mode() {
  DEVELOPER_MODE = !DEVELOPER_MODE;
}
