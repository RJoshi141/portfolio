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
                    <a href="#about" className="nav-link">About</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#resume" className="nav-link">Resume</a>
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
                </div>
            </div>
            <section id="about" className="section about-section">
                <h1>About Me</h1>
                <p className="intro-tagline1">
                    I'm a passionate developer with a love for creating beautiful, functional web applications. 
                </p>
                <p className="intro-tagline1">
                    My journey in tech started at a young age and has taken me through various exciting projects 
                    </p>
                    <p className="intro-tagline1">
                    and learning experiences. I'm eager to bring my skills and enthusiasm to a dynamic team where
                    </p> 
                    <p className="intro-text">
                    I can continue to grow and make impactful contributions.
                </p>
            </section>
            <section id="experience" className="section experience-section">
                <h2>Experience</h2>
                <p>Your experience content goes here...</p>
            </section>
            <section id="resume" className="section resume-section">
                <h2>Resume</h2>
                <p>Your resume content goes here...</p>
            </section>
        </div>
    );
};

export default PortfolioPage;
