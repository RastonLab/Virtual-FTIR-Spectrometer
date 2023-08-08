import React, { useState } from "react";

// components
import CloseButton from "./CloseButton";

// mui
import { Dialog } from "@mui/material";
import { Switch } from "@mui/material";

// style
import "../style/components/LandingPage.css";

/**
 * React Router "Landing Page" for the project. Currently used as a splash page
 *
 * Information used to create this "Landing Page": https://stackoverflow.com/questions/33228589/react-router-adding-in-a-landing-page/72267552#72267552
 *
 * @param {boolean} isMenu - Determines if the popup or just page contents will be returned
 */
export default function LandingPage({ isMenu }) {
  const [checked, setChecked] = useState(
    localStorage.getItem("checked") === "true" ? true : false
  );

  const [welcomeOpen, setWelcomeOpen] = useState(
    localStorage.getItem("checked") === "true" ? false : true
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

  const pageContents = (
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
        <u className="blue">S</u>cientific <u className="indigo">I</u>nstrument
        <u className="purple">S</u>imulator
      </h2>

      <br />

      <p>Please use the navigation bar above to explore the application!</p>

      <br />

      <Switch checked={checked} onChange={handleChange} />
      <p>Hide this popup when opened?</p>
    </div>
  );

  if (isMenu) {
    return pageContents;
  } else {
    return (
      <Dialog
        className="welcome"
        open={welcomeOpen}
        onClose={() => setWelcomeOpen(false)}
      >
        <CloseButton
          id="customized-dialog-title"
          onClose={() => setWelcomeOpen(false)}
        />
        {pageContents}
      </Dialog>
    );
  }
}
