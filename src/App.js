import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Raston Router and Redux</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/instrument" style={{ padding: "10px" }}>
          Instrument
        </Link>
        <Link to="/setup" style={{ padding: "10px" }}>
          Setup
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
