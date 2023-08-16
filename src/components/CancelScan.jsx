// components
import { sleepID } from "./Fetch";

// functions
import { stopCornerCube } from "../functions/animation";

// redux
import { useDispatch, useSelector } from "react-redux";

// redux slice
import { setProgress } from "../redux/progressSlice";
import { setTimer } from "../redux/timerSlice";
import { setError } from "../redux/errorSlice";

/**
 * A component used in the MenuBar to stop the current scan's timer, spinner, and animation
 */
export default function CancelScan() {
  const dispatch = useDispatch();

  const { fetching } = useSelector((store) => store.progress);

  const handleClick = () => {
    clearTimeout(sleepID);
    stopCornerCube();
    dispatch(setProgress(false, false, false));
    dispatch(setTimer(0));
    dispatch(setError([true, "Scan canceled"]));
  };

  return (
    <button
      id={"cancel-scan-button"}
      onClick={handleClick}
      disabled={!fetching}
    >
      Cancel Scan
    </button>
  );
}
