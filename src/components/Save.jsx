// style
import { useSelector } from "react-redux";
import "../style/components/Print.css";

// CSV
import { CSVDownload } from "react-csv";
import { useState } from "react";

export default function Save() {

    const {
        beamsplitter,
        detector,
        medium,
        molecule,
        pressure,
        resolution,
        scan,
        source,
        waveMax,
        waveMin,
        window,
        zeroFill,
      } = useSelector((store) => store.parameter);

    const { peaksData } = useSelector((store) => store.peaksData);
    const { absorbanceData } = useSelector((store) => store.absorbanceData);
    const { backgroundData } = useSelector((store) => store.backgroundData);
    const { spectrumData } = useSelector((store) => store.spectrumData);

    const [data, setData] = useState();
    const [printPeaks, setPrintPeaks] = useState(false);
    const [printAbsorb, setPrintAbsorb] = useState(false);
    const header = [`Spectrum details | Min Wavenumber: ${waveMin} Max Wavenumber: ${waveMax} Molecule: ${molecule} Pressure: ${pressure} Resolution: ${resolution} Number of Scans: ${scan} Zero Fill: ${zeroFill} Source: ${source} Beamsplitter: ${beamsplitter} Cell Window: ${window} Detector: ${detector} Medium: ${medium}`];

    const peaksCSV = () => {

        setPrintAbsorb(false); 
        let newData = [];

        for (const [peak, intensity] of Object.entries(peaksData.peaks)) {
            newData.push([peak, intensity]);
        }

        setData(newData);
        setPrintPeaks(true);
    }


    const absorbCSV = () => {

        setPrintPeaks(false);
        let newData = [];

        // easier to save in store and pull from there instead of repeating all the checks for Absorbance Data
        for (let i = 0; i < absorbanceData.x.length; i++) {
          newData.push([absorbanceData.x[i], absorbanceData.y[i]]);
        }

        setData(newData);
        setPrintAbsorb(true);
    }


    return (
        <div>
            {/* NOTE: cannot control filenames at the moment */}
            {printPeaks && <CSVDownload headers={header} data={data} target="."/>}
            {printAbsorb && <CSVDownload headers={header} data={data} target="."/>}

            <h1>Save Data</h1>

            {
                spectrumData && backgroundData &&
                <h3>What data would you like to save?</h3>
            }

            {
                (!spectrumData || !backgroundData) &&
                <h3>There is currently no data to save</h3>
            }

            <div className="save-col">

                {
                    peaksData &&
                    <button 
                        className="button"
                        onClick={peaksCSV}
                    >
                        Save Peaks Data
                    </button>
                }


                {
                    spectrumData && backgroundData &&
                    <button 
                        className="button"
                        onClick={absorbCSV}
                        >
                        Save Absorbance Spectrum Data
                    </button>
                }

            </div>
        </div>
        
    );


}