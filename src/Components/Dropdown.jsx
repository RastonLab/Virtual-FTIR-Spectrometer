import React from "react";

const Dropdown = ({submenus, dropdown}) => {

    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => {
                return (
                <li key={index} className="menu-items">
                <a target={submenu.target ?? ''} href={`${submenu.link ?? '/#'}`}>{submenu.label}</a>
                </li>);
            })}
        </ul>
    );

}

export default Dropdown;