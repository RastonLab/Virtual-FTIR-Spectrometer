import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import InstrumentWindow from "./routes/InstrumentWindow";
import ExperimentalSetup from "./routes/ExperimentalSetup";
import SpectrumWindow from "./routes/SpectrumWindow";
import NotFound from "./components/NotFound";
import LandingPage from "./routes/LandingPage";

import "./index.css";
import store from "./redux/store";

// -------------------- react router --------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Virtual-FTIR-Spectrometer/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            <Route path="instrument" element={<InstrumentWindow />} />
            <Route path="experimental-setup" element={<ExperimentalSetup />} />
            <Route path="spectrum" element={<SpectrumWindow />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
