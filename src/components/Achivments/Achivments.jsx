import React, { useRef, useEffect, useState } from 'react';
import './Achivments.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
        { title: '520', description: 'лет опыта у всех разработчиков', isLarge: true },
        { title: 'x20', description: 'рост за последние 2 года', isLarge: true },
        { title: '250+', description: 'успешных проектов', isLarge: false },
        { title: '150', description: 'специалистов в команде', isLarge: false },
        { title: '23', description: 'новых клиента за последний год', isLarge: false },
    ];

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.params) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();

            swiperRef.current.on('slideChange', () => {
                setActiveIndex(swiperRef.current.realIndex);
            });
        }
    }, []);

    const goToSlide = (index) => {
        if (swiperRef.current) swiperRef.current.slideToLoop(index);
    };

    return (
        <section className="achievements-section">
            <div className="container">
                <div className="achievements__wrapper">
                    <h2 className="achievements__title title">НАШИ ДОСТИЖЕНИЯ</h2>

                    <div className="achievements__pagination">
                        <div className="indicators">
                            {achievements.map((_, i) => (
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

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {achievements.map((item, index) => (
                            <SwiperSlide key={index}>
                                <AchievementItem {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* ПК-сетка */}
                <div className="achievements-section__grid">
                    {achievements.map((item, index) => (
                        <AchievementItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );;
}
export default AchievementsClean;
