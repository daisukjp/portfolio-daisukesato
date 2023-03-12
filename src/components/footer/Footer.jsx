import React from 'react'
import "./footer.css"
import DSLOGO from "../../assets/daisuke-sato-footer-logo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className='footer__title'>
                    <a href="/"><img src={DSLOGO} alt="DS logo" className="footer__img nav__logo" /></a>
                </div>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#service" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>

                    <li>
                        <a href="https://drive.google.com/file/d/1ioacoxNJMVuzSonjpXlriBa1vPifJH_R/view?usp=sharing" className="footer__link" target="_blank">Resume</a>
                    </li>
                </ul>

                <div className="footer__social">

                <a href="https://github.com/daisukjp" className="footer__social-link" target="_blank">
                <i className="uil uil-github-alt"></i>
                </a>

                <a href="https://www.linkedin.com/in/daisuke-sato-2b82241a0/" className="footer__social-link" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://www.instagram.com/film_jp/" className="footer__social-link" target="_blank">
                <i className="uil uil-file-download-alt"></i>
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