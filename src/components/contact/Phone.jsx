import React from 'react'

const Phone = () => {
    return (
        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Phone</h3>
                            <span className="contact__card-data">780-901-2641</span>
                            
                            <a href="tel:780-901-2641" className="contact__button">
                                Call me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>

                        </div>
    )
}

export default Phone