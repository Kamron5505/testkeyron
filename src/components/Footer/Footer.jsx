import React from 'react';
import instagramIcon from "../../assets/icons/instagram.svg";
import telegramIcon from "../../assets/icons/telegram.svg";
import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <a href="/" className="footer__logo">
                    <h2 className="footer__logo-text">KEYRON</h2>
                </a>

                <nav className="footer__nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Сферы</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Достижения</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Стек технологий</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Партнерство</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">FAQ</a></li>
                    </ul>
                </nav>

                <div className="footer__socials">
                    <a href="#" className="social__link">
                        <img className="icon" src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="#" className="social__link">
                        <img className="icon" src={telegramIcon} alt="Telegram" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
