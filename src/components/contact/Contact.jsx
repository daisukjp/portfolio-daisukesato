import React from 'react'
import "./contact.css"
import Email from './Email'
import Phone from './Phone'

const Contact = () => {
return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <h3 className="section__subtitle">Contact me</h3>

        <div className="contact__container container grid">
            <Email />
            <Phone />
        </div>
    </section>
)
}

export default Contact