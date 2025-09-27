import React from 'react';
import "./Stek.css";

import stek1Logo from '../../assets/stek/stek1.svg';
import stek2Logo from '../../assets/stek/stek2.svg';
import stek3Logo from '../../assets/stek/stek3.svg'
import stek4Logo from '../../assets/stek/stek4.svg';
import stek5Logo from '../../assets/stek/stek5.svg';
import stek6Logo from '../../assets/stek/stek6.svg';

const Stek = () => {
    return (
        <section className="stack">
            <div className="container">
                <h2 className=" sphers__title title">НАШ СТЕК</h2>

                <div className="stack__tabs">
                    <a href="#" className="stack__tab-item stack__tab-item--active">Веб-разработка</a>
                    <a href="#" className="stack__tab-item">Мобильная разработка</a>
                    <a href="#" className="stack__tab-item">Десктоп-разработка</a>
                    <a href="#" className="stack__tab-item">Телеграм-боты</a>
                </div>

                <div className="stack__grid">

                    <div className="card card--fastapi">
                        <div className="card__logo">
                            <img src={stek1Logo} alt="FastAPI Logo" />
                        </div>
                        <p className="card__name">FastAPI</p>
                    </div>

                    <div className="card card--django">
                        <div className="card__logo">
                            <img src={stek2Logo} alt="Django Logo" />
                        </div>
                        <p className="card__name">Django</p>
                    </div>

                    <div className="card card--flask">
                        <div className="card__logo">
                            <img src={stek3Logo} alt="Flask Logo" />
                        </div>
                        <p className="card__name">Flask</p>
                    </div>

                    <div className="card card--tornado">
                        <div className="card__logo">
                            <img src={stek4Logo} alt="Tornado Logo" />
                        </div>
                        <p className="card__name">Tornado</p>
                    </div>

                    <div className="card card--aiohttp">
                        <div className="card__logo">
                            <img src={stek5Logo} alt="Aiohttp Logo" />
                        </div>
                        <p className="card__name">Aiohttp</p>
                    </div>

                    <div className="card card--pyramid">
                        <div className="card__logo">
                            <img src={stek6Logo} alt="Pyramid Logo" />
                        </div>
                        <p className="card__name">Pyramid</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Stek;
