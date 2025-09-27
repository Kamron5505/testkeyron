import React, { useState } from "react";
import "./header.css";

import facebookIcon from "../../assets/icons/linked.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import telegramIcon from "../../assets/icons/telegram.svg";
import burgerIcon from "../../assets/icons/burger.svg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="container header__container">
                <a href="/" className="logo">
                    <h2 className="logo__text">KEYRON</h2>
                </a>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Сферы</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Достижения</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Стек технологий</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Партнерство</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">FAQ</a></li>
                    </ul>
                </nav>

                <div className="burger" onClick={toggleMenu}>
                    <img src={burgerIcon} alt="Меню" />
                </div>

                <div className="header__socials">
                    <a href="#" className="social__link">
                        <img className="icon" src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="#" className="social__link">
                        <img className="icon" src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="#" className="social__link">
                        <img className="icon" src={telegramIcon} alt="Telegram" />
                    </a>
                </div>
            </div>

            {isOpen && (
                <div className="modal" onClick={toggleMenu}>
                    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal__close" onClick={toggleMenu}>×</button>
                        <ul className="modal__list">
                            <li><a href="#" className="modal__link">Сферы</a></li>
                            <li><a href="#" className="modal__link">Достижения</a></li>
                            <li><a href="#" className="modal__link">Стек технологий</a></li>
                            <li><a href="#" className="modal__link">Партнерство</a></li>
                            <li><a href="#" className="modal__link">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
