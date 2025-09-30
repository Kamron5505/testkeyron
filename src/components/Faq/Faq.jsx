import React, { useState } from "react";
import "./Faq.css";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Где вы находитесь?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        },
        {
            question: "Есть ли у вас специалисты с опытом в нашей нише?",
            answer: "Да, у нас есть опытные специалисты в разных отраслях.",
        },
        {
            question: "У вас есть опыт с Blockchain?",
            answer: "Да, мы реализовали проекты на основе Blockchain технологий.",
        },
        {
            question: "Какие есть гарантии?",
            answer: "Мы предоставляем гарантии на выполненные работы и сроки.",
        },
        {
            question: "Как быстро мы можем начать работу?",
            answer: "Работу можно начать в течение нескольких дней после подписания договора.",
        },
        {
            question: "Как мы поймем, что ваша компания — это то что нам нужно?",
            answer: "Мы можем провести консультацию и показать портфолио наших проектов.",
        },
    ];

    return (
        <section id="faq" className="faq">
            <div className="container">
                <h2 className="faq__title">FAQ</h2>

                <div className="faq__list">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className={`faq__item ${activeIndex === index ? "faq__item--active" : ""}`}
                        >
                            <div className="faq__header" onClick={() => toggleFAQ(index)}>
                                <h3 className="faq__question">{item.question}</h3>
                                <span className="faq__icon">
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <p className="faq__answer">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
