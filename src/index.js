import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import ExperimentalSetup from './Components/routes/ExperimentalSetup';



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

