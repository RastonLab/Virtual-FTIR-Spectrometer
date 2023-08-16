import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App";
import ExperimentalSetup from "./routes/ExperimentalSetup";
import InstrumentWindow from "./routes/InstrumentWindow";
// import LandingPage from "./routes/LandingPage";
import NotFound from "./components/NotFound";
import SpectraWindow from "./routes/SpectraWindow";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// style
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<InstrumentWindow />} />
            <Route path="instrument" element={<InstrumentWindow />} />
            <Route path="experimental-setup" element={<ExperimentalSetup />} />
            <Route path="spectra" element={<SpectraWindow />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
