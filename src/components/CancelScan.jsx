import { useDispatch, useSelector } from "react-redux";
import { sleepID } from "./Fetch";
import { setProgress } from "../features/progressSlice";
import { setSpinner } from "../features/spinnerSlice";
import { setTimer } from "../features/timerSlice";

export default function CancelScan() {

    const dispatch = useDispatch();
    const { progress } = useSelector((store) => store.progress);

    return (
        <button 
          onClick={() => {
            clearTimeout(sleepID); 
            dispatch(setProgress(false)); 
            dispatch(setSpinner(false)); 
            dispatch(setTimer(0));}} 
          disabled={!progress}>
          Cancel Scan
        </button>
    );
}