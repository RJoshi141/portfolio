import React from 'react';
import './PortfolioPage.css';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Resume from '../pages/Resume';


const PortfolioPage = () => {
    // Function to reload the page
    const reloadPage = () => {
        window.location.reload();
    };

    // Function to scroll to sections
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="portfolio-container">
            <img 
                src={`${process.env.PUBLIC_URL}/Logo.png`} 
                className="top-left-logo" 
                alt="Logo"
                onClick={reloadPage}
            />
            <div className="navigation-links">
                <a href="#" onClick={() => scrollToSection('about-section')}>About</a>
                <a href="#" onClick={() => scrollToSection('experience-section')}>Experience</a>
                <a href={`${process.env.PUBLIC_URL}/Ritika_Joshi_Resume.pdf`} target="_blank" rel="noopener noreferrer">Resume</a>
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
                </div>
            </div>
            <div id="about-section">
                <About />
            </div>
            <div id="experience-section">
                <Experience />
            </div>
            <div id="resume-section">
                <Resume />
            </div>
        </div>
    );
};

export default PortfolioPage;
