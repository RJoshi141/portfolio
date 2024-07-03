import React, { useEffect, useRef, useState } from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
    // Function to reload the page
    const reloadPage = () => {
        window.location.reload();
    };

    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const [activeExperience, setActiveExperience] = useState(null);

    const handleScroll = () => {
        const aboutSection = aboutRef.current;
        const experienceSection = experienceRef.current;

        if (aboutSection.getBoundingClientRect().top < window.innerHeight * 0.75) {
            aboutSection.classList.add('visible');
        }

        if (experienceSection.getBoundingClientRect().top < window.innerHeight * 0.75) {
            experienceSection.classList.add('visible');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="portfolio-container">
            <img 
                src={`${process.env.PUBLIC_URL}/Logo.png`} 
                className="top-left-logo" 
                alt="Logo"
                onClick={reloadPage}
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
            <section id="about" className="section about-section" ref={aboutRef}>
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
            <section id="experience" className="section experience-section" ref={experienceRef}>
                <h1>Experience</h1> {/* Add this line for the header */}
                <div className="experience-menu">
                    <div className={`experience-item ${activeExperience === 1 ? 'active' : ''}`} onClick={() => setActiveExperience(1)}>
                        Experience 1
                        {activeExperience === 1 && <div className="line"></div>}
                    </div>
                    <div className={`experience-item ${activeExperience === 2 ? 'active' : ''}`} onClick={() => setActiveExperience(2)}>
                        Experience 2
                        {activeExperience === 2 && <div className="line"></div>}
                    </div>
                    <div className={`experience-item ${activeExperience === 3 ? 'active' : ''}`} onClick={() => setActiveExperience(3)}>
                        Experience 3
                        {activeExperience === 3 && <div className="line"></div>}
                    </div>
                </div>


                <div className="experience-details">
                    {activeExperience === 1 && <p>Details about Experience 1</p>}
                    {activeExperience === 2 && <p>Details about Experience 2</p>}
                    {activeExperience === 3 && <p>Details about Experience 3</p>}
                </div>
            </section>

        </div>
    );
};

export default PortfolioPage;
