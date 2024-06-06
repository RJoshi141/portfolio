import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
    // Function to reload the page
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className="portfolio-container">
    <img 
        src={`${process.env.PUBLIC_URL}/Logo.png`} 
        className="top-left-logo" 
        alt="Logo"
        onClick={reloadPage} // Add onClick event
    />
    <div className="black-header">
        <nav className="navigation-links">
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Experience</a>
            <a href="#" className="nav-link">Resume</a>
        </nav>
    </div>
    <div className="black-screen-portfolio">
        <div className="intro-container">
            <p className="intro-text">Hi there! My name is</p>
            <br />
            <h1 className="intro-name">Ritika Joshi.</h1>
            <h1 className="intro-tagline">I'm a Tech-Creative at heart!</h1>
            <br />
            <p className="intro-tagline1">
                I'm a recent graduate from the University of Cincinnati with a bachelor's degree in 
            </p>
            <p className="intro-tagline1">
                Computer Science, actively seeking full-time opportunities in Front-End Development,
            </p>
            <p className="intro-tagline1">
                Web Development, and Data Analysis.
            </p>
            {/* Add buttons and links here */}
        </div>
    </div>
</div>

    );
};

export default PortfolioPage;
