import React from "react";

// components
import { AbsorbancePlotly } from "../components/AbsorbancePlotly";
import { Outlet } from "react-router-dom";
import { ProcessedPlotly } from "../components/ProcessedPlotly";
import { TransmittancePlotly } from "../components/TransmittancePlotly";
import BackgroundPlotly from "../components/BackgroundPlotly";

// mui components
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// redux
import { useSelector } from "react-redux";

//style
import "../style/routes/SpectrumWindow.css";

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
  "& .css-ttwr4n": {
    backgroundColor: "#f6b06a",
  },
  // "& .css-k008qs": {
  //   justifyContent: "center",
  // }
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    // textTransform: 'none',
    fontWeight: "700",
    fontSize: "2 rem",
    // marginRight: theme.spacing(1),
    // color: 'rgba(255, 255, 255, 0.7)',
    "&.Mui-selected": {
      color: "#f6b06a",
    },
    // '&.Mui-focusVisible': {
    //   backgroundColor: '#f6b06a',
    // },
  })
);

export default function SpectrumWindow() {
  const { backgroundData } = useSelector((store) => store.backgroundData);
  const { spectrumData } = useSelector((store) => store.spectrumData);
  const [tabValue, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borederBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          value={tabValue}
          onChange={handleChange}
          selectionFollowsFocus
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="Spectrum Window Selection"
        >
          <StyledTab label="Sample Spectrum" />
          <StyledTab label="Background Spectrum" />
          <StyledTab label="Transmittance Spectrum" />
          <StyledTab label="Absorbance Spectrum" />
          {/* <StyledTab label="All Spectra" /> */}
        </StyledTabs>
      </Box>

      {/* Sample Spectrum */}
      <TabPanel value={tabValue} index={0}>
        <div id="spectrum">
          {spectrumData ? (
            <ProcessedPlotly />
          ) : (
            <p>Please generate a Sample Spectrum and return here</p>
          )}
        </div>
      </TabPanel>

      {/* Background Spectrum */}
      <TabPanel value={tabValue} index={1}>
        <div id="spectrum">
          {backgroundData ? (
            <BackgroundPlotly />
          ) : (
            <p>Please generate a Background Spectrum and return here</p>
          )}
        </div>
      </TabPanel>

      {/* Transmittance Spectrum */}
      <TabPanel value={tabValue} index={2}>
        <div id="spectrum">
          {backgroundData && spectrumData ? (
            <TransmittancePlotly />
          ) : (
            <p>
              Please generate both a Sample Spectrum and a Background Spectrum
              and return here
            </p>
          )}
        </div>
      </TabPanel>

      {/* Absorbance Spectrum */}
      <TabPanel value={tabValue} index={3}>
        <div id="spectrum">
          {backgroundData && spectrumData ? (
            <AbsorbancePlotly />
          ) : (
            <p>
              Please generate both a Sample Spectrum and a Background Spectrum
              and return here
            </p>
          )}
        </div>
      </TabPanel>

      {/* All Spectra */}
      {/* <TabPanel value={tabValue} index={4}>
        <div id="spectrum">
          {spectrumData ? (
            <ProcessedPlotly />
          ) : (
            <p>Please generate a Sample Spectrum and return here</p>
          )}
        </div>

        <div id="spectrum">
          {backgroundData ? (
            <BackgroundPlotly />
          ) : (
            <p>Please generate a Background Spectrum and return here</p>
          )}
        </div>

        <div id="spectrum">
          {backgroundData && spectrumData ? (
            <TransmittancePlotly />
          ) : (
            <p>
              Please generate both a Sample Spectrum and a Background Spectrum
              and return here
            </p>
          )}
        </div>

        <div id="spectrum">
          {backgroundData && spectrumData ? (
            <AbsorbancePlotly />
          ) : (
            <p>
              Please generate both a Sample Spectrum and a Background Spectrum
              and return here
            </p>
          )}
        </div>
      </TabPanel> */}
      <Outlet />
    </Box>
  );
}
