import { useDispatch, useSelector } from "react-redux";
import { sleepID } from "./Fetch";
import { setProgress } from "../redux/progressSlice";
import { setSpinner } from "../redux/spinnerSlice";
import { setTimer } from "../redux/timerSlice";

export default function CancelScan() {
  const dispatch = useDispatch();
  const { progress } = useSelector((store) => store.progress);

  const handleClick = () => {
    clearTimeout(sleepID);
    dispatch(setProgress(false));
    dispatch(setSpinner(false));
    dispatch(setTimer(0));
  };

  return (
    <button onClick={handleClick} disabled={!progress}>
      Cancel Scan
    </button>
  );
}
