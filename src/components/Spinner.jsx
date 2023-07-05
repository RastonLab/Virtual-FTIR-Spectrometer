import { Box, CircularProgress } from "@mui/material";

export default function Spinner(spinnerType, size) {


    return (
    <Box sx={{display: 'flex', flexDirection: "column", alignItems: "center", padding: 15}}>
    <CircularProgress variant="indeterminate" value={100} sx={{'svg circle': { stroke: 'url(#my_gradient)' } }} size={100}/>
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