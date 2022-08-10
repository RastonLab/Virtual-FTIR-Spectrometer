import { React, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";

import ExperimentalSetup from "../routes/ExperimentalSetup";
import { Plotly } from "./Plotly";
import "../style/Print.css";

export default function Print() {
  const componentRef = useRef();
  const [printOptions, setPrintOptions] = useState("both");

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onSelect = (event) => {
    setPrintOptions(event.target.value);
  };

  return (
    <div>
      <h1>Print</h1>
      <h3>Would you like to print</h3>
      <div className="flex">
        <FormControl className="print-row">
          <RadioGroup
            aria-labelledby="print-selection"
            defaultValue="female"
            name="radio-buttons-group"
            row
            value={printOptions}
            onChange={onSelect}
          >
            <FormControlLabel
              value="graph"
              control={<Radio />}
              label="Just the Graph"
            />
            {/* <FormControlLabel value="input" control={<Radio />} label="Just the Inputs" /> */}
            <FormControlLabel
              value="both"
              control={<Radio />}
              label="Both the Graph and Inputs"
            />
          </RadioGroup>
        </FormControl>

        <button className="print-button button print-row" onClick={handlePrint}>
          Print
        </button>
      </div>
      <div style={{ display: "none" }}>
        {printOptions === "graph" && <Plotly ref={componentRef} />}

        {printOptions === "both" && <ExperimentalSetup ref={componentRef} />}
      </div>
    </div>
  );
}
