import React, {useState} from 'react';
import "./header.css";
import DSLOGO from "../../assets/daisuke-sato-footer-logo.png"

const Header = () => {
    /* Background color changer */
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    /* Toggle Menu */
        const [Toggle, ShowMenu] = useState(false);
        const [activeNav, setActiveNav] = useState("#home");


    return (
        <div>
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo"><img src={DSLOGO} alt="DS logo" /></a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href="/#home" 
                            onClick={() => setActiveNav('#home')} className={
                            activeNav === "#home" ? "nav__link active-link" : "nav_link"
                            }
                            >
                                <i className='uil uil-estate nav__icon'></i>
                                Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="/#service" 
                            onClick={() => setActiveNav('#service')} className={
                            activeNav === "#service" ? "nav__link active-link" : "nav_link"
                            }
                            >
                                <i className='uil uil-briefcase-alt nav__icon'></i>
                                Projects
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="/#skills" 
                                onClick={() => setActiveNav('#skills')} className={
                                activeNav === "#skills" ? "nav__link active-link" : "nav_link"
                                }
                                >
                                <i className='uil uil-file-alt nav__icon'></i>
                                About
                            </a>
                        </li>


                        <li className='nav__item'>
                            <a href="/#contact"
                            onClick={() => setActiveNav('#contact')} className={
                            activeNav === "#contact" ? "nav__link active-link" : "nav_link"
                            }
                            >
                                <i className='uil uil-message nav__icon'></i>
                                Contact
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="https://drive.google.com/file/d/1ioacoxNJMVuzSonjpXlriBa1vPifJH_R/view?usp=sharing"
                            onClick={() => setActiveNav('#resume')} className={
                            activeNav === "#resume" ? "nav__link active-link" : "nav_link"
                            }
                            target="_blank">
                                <i className='uil uil-message nav__icon'></i>
                                Resume
                            </a>
                        </li>
                    </ul>
                    <div class="snsArea pc_show">
                    <p class="ttl en_go"> &nbsp;</p>
                        <ul class="snsList">
                            <li class="even"><a href="https://github.com/daisukjp" target="_blank"><i className="uil uil-github-alt"></i></a></li>
                            <li class="last"><a href="https://www.linkedin.com/in/daisuke-sato-2b82241a0/" target="_blank"> <i className="uil uil-linkedin-alt"></i></a></li>
                            <li class="first"><a href="https://drive.google.com/file/d/1ioacoxNJMVuzSonjpXlriBa1vPifJH_R/view?usp=sharing" target="_blank"><i className="uil uil-file-download-alt"></i></a></li>
                        </ul>
                    </div>

                    <i className="uil uil-times nav__close" onClick={() => ShowMenu(!Toggle)}></i>
                </div>

                <div className='nav__toggle' onClick={() => ShowMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
                </div>
            </nav>
            
        </header>
            
        </div>
        
    )
}

export default Header