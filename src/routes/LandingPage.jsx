import React from "react";

// style
import "../style/routes/LandingPage.css";

// https://reactrouter.com/docs/en/v6/getting-started/concepts#defining-routes
// https://stackoverflow.com/a/72267552/17386696
export default function LandingPage() {
  return (
    <div id="landing-page">
      <h1>Welcome to Virtual Instruments: FTIR!</h1>

      <p>Please use the navigation bar above to traverse the application!</p>
    </div>
  );
}
