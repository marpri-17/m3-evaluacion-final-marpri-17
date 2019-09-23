import React from 'react';
import logo from '../images/logo-adalab.png';
import '../stylesheets/footer.scss'

const mediaLink = "https://github.com/marpri-17"

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Promoción Grace 2019.
                <a className="footer__link" href={mediaLink}>
                    <i className="fab fa-github footer_icon"></i>
                </a>
            </p>
            <img src={logo} alt="Logo adalab" className="footer__logo" />
        </footer>
    )

}

export default Footer;