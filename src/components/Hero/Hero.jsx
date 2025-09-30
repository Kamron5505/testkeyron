import React from 'react'
import "./Hero.css"
import indicator from "../../assets/icons/indicator.svg"
import small from "../../assets/icons/indicator-small.svg"
const Hero = () => {
    return (
        <>
            <main className="main">
                <section className="hero">
                    <div className="container">
                        <div className="hero__text-inner">
                            <h1 className="hero__title">KEYRON</h1>
                            <p className="hero__desc">Разрабатываем, сопровождаем и усиливаем IT-команды.Автоматизируем процессы, создаём продукты и берём на себя технические задачи.</p>
                        </div>

                        <div className="benefits__container">
                            <div className="benefit__item">
                                <img className='indicator' src={indicator} alt="indicator" />
                                <img className='small-indicator' src={small} alt="indicator-small" />
                                <h4 className="benefit__title">Веб-разработка</h4>
                            </div>
                            <div className="benefit__item">
                                <img className='indicator' src={indicator} alt="indicator" />
                                <img className='small-indicator' src={small} alt="indicator-small" />
                                <h4 className="benefit__title">Мобильная разработка </h4>
                            </div>
                            <div className="benefit__item">
                                <img className='indicator' src={indicator} alt="indicator" />
                                <img className='small-indicator' src={small} alt="indicator-small" />
                                <h4 className="benefit__title">Декстоп-разработка</h4>
                            </div>
                            <div className="benefit__item">
                                <img className='indicator' src={indicator} alt="indicator" />
                                <img className='small-indicator' src={small} alt="indicator-small" />
                                <h4 className="benefit__title">Телеграм-боты</h4>
                            </div>
                        </div>
                        <a href='#' className='hero__btn'>Заказать проект</a>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Hero