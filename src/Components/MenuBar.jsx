import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import {ReactComponent as RLLogo} from '../RastonLab-Logo-Full-Rainbow-Draft.svg';

export default function MenuBar() {

    // https://blog.logrocket.com/creating-multilevel-dropdown-menu-react/

    return (
        <div className="nav-area">
            <RLLogo className='logo' width={'58'} viewBox='-10 -158 100 400'/> 
            <Link className='logo' to='/' >The Raston Lab: FTIR</Link>
            <nav>
                <ul className="menus">
                    {menuItems.map((menu, index) => {
                        return (
                            <MenuItems items={menu} key={index} />
                        );
                    })}
                </ul>
            </nav>
        </div>
    );

}