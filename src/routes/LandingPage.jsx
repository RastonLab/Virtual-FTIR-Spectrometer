import React, { useState } from "react";

// components
import { Switch } from "@mui/material";

// style
import "../style/routes/LandingPage.css";

/**
 * React Router "Landing Page" for the project. Currently used as a splash page
 *
 * Information used to create this "Landing Page": https://stackoverflow.com/questions/33228589/react-router-adding-in-a-landing-page/72267552#72267552
 */
export default function LandingPage() {
  const [checked, setChecked] = useState(
    localStorage.getItem("checked") === "true" ? true : false
  );

  const handleChange = (event) => {
    if (event.target.checked) {
      localStorage.setItem("checked", "true");
      setChecked(true);
    } else {
      localStorage.setItem("checked", "false");
      setChecked(false);
    }
  };

  return (
    <div id="landing-page">
      <h1>
        Welcome to
        <span className="red"> F</span>
        <span className="orange">T</span>
        <span className="yellow">I</span>
        <span className="green">R</span>
        <span className="teal">-</span>
        <span className="blue">S</span>
        <span className="indigo">I</span>
        <span className="purple">S</span>!
      </h1>

      <h2>
        <u className="red">F</u>ourier <u className="orange">T</u>ransform{" "}
        <u className="yellow">I</u>nfra<u className="green">R</u>ed
        <span className="teal">-</span>
        <u className="blue">S</u>cientific <u className="indigo">I</u>nstrument{" "}
        <u className="purple">S</u>imulator
      </h2>

      <br />

      <p>Please use the navigation bar above to explore the application!</p>

      <br />

      <Switch checked={checked} onChange={handleChange} />
      <p>Hide this popup when opened?</p>
    </div>
  );
}
