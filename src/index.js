import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import App from './App';
import ExperimentalSetup from './Components/routes/ExperimentalSetup';

Sentry.init({
  dsn: "https://e7a614a92d3f4f929ae8e3de0fcebff7@o1310725.ingest.sentry.io/6558449",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/Virtual-FTIR-Spectrometer'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Experimental-Setup" element={<ExperimentalSetup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

