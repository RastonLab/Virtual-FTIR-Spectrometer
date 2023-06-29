import { useDispatch, useSelector } from "react-redux";
import { sleepID } from "./Fetch";
import { setProgress } from "../features/progressSlice";

export default function CancelScan() {

    const dispatch = useDispatch();
    const { progress } = useSelector((store) => store.progress);

    return (
        <button className="button" onClick={() => {clearTimeout(sleepID); dispatch(setProgress(false));}} disabled={!progress}>
          Cancel Scan
        </button>
    );
}