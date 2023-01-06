import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { ProcessedPlotly } from "../components/ProcessedPlotly";
import BackgroundPlotly from "../components/BackgroundPlotly";

import "../style/routes/SpectrumWindow.css";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function SpectrumWindow() {
  const storedProcessedData = useSelector((state) => state.processedData);
  const storedBackgroundData = useSelector((state) => state.backgroundData);
  const [tabValue, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borederBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="Spectrum Window Selection">
          <Tab label="Processed Spectrum" /> {/*TODO Check aria labels */}
          <Tab label="Background Spectrum" />
          <Tab label="Both Spectra" disabled />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        {storedProcessedData ? (
          <ProcessedPlotly />
        ) : (
          <p>Please generate a processed spectrum and return here</p>
        )}
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {storedBackgroundData ? (
            <BackgroundPlotly />
          ) : (
            <p>Please generate a background spectrum and return here</p>
          )}
      </TabPanel>
    </Box>
  );

  // return (
  //   <div id="spectrum-window">
  //     <div id="spectrum">
  //       {storedProcessedData ? (
  //         <ProcessedPlotly />
  //       ) : (
  //         <p>Please generate a processed spectrum and return here</p>
  //       )}
  //     </div>

  //     <div id="spectrum">
        // {storedBackgroundData ? (
        //   <BackgroundPlotly />
        // ) : (
        //   <p>Please generate a background spectrum and return here</p>
        // )}
  //     </div>
  //     <Outlet />
  //   </div>
  // );
}
