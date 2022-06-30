import React, { useState } from "react";
import { ftirParts } from "./SVGLibrary";
// import Tooltip from "./Tooltip";

export default function SVGComponent({part, style, click}) { // Style is the intial stroke
    const [toggled, setToggled] = useState(false);

    const handleClick = (ev) => {
        setToggled(!toggled)
    }

    const Component = ftirParts[part];

    return (<Component className='svg' onClick={click ?? handleClick} />);
    // SVG File Prep: put them through SVGOMG to strip any inkscape specific tags that would break React
    // In the SVG files, you must remove the stroke and stroke-height of the element you want outlined and you must remove the  height and width from the very first line to get the SVG to use the viewbox and scale properly
}