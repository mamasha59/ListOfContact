import { RiBook2Fill } from "react-icons/ri";
import InputFind from "../InputFind/InputFind";

import './Header.css';

function Header({findPhone}) {

    return (  
        <header className="header">
            <h1 className="header__titile">List of contacts<RiBook2Fill/></h1>
            <InputFind findPhone={findPhone}/>
            <div className="header__block-utils">
           </div>
        </header>
    );
}

export default Header;