import React, { useState } from 'react'
import "./contact.css"
import Email from './Email'
import Phone from './Phone'
import ContactInfo from './ContactForm'
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Contact = () => {
    const [contactToggle, setContactToggle] = useState(1);

    const toggleTab = (index) => {
        setContactToggle(index);
    };

    const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    `;

return (
    <section className="contact section" id="contact">
        <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>  
            <h2 className="section__title">Get in touch</h2>
            <div className="contact__tabs">
                <div className={
                    contactToggle === 1 
                    ? "contact__section-button contact__active button--flex" 
                    : "contact__section-button  button--flex"
                    }
                    
                    onClick={() => toggleTab(1)}
                    >
                    <i className="uil uil-envelope-upload contact__icon"></i>Contact Form
                </div>

                <div className={
                    contactToggle === 2 
                    ? "contact__section-button contact__active button--flex" 
                    : "contact__section-button  button--flex"
                    }
                    
                    onClick={() => toggleTab(2)}
                    >
                    <i className="uil uil-user-exclamation contact__icon"></i>Contact Info
                </div>
            </div>
        </Reveal>
        
        <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
            <div className="contact__form-main-container">
                <div className={
                    contactToggle === 1 
                    ? "contact__content contact__content-active button--flex" 
                    : "contact__content"
                    }>
                    <div className="contact__form-container">
                        <ContactInfo />
                    </div>
                </div>

                <div className={contactToggle === 2 ? "contact__content contact__content-active button--flex" 
                        : "contact__content"}>
                    <div className="contact__container container grid">
                        <Email />
                        <Phone />
                    </div>
                </div>
            </div>
        </Reveal>
    </section>
)
}

export default Contact