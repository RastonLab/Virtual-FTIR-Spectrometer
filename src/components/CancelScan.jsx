import { useDispatch, useSelector } from "react-redux";
import { sleepID } from "./Fetch";
import { setProgress } from "../features/progressSlice";
import { setSpinner } from "../features/spinnerSlice";

export default function CancelScan() {

    const dispatch = useDispatch();
    const { progress } = useSelector((store) => store.progress);

    return (
        <button onClick={() => {clearTimeout(sleepID); dispatch(setProgress(false)); dispatch(setSpinner(false));        }} disabled={!progress}>
          Cancel Scan
        </button>
    );
}