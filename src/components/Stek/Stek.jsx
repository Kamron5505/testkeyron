import React, { useState, useRef } from 'react';
import "./Stek.css";

import stek1Logo from '../../assets/stek/stek1.svg';
import stek2Logo from '../../assets/stek/stek2.svg';
import stek3Logo from '../../assets/stek/stek3.svg';
import stek4Logo from '../../assets/stek/stek4.svg';
import stek5Logo from '../../assets/stek/stek5.svg';
import stek6Logo from '../../assets/stek/stek6.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

const Stek = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const indicatorsCount = 4;
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const tabTitles = [
        "Веб-разработка",
        "Мобильная разработка",
        "Десктоп-разработка",
        "Телеграм-боты"
    ];

    const goToSlide = (index) => setActiveIndex(index);
    const goPrev = () => setActiveIndex(prev => (prev === 0 ? indicatorsCount - 1 : prev - 1));
    const goNext = () => setActiveIndex(prev => (prev === indicatorsCount - 1 ? 0 : prev + 1));

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].screenX;
        const deltaX = touchEndX.current - touchStartX.current;
        if (deltaX > 50) goPrev();
        else if (deltaX < -50) goNext();
    };

    return (
        <section id='stek' className="stack">
            <div className="container stack__container">
                <h2 className="steks__title title">НАШ СТЕК</h2>

                {/* ====== Табы ====== */}
                <div className="stack__tabs">
                    {tabTitles.map((title, index) => (
                        <button
                            key={index}
                            className={`stack__tab ${index === activeIndex ? "active" : ""}`}
                            onClick={() => goToSlide(index)}
                        >
                            {title}
                        </button>
                    ))}
                </div>

                <div
                    className="stack__wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="stack__pagination">
                        <div className="indicators">
                            {Array.from({ length: indicatorsCount }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`live-pagination ${i === activeIndex ? "active" : ""}`}
                                    onClick={() => goToSlide(i)}
                                ></div>
                            ))}
                        </div>
                        <div className="arrow-buttons">
                            <img className="arrow" src={arrowLeft} alt="prev" onClick={goPrev} />
                            <img className="arrow" src={arrowRight} alt="next" onClick={goNext} />
                        </div>
                    </div>

                    <div className="stack__subtitle-wrapper">
                        <h2 className="stack__subtitle fade">
                            {tabTitles[activeIndex]}
                        </h2>
                    </div>
                </div>

                <div className="stack__grid">
                    {[stek1Logo, stek2Logo, stek3Logo, stek4Logo, stek5Logo, stek6Logo].map((logo, i) => (
                        <div key={i} className="card">
                            <div className="card__logo"><img src={logo} alt={`Logo ${i + 1}`} /></div>
                            <p className="card__name">{["FastAPI", "Django", "Flask", "Tornado", "Aiohttp", "Pyramid"][i]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stek;
