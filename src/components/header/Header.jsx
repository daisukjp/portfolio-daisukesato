import React, {useState} from 'react';
import "./header.css";

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
                <a href="index.html" className="nav__logo">&lt;/DS&gt;</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href="#home" 
                            onClick={() => setActiveNav('#home')} className={
                            activeNav === "#home" ? "nav__link active-link" : "nav_link"
                            }
                            >
                                <i className='uil uil-estate nav__icon'></i>
                                Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#about" 
                                onClick={() => setActiveNav('#about')} className={
                                activeNav === "#about" ? "nav__link active-link" : "nav_link"
                                }
                                >
                                <i className='uil uil-user nav__icon'></i>
                                About
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#skills" 
                                onClick={() => setActiveNav('#skills')} className={
                                activeNav === "#skills" ? "nav__link active-link" : "nav_link"
                                }
                                >
                                <i className='uil uil-file-alt nav__icon'></i>
                                Skills
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#work" 
                            onClick={() => setActiveNav('#work')} className={
                            activeNav === "#work" ? "nav__link active-link" : "nav_link"
                            }
                            >
                                <i className='uil uil-briefcase-alt nav__icon'></i>
                                Work
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#contact"
                            onClick={() => setActiveNav('#contact')} className={
                            activeNav === "#contact" ? "nav__link active-link" : "nav_link"
                            }
                            >
                                <i className='uil uil-message nav__icon'></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div class="snsArea pc_show">
                    <p class="ttl en_go"> &nbsp;</p>
                        <ul class="snsList">
                            <li class="first"><a href="https://www.instagram.com/film_jp/" target="_blank"><i className="uil uil-instagram"></i></a></li>
                            <li class="even"><a href="https://github.com/daisukjp" target="_blank"><i className="uil uil-github-alt"></i></a></li>
                            <li class="last"><a href="https://www.linkedin.com/in/daisuke-sato-2b82241a0/" target="_blank"> <i className="uil uil-linkedin-alt"></i></a></li>
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