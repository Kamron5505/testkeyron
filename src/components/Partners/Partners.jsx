import React from 'react';
import "./Partners.css"
const Partners = () => {
    const partnersData = [
        {
            title: 'IT-компании',
            description: 'Мы берём на себя веб-разработку, мобильные приложения и автоматизацию, чтобы вы могли сосредоточиться на ключевых задачах',
        },
        {
            title: 'Таргетологи и маркетологи',
            description: 'Ваша реклама будет работать ещё эффективнее, если клиент получит готовые лендинги, интеграции и чат-боты',
        },
        {
            title: 'Дизайнеры',
            description: 'Техническую реализацию сайтов, CRM и сервисов мы берём на себя, чтобы ваши проекты оживали быстрее и качественнее',
        },
    ];

    const PartnersCard = ({ title, description }) => (
        <div className="partners__card">
            <div className="card__content">
                <h3 className="partners__card-title">{title}</h3>
                <p className="partners__card-description">{description}</p>
            </div>
            <div className="card__button">
                <a href='#contact' className="partners__card-button">Написать мне</a>
            </div>
        </div>
    );

    return (
        <>
            <section id='partners' className='partners'>
                <div className="container">
                    <h2 className="partners__title title">ПАРТНЕРСТВО</h2>
                    <h4 className="partners__subtitle">Совместная работа позволяет дополнять проекты, усиливать результаты и предлагать клиентам полный спектр качественных услуг</h4>

                    <div className="partners__list">
                        {partnersData.map((partner, index) => (
                            <PartnersCard
                                key={index}
                                title={partner.title}
                                description={partner.description}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}

export default Partners;