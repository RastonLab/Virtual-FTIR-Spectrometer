import { MenuItem, Select } from "@mui/material";
import React from "react";

export default function Molecule({ val, setter }) {
  return (
    <div className="input">
      <label htmlFor="molecule">Molecule</label>
      <Select
        id="molecule"
        value={val}
        onChange={(e) => setter(e.target.value)}
      >
        <MenuItem value="C2H2">
          C<sub>2</sub>H<sub>2</sub>
        </MenuItem>
        <MenuItem value="C2H4">
          C<sub>2</sub>H<sub>4</sub>
        </MenuItem>
        <MenuItem value="C2H6">
          C<sub>2</sub>H<sub>6</sub>
        </MenuItem>
        <MenuItem value="C2N2">
          C<sub>2</sub>N<sub>2</sub>
        </MenuItem>
        <MenuItem value="C4H2">
          C<sub>4</sub>H<sub>2</sub>
        </MenuItem>
        <MenuItem value="CF4">
          CF<sub>4</sub>
        </MenuItem>
        <MenuItem value="CH3Br">
          CH<sub>3</sub>Br
        </MenuItem>
        <MenuItem value="CH3Cl">
          CH<sub>3</sub>Cl
        </MenuItem>
        <MenuItem value="CH3CN">
          CH<sub>3</sub>CN
        </MenuItem>
        <MenuItem value="CH3OH">
          CH<sub>3</sub>OH
        </MenuItem>
        <MenuItem value="CH4">
          CH<sub>4</sub>
        </MenuItem>
        <MenuItem value="ClO">ClO</MenuItem>
        <MenuItem value="ClONO2">
          ClNO<sub>2</sub>
        </MenuItem>
        <MenuItem value="CO">CO</MenuItem>
        <MenuItem value="CO2">
          CO<sub>2</sub>
        </MenuItem>
        <MenuItem value="COCl2">
          COCl<sub>2</sub>
        </MenuItem>
        <MenuItem value="COF2">
          COF<sub>2</sub>
        </MenuItem>
        <MenuItem value="CS">CS</MenuItem>
        <MenuItem value="H2">
          H<sub>2</sub>
        </MenuItem>
        <MenuItem value="H2CO">
          H<sub>2</sub>CO
        </MenuItem>
        <MenuItem value="H2O">
          H<sub>2</sub>O
        </MenuItem>
        <MenuItem value="H2O2">
          H<sub>2</sub>O<sub>2</sub>
        </MenuItem>
        <MenuItem value="H2S">
          H<sub>2</sub>S
        </MenuItem>
        <MenuItem value="HBr">HBr</MenuItem>
        <MenuItem value="HC3N">
          HC<sub>3</sub>N
        </MenuItem>
        <MenuItem value="HCl">HCl</MenuItem>
        <MenuItem value="HCN">HCN</MenuItem>
        <MenuItem value="HCOOH">HCOOH</MenuItem>
        <MenuItem value="HF">HF</MenuItem>
        <MenuItem value="HI">HI</MenuItem>
        <MenuItem value="HNO3">
          HNO<sub>3</sub>
        </MenuItem>
        <MenuItem value="HO2">
          HO<sub>2</sub>
        </MenuItem>
        <MenuItem value="HOBr">HOBr</MenuItem>
        <MenuItem value="HOCl">HOCl</MenuItem>
        <MenuItem value="N2">
          N<sub>2</sub>
        </MenuItem>
        <MenuItem value="N2O">
          N<sub>2</sub>o
        </MenuItem>
        <MenuItem value="NH3">
          NH<sub>3</sub>
        </MenuItem>
        <MenuItem value="NO">NO</MenuItem>
        <MenuItem value="NO+">NO+</MenuItem>
        <MenuItem value="NO2">
          NO<sub>2</sub>
        </MenuItem>
        <MenuItem value="O">O</MenuItem>
        <MenuItem value="O2">
          O<sub>2</sub>
        </MenuItem>
        <MenuItem value="O3">
          O<sub>3</sub>
        </MenuItem>
        <MenuItem value="OCS">OCS</MenuItem>
        <MenuItem value="OH">OH</MenuItem>
        <MenuItem value="PH3">
          PH<sub>3</sub>
        </MenuItem>
        <MenuItem value="SF6">
          SF<sub>6</sub>
        </MenuItem>
        <MenuItem value="SO2">
          SO<sub>2</sub>
        </MenuItem>
        <MenuItem value="SO3">
          SO<sub>3</sub>
        </MenuItem>
      </Select>
    </div>
  );
}
