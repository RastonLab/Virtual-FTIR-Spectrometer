#!/bin/sh

echo "-------------------------------"
echo "STARTING SVG REPLACEMENT SCRIPT"
echo "-------------------------------"

echo

echo -n "removing width..."
sed -i '0,/width={/{//d}' ./src/components/svgs/InstrumentSVG.jsx
printf "%-14s DONE\n"

echo -n "removing height..."
sed -i '0,/height={/{//d}' ./src/components/svgs/InstrumentSVG.jsx
printf "%-13s DONE\n"

echo -n "updating ZnSe beamsplitter..."
sed -i 's/"props.beamsplitter.znse"/props.beamsplitter.znse/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-2s DONE\n"

echo -n  "updating CaF2 beamsplitter..."
sed -i 's/"props.beamsplitter.caf2"/props.beamsplitter.caf2/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-2s DONE\n"

echo -n  "updating Tungsten source..."
sed -i 's/"props.source.tungsten"/props.source.tungsten/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-4s DONE\n"

echo -n  "updating Globar source..."
sed -i 's/"props.source.globar"/props.source.globar/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-6s DONE\n"

echo -n  "updating ZnSe cell window..."
sed -i 's/"props.window.znse"/props.window.znse/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-3s DONE\n"

echo -n  "updating CaF2 cell window..."
sed -i 's/"props.window.caf2"/props.window.caf2/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-3s DONE\n"

echo -n  "updating InSb detector..."
sed -i 's/"props.detector.insb"/props.detector.insb/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-6s DONE\n"

echo -n  "updating MCT detector..."
sed -i 's/"props.detector.mct"/props.detector.mct/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-7s DONE\n"

echo -n  "updating OPD readout..."
sed -i 's/"props.opd"/props.opd/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-8s DONE\n"

echo -n  "updating scans readout..."
sed -i 's/"props.scan"/props.scan/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-6s DONE\n"

echo -n  "updating range readout..."
sed -i 's/"props.range"/props.range/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-6s DONE\n"

echo -n  "updating resolution readout..."
sed -i 's/"props.resolution"/props.resolution/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-1s DONE\n"

echo -n  "updating molecule on lecture..."
sed -i 's/"props.molecule"/props.molecule/g' ./src/components/svgs/InstrumentSVG.jsx
printf "%-0s DONE\n"

echo

echo "----------------------------"
echo "COMPLETED REPLACEMENT SCRIPT"
echo "----------------------------"