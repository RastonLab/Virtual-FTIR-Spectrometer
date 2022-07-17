import React, { useState } from "react";

import { Dialog } from "@mui/material";

import { ftirParts, toolTips, ttImgSrc } from "../dictionaries/SVGLibrary";

import "../style/App.css";

export default function SVGComponent({ part, click }) {
  // Style is the intial stroke
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!toggled);
  };

  // const bbox = ftirParts[part].getBBox();
  // const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");

  const Component = ftirParts[part];

  return (
    <div className="component">
      <Component
        viewBox="-75 -0.5 418 212"
        className="svg"
        onClick={click ?? handleClick}
      />
      <Dialog className="popup" onClose={handleClick} open={toggled}>
        <h2>{toolTips[part].title}</h2>
        <img
          src={ttImgSrc[part]}
          id={`${part}-example-image`}
          className="example-image"
          alt=""
        />
        {/* ^^ do this part in the library??? */}
        <p>{toolTips[part].text}</p>
      </Dialog>
    </div>
  );
  // SVG File Prep: put them through SVGOMG to strip any inkscape specific tags that would break React
  // In the SVG files, you must remove the stroke and stroke-height of the element you want outlined and you must remove the  height and width from the very first line to get the SVG to use the viewbox and scale properly
}
