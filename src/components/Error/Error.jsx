import React from 'react';
import "./error.css"
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import { Link } from 'react-router-dom';

export const Error = () => {
    
        return (
        <>
            <Header />
                <div className="error__container">
                    <h1>Page Not Found</h1>
                    <div class="face">🥹😭</div>
                    <div>
                        <Link to="/" className="error__page-button">
                            back to Home
                        </Link>
                    </div>
                </div>
            <Footer />
            <ScrollUp />
        </>
        )
};