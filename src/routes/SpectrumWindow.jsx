import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { ProcessedPlotly } from "../components/ProcessedPlotly";
import BackgroundPlotly from "../components/BackgroundPlotly";

import "../style/routes/SpectrumWindow.css";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default function SpectrumWindow() {
  const storedProcessedData = useSelector((state) => state.processedData);
  const storedBackgroundData = useSelector((state) => state.backgroundData);
  const [tabValue, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borederBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="Spectrum Window Selection">
          <Tab label="Processed Spectrum" /> {/*TODO Check aria labels */}
          <Tab label="Background Spectrum" />
          <Tab label="Both Spectra" />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        {storedProcessedData ? (
          <ProcessedPlotly />
        ) : (
          <p>Please generate a Processed Spectrum and return here</p>
        )}
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {storedBackgroundData ? (
            <BackgroundPlotly />
          ) : (
            <p>Please generate a Background Spectrum and return here</p>
          )}
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        {storedProcessedData ? (
          <ProcessedPlotly />
        ) : (
          <p>Please generate a Processed Spectrum and return here</p>
        )}
        {storedBackgroundData ? (
          <BackgroundPlotly />
        ) : (
          <p>Please generate a Background Spectrum and return here</p>
        )}
      </TabPanel>
      <Outlet />
    </Box>
  );
}
