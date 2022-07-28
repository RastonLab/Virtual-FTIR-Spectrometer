// export function Print() {
//   return window.print();
// }

import { forwardRef, React, useRef, useState } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";

import {Experiment2} from "../routes/Experiment2";


export default function Print() {

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
  return(
    <div>
      <button className="button" onClick={handlePrint}>Click</button>
      <Experiment2 ref={componentRef} />
    </div>
  );

}