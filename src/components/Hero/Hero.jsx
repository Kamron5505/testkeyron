import React from 'react'
import "./Hero.css"
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
                                <div class="live-indicator"></div>
                                <h4 className="benefit__title">Веб-разработка</h4>
                            </div>
                            <div className="benefit__item">
                                <div class="live-indicator"></div>
                                <h4 className="benefit__title">Мобильная разработка </h4>
                            </div>
                            <div className="benefit__item">
                                <div class="live-indicator"></div>
                                <h4 className="benefit__title">Декстоп-разработка</h4>
                            </div>
                            <div className="benefit__item">
                                <div class="live-indicator"></div>
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