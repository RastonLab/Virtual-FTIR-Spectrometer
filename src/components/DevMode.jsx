// redux
import { useDispatch, useSelector } from "react-redux";

// redux slice
import { setDevMode } from "../redux/devModeSlice";

export default function DevMode() {
  const dispatch = useDispatch();

  const { devMode } = useSelector((store) => store.devMode);

  const toggleDevMode = () => {
    if (devMode) {
      dispatch(setDevMode(false));
    } else {
      dispatch(setDevMode(true));
    }
  };

  return (
    <button
      style={{
        backgroundColor: devMode ? "rgb(246, 176, 106)" : "inherit",
        color: devMode ? "black" : "inherit",
      }}
      className="button"
      onClick={toggleDevMode}
    >
      Toggle Developer Mode
    </button>
  );
}
