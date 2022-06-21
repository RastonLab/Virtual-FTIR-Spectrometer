import React from "react";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

export default function MenuBar() {


    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) => {
                    return (
                        <MenuItems items={menu} key={index} />
                    );
                })}
            </ul>
        </nav>
    );

}