import React, { useEffect, useRef, useState } from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
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
                <h1>Experience</h1>
                <div className="experience-menu">
                    <div className={`experience-item ${activeExperience === 1 ? 'active' : ''}`} onClick={() => setActiveExperience(1)}>
                        Toyota Motors Manufacturing Kentucky
                        {activeExperience === 1 && <div className="line"></div>}
                    </div>
                    <div className={`experience-item ${activeExperience === 2 ? 'active' : ''}`} onClick={() => setActiveExperience(2)}>
                        BECO VENTURES, Singapore
                        {activeExperience === 2 && <div className="line"></div>}
                    </div>
                    <div className={`experience-item ${activeExperience === 3 ? 'active' : ''}`} onClick={() => setActiveExperience(3)}>
                        Experience 3
                        {activeExperience === 3 && <div className="line"></div>}
                    </div>
                </div>
                <div className="experience-details">
                    {activeExperience === 1 && (
                        <>
                            <div className="experience-heading">
                                <h2>CS Production Control Co-op | TMMK Georgetown, KY</h2>
                                <p className="experience-timeline">May 2023 – August 2023</p>
                            </div>
                            <ul>
                                <li>Improved the management process for supplier change requests (SCR) for each car model part number, aiming to enhance efficiency at Toyota's production control department</li>
                                <li>Tasked with integrating the SCR App into the existing QPC Change Point Management interface using Power Apps to streamline the process and enhance data management</li>
                                <li>Engineered a streamlined process for SCR changes, seamlessly integrating the SCR App into the interface while optimizing data management with SQL Servers and prioritizing UX/UI principles for enhanced usability</li>
                                <li>Achieved a 34% increase in workflow efficiency, a 42% improvement in data retrieval speeds, and significantly boosted user satisfaction, benefiting over 5 cross-functional teams at North America's largest automotive plant</li>
                            </ul>
                        </>
                    )}
                    {activeExperience === 2 && (
                        <>
                            <div className="experience-heading">
                                <h2>UI Process Engineer Intern | BECO VENTURES, Singapore</h2>
                                <p className="experience-timeline">September 2022 – December 2022</p>
                            </div>
                            <ul>
                                <li>Deployed both local and cloud databases, integrated simulated sensors, and created a web dashboard for real-time visualization for the Greenhouse Monitoring Platform, improving data accessibility and monitoring efficiency by 55%</li>
                                <li>Formulated comprehensive Agile charters, including themes, epics, user stories, tasks, and personas for various software projects, leading to a 30% increase in project delivery speed and team alignment</li>
                                <li>Evaluated existing GPS and Weight Tracking Dashboard architecture from vendors, compiled a list of feature inclusions, improvements, and bugs, and prioritized them by urgency and implementation phases to enhance system functionality</li>
                            </ul>
                        </>
                    )}
                    {activeExperience === 3 && (
                        <>
                            <div className="experience-heading">
                                <h2>Experience 3 Title</h2>
                                <p className="experience-timeline">Timeline for Experience 3</p>
                            </div>
                            <p>Details about Experience 3</p>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
