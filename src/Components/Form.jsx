import React from "react";
import Database from "./inputs/Database";
import MaxWave from "./inputs/MaxWave";
import MinWave from "./inputs/MinWave";
import Mode from "./inputs/Mode";
import Molecule from "./inputs/Molecule";
import MoleFraction from "./inputs/MoleFraction";
import PathLength from "./inputs/PathLength";
import Pressure from "./inputs/Pressure";
import Tgas from "./inputs/Tgas";

function Input({ params, setParams }) {
  return (
    <div id="fourm">
      <Database params={params} setParams={setParams} />

      <Mode params={params} setParams={setParams} />

      <MinWave params={params} setParams={setParams} />

      <MaxWave params={params} setParams={setParams} />

      <Tgas params={params} setParams={setParams} />

      <Pressure params={params} setParams={setParams} />

      <PathLength params={params} setParams={setParams} />

      <Molecule params={params} setParams={setParams} />

      <MoleFraction params={params} setParams={setParams} />
    </div>
  );
}

export default Input;
