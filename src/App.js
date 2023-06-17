import React from "react";

// components
import MenuItems from "./components/menu/MenuItems";
import { ReactComponent as RLLogo } from "./components/svgs/RastonLabLogo.svg";

// dictionary
import { menuItems } from "./dictionaries/menuItems";

// router
import { Outlet, Link } from "react-router-dom";

// style
import "./style/App.css";

export default function App() {
  return (
    <div>
      <div className="nav-area">
        <RLLogo className="logo" width={55} height={55} viewBox="0 0 100 100" />
        <Link className="logo" to="/">
          FTIR-SIS
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
