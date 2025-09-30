import React, { useRef, useState } from 'react'
import './Portfolio.css'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'

function PortfolioSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const indicatorsCount = 4
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    const headings = [
        "Веб-разработка",
        "Мобильная разработка ",
        "Декстоп-разработка",
        "Телеграм-боты"
    ]

    const goToSlide = (index) => {
        setActiveIndex(index)
    }

    const goPrev = () => {
        setActiveIndex((prev) => (prev === 0 ? indicatorsCount - 1 : prev - 1))
    }

    const goNext = () => {
        setActiveIndex((prev) => (prev === indicatorsCount - 1 ? 0 : prev + 1))
    }

    return (
        <section className='portfolio'>
            <div className="container">
                <div className="portfolio__wrapper">
                    <h2 className='portfolio__title'>ПОРТФОЛИО</h2>
                    <div className="portfolio__pagination">
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
                            <img
                                ref={prevRef}
                                className="arrow"
                                src={arrowLeft}
                                alt="prev"
                                onClick={goPrev}
                            />
                            <img
                                ref={nextRef}
                                className="arrow"
                                src={arrowRight}
                                alt="next"
                                onClick={goNext}
                            />
                        </div>
                    </div>

                </div>
                <h2 key={activeIndex} className="portfolio__subtitle fade">
                    {headings[activeIndex]}
                </h2>
                <div className="portfolio__list">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className='portfolio__card'>
                            <div className='portfolio__card-image'></div>
                            <h2 className='portfolio__card-title'>Трекинг система для баеров</h2>
                            <p className='portfolio__card-text'>Система аналитики трафика для баеров</p>
                            <button className='portfolio__card-btn'>Сделать похожий проект</button>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default PortfolioSection
