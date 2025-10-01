import React from 'react';
import "./Contacts.css"

const Contacts = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact__wrapper">
                    <h2 className="title contact__title">КОНТАКТЫ</h2>
                    <div className="contact__form-block">
                        <p className="contact-description">
                            Оставьте заявку <br />и мы с Вами свяжемся для<br /> обсуждения проекта
                        </p>
                        <form className="contact-form">
                            <input placeholder="Имя" required className="contact-form-input" type="text" />
                            <input placeholder="Телеграм-ник" required className="contact-form-input" type="tel" />
                            <button type="submit" className="contact-form-button">Оставить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
