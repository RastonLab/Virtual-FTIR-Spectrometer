import React from "react";
import { Outlet, Link } from "react-router-dom";

import { menuItems } from "./dictionaries/menuItems";
import MenuItems from "./components/menu/MenuItems";

import { ReactComponent as RLLogo } from "./RastonLab-Logo-Full-Rainbow-Draft.svg";

export default function App() {
  return (
    <div>
      <div className="nav-area">
        <RLLogo className="logo" width={"58"} viewBox="-10 -158 100 400" />
        <Link className="logo" to="/">
          The Raston Lab: FTIR
        </Link>

        <nav>
          <ul className="menus">
            {menuItems.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
