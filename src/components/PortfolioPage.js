import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
    return (
        <div className="portfolio-container">
            <img src={`${process.env.PUBLIC_URL}/Logo.png`} className="top-left-logo" alt="Logo" />
            <div className="black-screen-portfolio">
                <div className="intro-container">
                    
                        <p  className="intro-text">Hi there! My name is</p>
                        <br></br>
                        <h1 className="intro-name">Ritika Joshi.</h1>
                        <h1 className="intro-tagline">I'm a Tech-Creative at heart!</h1>
                        <br></br>
                        <p className="intro-tagline1">I'm a recent graduate from the University of Cincinnati with a bachelor's degree in </p>
                        <p className="intro-tagline1">Computer Science, actively seeking full-time opportunities in Front-End Development,  </p>
                        <p className="intro-tagline1">Web Development, and Data Analysis.</p>
                    
                    {/* Add buttons and links here */}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
