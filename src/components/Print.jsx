import { React, useRef, useState } from "react";

// components
import { SamplePlotly } from "./SamplePlotly";
import { useReactToPrint } from "react-to-print";
import ExperimentalSetup from "../routes/ExperimentalSetup";

// mui
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";

// style
import "../style/components/Print.css";
import "../style/components/Button.css";

// this component is used to print a generated spectrum and user inputs
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
            <FormControlLabel
              value="both"
              control={<Radio />}
              label="Both the Graph and Inputs"
            />
          </RadioGroup>
        </FormControl>

        <button
          id="print-button"
          className="button print-row"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
      <div style={{ display: "none" }}>
        {printOptions === "graph" && <SamplePlotly ref={componentRef} />}

        {printOptions === "both" && <ExperimentalSetup ref={componentRef} />}
      </div>
    </div>
  );
}
