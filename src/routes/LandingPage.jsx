import React from "react";

// style
import "../style/routes/LandingPage.css";

// https://reactrouter.com/docs/en/v6/getting-started/concepts#defining-routes
// https://stackoverflow.com/a/72267552/17386696
export default function LandingPage() {
  return (
    <div id="landing-page">
      <h1>Welcome to FITR-SIS!</h1>
      <h2><u>F</u>ourier <u>T</u>ransform <u>I</u>nfra<u>R</u>ed-<u>S</u>cientific <u>I</u>nstrument <u>S</u>imulator</h2>
      <br/>
      <p>Please use the navigation bar above to explore the application!</p>
    </div>
  );
}
