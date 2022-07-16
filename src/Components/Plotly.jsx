import React from "react";
import Plot from "react-plotly.js";

function Plotly({ data, params }) {
  const addSubscriptsToMolecule = (molecule) => {
    const subscripts = "₁₂₃₄₅₆₇₈₉".split("");
    return molecule
      .split("")
      .map((char) =>
        /^\d+$/.test(char) ? subscripts[parseInt(char) - 1] : char
      )
      .join("");
  };

  let modeLabel = "",
    units = "";
  if (params.mode === "absorbance") {
    modeLabel = "Absorbance";
    units = "-ln(I/I0)";
  } else if (params.mode === "transmittance_noslit") {
    modeLabel = "Transmittance";
  } else if (params.mode === "radiance_noslit") {
    modeLabel = "Radiance";
  } else {
    throw new Error("Invalid mode");
  }

  if (data) {
    // https://github.com/suzil/radis-app/blob/main/frontend/src/components/CalcSpectrumPlot.tsx
    return (
      <>
        {
          <Plot
            className="Plot"
            data={[
              {
                x: data.data.x,
                y: data.data.y,
                type: "scatter",
                marker: { color: "#f50057" },
              },
            ]}
            layout={{
              width: 800,
              height: 600,
              title: `Spectrum for ${params.species
                .map(({ molecule, mole_fraction }) => {
                  const moleculeWithSubscripts = addSubscriptsToMolecule(
                    molecule || ""
                  );
                  return `${moleculeWithSubscripts} (χ${moleculeWithSubscripts.sub()} = ${Number(
                    mole_fraction
                  )})`;
                })
                .join(", ")}`,
              font: { family: "Roboto", color: "#000" },
              xaxis: {
                range: [
                  params.min_wavenumber_range,
                  params.max_wavenumber_range,
                ],
                title: { text: "Wavenumber (cm⁻¹)" },
                rangeslider: {
                  autorange: true,
                  yaxis: { rangemode: "auto" },
                },
                type: "linear",
              },
              yaxis: {
                autorange: true,
                title: {
                  text: `${modeLabel}${units.length ? " (" + units + ")" : ""}`,
                },
                type: "linear",
                fixedrange: false,
              },
            }}
          />
        }
      </>
    );
  } else {
    return <div></div>;
  }
}

export default Plotly;
