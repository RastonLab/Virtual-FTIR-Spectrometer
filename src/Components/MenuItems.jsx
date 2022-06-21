import { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({items}) => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu"
                    onClick={() => setDropdown((prev) => !prev)}>
                        {items.label}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown}/>
                </>
            ) : (
                <a href="/#">{items.lable}</a>
            )}
        </li>
    );

}

export default MenuItems;