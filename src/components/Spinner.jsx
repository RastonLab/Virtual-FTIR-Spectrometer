import { Box, CircularProgress } from "@mui/material";
import Typography from '@mui/material/Typography';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimer } from "../features/timerSlice";

export default function Spinner(props) {

    const dispatch = useDispatch();

    const { timer } = useSelector((store) => store.timer);
    const [delay, setDelay] = React.useState(timer);

    // Updates the value of the 
    React.useEffect(() => {
      if (props.timer) {
        const timer_interval = setInterval(() => {
          setDelay((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, props.timer / 100);
    
        dispatch(setTimer(delay))
  
        return () => {
          clearInterval(timer_interval);
        };
      }
    }, [props.timer, delay, dispatch]);

    return (
    <Box sx={{display: 'flex', flexDirection: "column", alignItems: "center", padding: 15}}>
    <CircularProgress {...props} value={delay} sx={{'svg circle': { stroke: 'url(#my_gradient)' } }} />
    { props.timer &&
        <Typography variant="caption" component="div" color="inherit" fontFamily="inherit" fontSize={20} fontWeight={650}>
            {Math.round(delay)}%
        </Typography>
    }

    <svg>
        <defs>
            <linearGradient id='my_gradient' x1='80%' y1='0%' x2='0%' y2='50%'>
                <stop offset='0%' stopColor='rgba(255, 0, 0, 1)' />
                <stop offset='10%' stopColor='rgba(255, 165, 0, 1)'/>
                <stop offset='30%' stopColor='rgba(255, 255, 0, 1)'/>
                <stop offset='50%' stopColor='rgba(0, 170, 0, 1)'/>
                <stop offset='70%' stopColor='rgba(0, 221, 255, 1)'/>
                <stop offset='90%' stopColor='rgba(0, 0, 255, 1)'/>
                <stop offset='100%' stopColor='rgba(147, 1, 205, 1)' />
            </linearGradient>
        </defs>
    </svg>
  </Box>
  );
}