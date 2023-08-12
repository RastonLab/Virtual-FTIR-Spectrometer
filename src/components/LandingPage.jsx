import React, { useState } from "react";

// components
import CloseButton from "./CloseButton";

// mui
import { Dialog, Checkbox } from "@mui/material";

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
    localStorage.getItem("checked") === "true" || isMenu ? false : true
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

  // In the menubar button this was causing a recursion error
  const handleClickOpen = () => {
    setWelcomeOpen(true);
  };

  const pageContents = (
    <div id="landing">
      <div id="landing-header">
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
          <u className="blue">S</u>cientific <u className="indigo">I</u>
          nstrument
          <u className="purple">S</u>imulator
        </h2>

        <p>Please use the navigation bar above to explore the application!</p>
      </div>

      <div id="landing-checkbox">
        <Checkbox checked={checked} onChange={handleChange} size="small" />
        <p>Hide popup on refresh?</p>
      </div>
    </div>
  );

  return (
    <div>
      {isMenu && (
        <button
          className="popup-button dropdown-items"
          onClick={handleClickOpen}
        >
          Landing Page
        </button>
      )}
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
    </div>
  );
}
