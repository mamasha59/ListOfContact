import { RiBook2Fill,RiUserFill } from "react-icons/ri";
import InputFind from "../InputFind/InputFind";
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({findPhone,profile}) {

    const exit = useNavigate(); // ----редирект

    function handleExit () {
        exit('/')
        localStorage.clear()
    }

    return (  
        <header className="header">
            <h1 className="header__titile">Ваши контакты:<RiBook2Fill/></h1>
            <InputFind findPhone={findPhone}/>
            <div className="header__block-utils">
                <div className="header__profile">
                    <RiUserFill/>{profile.name}: {profile.phone}
                </div>
                <button className="header__exit" onClick={handleExit}>Выход</button>
           </div>
        </header>
    );
}

export default Header;