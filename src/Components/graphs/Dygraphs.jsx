import React, { useEffect } from "react";
// import Dygraph from "dygraphs";
import Dygraph from "react-dygraphs/dist/components/Dygraph";

function Dygraphs({ data }) {
  const convertData = () => {
    let finalData = "";
    for (let i = 0; i < data.data.x.length; i++) {
      finalData += data.data.x[i] + "\t" + data.data.y[i] + "\r\n";
    }
    return finalData;
  };

  const generateGraph = () => {
    return new Dygraph(document.getElementById("graph"), convertData(), {
      legend: "always",
      xlabel: "Wavenumber (cm-1)",
      ylabel: "Absorbance(-In(I/IO))",
    });
  };

  useEffect(() => {
    if (data) {
      generateGraph();
    }
  });

  return <div id="graph"></div>;
}

export default Dygraphs;
