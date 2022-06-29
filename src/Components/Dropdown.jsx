import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({submenus, dropdown}) => {

    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => {
                return (
                <li key={index} className="menu-items">
                {/* <a target={submenu.target ?? ''} href={`${submenu.link ?? '/#'}`}>{submenu.label}</a> */}
                <Link to={submenu.link ?? ''} >{submenu.label}</Link>
                </li>);
            })}
        </ul>
    );

}

export default Dropdown;