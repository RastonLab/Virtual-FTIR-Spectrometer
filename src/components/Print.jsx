import { React, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import {Experiment2} from "../routes/Experiment2";


export default function Print() {

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
  return(
    <div>
      <button className="button" onClick={handlePrint}>Click</button>
      <div style={{display: "none"}}>
        <Experiment2 ref={componentRef} />
      </div>
    </div>
  );

}