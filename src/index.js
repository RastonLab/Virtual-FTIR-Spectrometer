import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App";
import ExperimentalSetup from "./routes/ExperimentalSetup";
import InstrumentWindow from "./routes/InstrumentWindow";
import LandingPage from "./routes/LandingPage";
import NotFound from "./components/NotFound";
import SpectrumWindow from "./routes/SpectrumWindow";

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
