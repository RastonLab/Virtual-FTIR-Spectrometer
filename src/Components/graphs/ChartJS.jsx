import React from "react";
import {Line} from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(...registerables);
Chart.register(zoomPlugin);

function ChartJS({ data }) {

  if (data) {
    const fulldata = {
      labels: data.data.x,
      datasets: [{
        label: '',
        data: data.data.y,
        backgroundColor: 'purple',
        borderColor: 'hsl(30,88%,69%)'

      }]
    }

    const options ={
      plugins:{
        legend:{
          display: false
        },
        zoom: {
          pan: {
            enabled: true,
            mode: 'xy'
          },
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true
            },
            mode: 'xy',
          }
        }
      },
      scales: {
        x: {
          type: "linear",
          title: {
            display: true,
            text: "Wavenumber cm-1",
          },
        },
        y: {
          title: {
            display: true,
            text: "Absorbance (-ln(I/IO))",
          },
        },
      },
    };

    return (
      <div>
        <Line height={"600"} width={"1000"} data={fulldata} options={options} />
      </div>
    );
  } else {
    return;
  }
}

export default ChartJS;
