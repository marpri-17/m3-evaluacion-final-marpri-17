import React from 'react';
import logo from '../images/Rick_and_Morty_-_logo.png';
import '../stylesheets/header.scss';

const Header = () => {
    return (
        <div className="header__wrapper">
            <img src={logo} alt="Rick y Morty" className="header__logo" />
        </div>
    )

}

export default Header;