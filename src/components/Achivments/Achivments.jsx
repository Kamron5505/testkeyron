import React, { useRef, useState } from 'react';
import './Achivments.css';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

const AchievementItem = ({ title, description, isLarge = false }) => {
    const className = isLarge
        ? 'achievement-item achievement-item--large'
        : 'achievement-item';

    return (
        <article className={className}>
            <h3 className="achievement-item__title">{title}</h3>
            <p className="achievement-item__description">{description}</p>
        </article>
    );
};

const AchievementsClean = () => {
    const achievements = [
        { title: '520', description: 'лет опыта в сумме у всех разработчиков', isLarge: true },
        { title: 'x20', description: 'рост за последние 2 года', isLarge: true },
        { title: '250+', description: 'успешных проектов', isLarge: false },
        { title: '150', description: 'специалистов в команде', isLarge: false },
        { title: '23', description: 'новых клиента за последний год', isLarge: false },
    ];

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const indicatorsCount = 4;

    const goToSlide = (i) => {
        setActiveIndex(i);
    };

    return (
        <section id="achivments" className="achievements-section">
            <div className="container">
                <div className="spheres__wrapper">
                    <h2 className="achievements-section__header title">НАШИ ДОСТИЖЕНИЯ</h2>
                    <div className="spheres__pagination">
                        <div className="indicators">
                            {Array.from({ length: indicatorsCount }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`live-pagination ${i === activeIndex ? 'active' : ''}`}
                                    onClick={() => goToSlide(i)}
                                ></div>
                            ))}
                        </div>
                        <div className="arrow-buttons">
                            <img ref={prevRef} className="arrow" src={arrowLeft} alt="prev" />
                            <img ref={nextRef} className="arrow" src={arrowRight} alt="next" />
                        </div>
                    </div>
                </div>

                <div className="achievements-section__grid">
                    {achievements.map((item, index) => (
                        <AchievementItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            isLarge={item.isLarge}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsClean;
