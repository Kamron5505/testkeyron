import React from 'react';
import './Achivments.css';

const AchievementItem = ({ title, description, isLarge = false }) => {
    const className = isLarge ? 'achievement-item achievement-item--large' : 'achievement-item';

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

    return (
        <section className="achievements-section">
            <div className="container">
                <h2 className="achievements-section__header title">
                    НАШИ ДОСТИЖЕНИЯ
                </h2>

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
