import { useDispatch, useSelector } from "react-redux";
import { setDevMode } from "../features/devModeSlice";

export default function DevMode() {

    const { devMode } = useSelector((store) => store.devMode);
    const dispatch = useDispatch();

    return (
      <button onClick={dispatch(setDevMode(!devMode))}>Toggle Developer Mode</button>
    );
  }