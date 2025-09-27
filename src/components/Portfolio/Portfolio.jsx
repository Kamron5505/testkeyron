import React from 'react'
import './Portfolio.css';

function PortfolioSection() {
    return (
        <section className="portfolio">
            <div className="container">
                <h2 className="portfolio__title">ПОРТФОЛИО</h2>

                <div className="portfolio__nav">
                    <h2 className="portfolio__nav-title">Веб-разработка</h2>
                    <div className="portfolio__nav-swiper">
                        элименты swwiper
                    </div>
                </div>

                <div className="portfolio__list">

                    <div className="portfolio__card">
                        <div className="portfolio__card-image"></div>
                        <h2 className="portfolio__card-title">Трекинг система для баеров</h2>
                        <p className="portfolio__card-text">Система аналитики трафика для баеров</p>
                        <button className="portfolio__card-btn">Сделать похожий проект</button>
                    </div>

                    <div className="portfolio__card">
                        <div className="portfolio__card-image"></div>
                        <h2 className="portfolio__card-title">Трекинг система для баеров</h2>
                        <p className="portfolio__card-text">Система аналитики трафика для баеров</p>
                        <button className="portfolio__card-btn">Сделать похожий проект</button>
                    </div>

                    <div className="portfolio__card">
                        <div className="portfolio__card-image"></div>
                        <h2 className="portfolio__card-title">Трекинг система для баеров</h2>
                        <p className="portfolio__card-text">Система аналитики трафика для баеров</p>
                        <button className="portfolio__card-btn">Сделать похожий проект</button>
                    </div>

                    <div className="portfolio__card">
                        <div className="portfolio__card-image"></div>
                        <h2 className="portfolio__card-title">Трекинг система для баеров</h2>
                        <p className="portfolio__card-text">Система аналитики трафика для баеров</p>
                        <button className="portfolio__card-btn">Сделать похожий проект</button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default PortfolioSection;
