import React, { useState } from "react";

// mui
import { Box, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";

// redux
import { useSelector, useDispatch } from "react-redux";

// redux slice
import { setProgress } from "../redux/progressSlice";
import { setTimer } from "../redux/timerSlice";

/**
 * A component that contains an MUI Progress (spinner) to display loading/waiting to the user
 */
export default function Spinner(props) {
  const dispatch = useDispatch();

  const { timer } = useSelector((store) => store.timer);
  const [delay, setDelay] = React.useState(timer);
  const [scansDone, setScansDone] = useState(0);

  // Updates the value of the
  React.useEffect(() => {
    if (props.timer) {
      const timer_interval = setInterval(() => {
        // If the scans are complete, turn off spinner
        if (delay >= 100) {
          dispatch(setProgress(false));
        }

        // Increment Spinner/timer
        setDelay((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 0.125
        );
      }, props.timer / 800);

      dispatch(setTimer(delay));

      // Keeps track of the number of scans done
      if (scansDone < props.scans && delay >= props.oneScan * scansDone) {
        setScansDone(scansDone + 1);
      }

      return () => {
        clearInterval(timer_interval);
      };
    }
  }, [
    props.timer,
    delay,
    dispatch,
    scansDone,
    setScansDone,
    props.scans,
    props.oneScan,
  ]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 15,
      }}
    >
      <CircularProgress
        {...props}
        value={delay}
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
      {props.timer && (
        <Typography
          variant="caption"
          component="div"
          color="inherit"
          fontFamily="inherit"
          fontSize={20}
          fontWeight={650}
          sx={{ textAlign: "center" }}
        >
          {Math.round(delay)}% <br />
          Scans Complete: {scansDone - 1}
        </Typography>
      )}

      <svg>
        <defs>
          <linearGradient id="my_gradient" x1="80%" y1="0%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="rgba(255, 0, 0, 1)" />
            <stop offset="10%" stopColor="rgba(255, 165, 0, 1)" />
            <stop offset="30%" stopColor="rgba(255, 255, 0, 1)" />
            <stop offset="50%" stopColor="rgba(0, 170, 0, 1)" />
            <stop offset="70%" stopColor="rgba(0, 221, 255, 1)" />
            <stop offset="90%" stopColor="rgba(0, 0, 255, 1)" />
            <stop offset="100%" stopColor="rgba(147, 1, 205, 1)" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
}
