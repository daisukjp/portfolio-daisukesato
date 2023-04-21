import React, { useState } from 'react'
import "./contact.css"
import Email from './Email'
import Phone from './Phone'
import ContactInfo from './ContactForm'

const Contact = () => {
    const [contactToggle, setContactToggle] = useState(1);

    const toggleTab = (index) => {
        setContactToggle(index);
    };

return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        {/* <h3 className="section__subtitle">Contact me</h3> */}

        <div className="qualification__tabs">
            <div className={
                contactToggle === 1 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button  button--flex"
                }
                
                onClick={() => toggleTab(1)}
                >
                <i className="uil uil-envelope-upload qualification__icon"></i>Contact Form
            </div>

            <div className={
                contactToggle === 2 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button  button--flex"
                }
                
                onClick={() => toggleTab(2)}
                >
                <i className="uil uil-user-exclamation qualification__icon"></i>Contact Info
            </div>
        </div>

        <div className="contact__form-main-container">
            <div className={
                contactToggle === 1 
                ? "qualification__content qualification__content-active button--flex" 
                : "qualification__content"
                }>
                <div className="contact__form-container">
                    <ContactInfo />
                </div>
            </div>

            <div className={contactToggle === 2 ? "qualification__content qualification__content-active button--flex" 
                    : "qualification__content"}>
                <div className="contact__container container grid">
                    <Email />
                    <Phone />
                </div>
            </div>
        </div>
    </section>
)
}

export default Contact