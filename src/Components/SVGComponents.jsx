import React, { useState } from "react";
import { ftirParts, toolTips } from "./SVGLibrary";
import { Dialog } from "@mui/material";
import '../style/SVGComponents.css';
import '../style/Popup.css';

export default function SVGComponent({part, click}) { // Style is the intial stroke
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled(!toggled)
    }

    const Component = ftirParts[part];

    return (
        <div className="component">
            <Component viewBox="-100 -100 1000 1500" className='svg' onClick={click ?? handleClick} />
            <Dialog className="popup" onClose={handleClick} open={toggled}>
                <h2>{toolTips[part].title}</h2>
                <Component viewBox="-8 0 100 100" className='example-image' />
                <p>{toolTips[part].text}</p>
            </Dialog>
        </div>
        );
    // SVG File Prep: put them through SVGOMG to strip any inkscape specific tags that would break React
    // In the SVG files, you must remove the stroke and stroke-height of the element you want outlined and you must remove the  height and width from the very first line to get the SVG to use the viewbox and scale properly
}