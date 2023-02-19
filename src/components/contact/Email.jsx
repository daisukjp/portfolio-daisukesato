import React from 'react'

const Email = () => {
    return (
        <div className="contact__card">
            <i className="bx bx-mail-send contact__card-icon"></i>

            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">daisukjp1@gmail.com</span>
            
            <a href="mailto:daisukjp1@gmail.com" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
        </div>
    )
}

export default Email