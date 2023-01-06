import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { ProcessedPlotly } from "../components/ProcessedPlotly";
import BackgroundPlotly from "../components/BackgroundPlotly";

import "../style/routes/SpectrumWindow.css";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

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

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
  ))({
  // '& .MuiTabs-indicator ': {
  //     // display: 'flex',
  //     // justifyContent: 'center',
  //     // backgroundColor: 'transparent',
  //     color: '#f6b06a'
  //   },
    '& .css-ttwr4n': {
      backgroundColor: '#f6b06a'
    }
  }
);

const StyledTab = styled((props) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  // textTransform: 'none',
  fontWeight: '700',
  fontSize: '2 rem',
  // marginRight: theme.spacing(1),
  // color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#f6b06a',
  },
  // '&.Mui-focusVisible': {
  //   backgroundColor: '#f6b06a',
  // },
}));

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
        <StyledTabs value={tabValue} onChange={handleChange} centered selectionFollowsFocus aria-label="Spectrum Window Selection">
          <StyledTab label="Processed Spectrum" /> {/*TODO Check aria labels */}
          <StyledTab label="Background Spectrum" />
          <StyledTab label="Both Spectra" />
        </StyledTabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <div id="spectrum">
          {storedProcessedData ? (
            <ProcessedPlotly />
          ) : (
            <p>Please generate a Processed Spectrum and return here</p>
          )}
        </div>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <div id="spectrum">
          {storedBackgroundData ? (
              <BackgroundPlotly />
            ) : (
              <p>Please generate a Background Spectrum and return here</p>
            )}
        </div>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <div id="spectrum">
          {storedProcessedData ? (
            <ProcessedPlotly />
          ) : (
            <p>Please generate a Processed Spectrum and return here</p>
          )}
        </div>

        <div id="spectrum">
          {storedBackgroundData ? (
            <BackgroundPlotly />
          ) : (
            <p>Please generate a Background Spectrum and return here</p>
          )}
        </div>
      </TabPanel>
      <Outlet />
    </Box>
  );
}
