import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">&lt;/DS&gt;</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#project" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.instagram.com/film_jp/" className="footer__social-link" target="_blank">
                <i className="uil uil-instagram"></i>
                </a>

                <a href="https://github.com/daisukjp" className="footer__social-link" target="_blank">
                <i className="uil uil-github-alt"></i>
                </a>

                <a href="https://www.linkedin.com/in/daisuke-sato-2b82241a0/" className="footer__social-link" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
                </a>
                </div>

                <span className="footer__copy">
                    &#169; created by Daisuke Sato
                </span>
            </div>
        </footer>
    )
}

export default Footer