import React, { useState } from 'react';
// import $ from 'jquery';
import "./contact.css"

const ContactInfo = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isValidated, setIsValidated] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
        setIsClicked(false);
        setIsValidated(true);
        setTimeout(() => {
            setIsValidated(false);
        }, 1250);
        }, 2250);
    };
    
return (
    <div className="contact__form-section">
        <h3 className="contact__title">Send me a message!</h3>
        
        <form className="contact__form">
            <div className="contact__form-div">
                <label className="contact__form-tags">Name</label>
                <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Type your name"
                />
            </div>

            <div className="contact__form-div">
                <label className="contact__form-tags">Email</label>
                <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Type your email"
                />
            </div>

            <div className="contact__form-div contact__form-area">
                <label className="contact__form-tags">Message</label>
                <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Type your message"
                ></textarea>
            </div>
            
            <a
                className={`contact__form-button button__flex ${isClicked ? "onclic" : ""} ${
                    isValidated ? "validate" : ""
                }`}
                onClick={handleClick}
                >
                Submit
            </a>
        </form>

    </div>
)
}

export default ContactInfo