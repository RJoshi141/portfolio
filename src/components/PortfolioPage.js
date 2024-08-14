import React, { useEffect, useRef, useState } from 'react';
import './PortfolioPage.css';
import resumePDF from '../assets/Resume.pdf';
import { FaGithub } from 'react-icons/fa';

const PortfolioPage = () => {
    const reloadPage = () => {
        window.location.reload();
    };

    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const [activeExperience, setActiveExperience] = useState(1);


    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.black-header');
        let lastScrollTop = 0;
        let isHidden = false;
        const scrollThreshold = 50; // Adjust this value to control the sensitivity
    
        if (header) {
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
                // Check if we've scrolled more than the threshold
                if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
                    // Scroll Down - hide header
                    if (scrollTop > lastScrollTop && !isHidden) {
                        header.style.transform = 'translateY(-100%)';
                        isHidden = true;
                    } 
                    // Scroll Up - show header
                    else if (scrollTop < lastScrollTop && isHidden) {
                        header.style.transform = 'translateY(0)';
                        isHidden = false;
                    }
    
                    lastScrollTop = scrollTop;
                }
            });
        } else {
            console.error('Header element with class .black-header not found');
        }
    });
    
    



    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            const scrollPosition = window.scrollY + window.innerHeight * 2 / 3;
    
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
    
                if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Calculate the fade amount based on scroll position
                    const fadeAmount = Math.min(1, (scrollPosition - sectionTop) / (sectionHeight * 0.5));
                    section.style.opacity = fadeAmount;
                } else if (scrollPosition <= sectionTop) {
                    // If above the section, make sure opacity is 0
                    section.style.opacity = 0;
                }
            });
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check to set opacity
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    const openResume = () => {
        window.open(resumePDF, '_blank');
    };

    return (
        <div className="portfolio-container">
            <div className="black-header">
                <img 
                    src={`${process.env.PUBLIC_URL}/Logo.png`} 
                    className="top-left-logo" 
                    alt="Logo"
                    onClick={reloadPage}
                />
                <nav className="navigation-links">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#projects" className="projects-button">Projects</a>
                    <a href="#" className="resume-button" onClick={openResume}>Resume</a>
                </nav>
            </div>

            <div className="black-screen-portfolio">
                <div className="intro-container">
                    <p className="intro-text">Hi there! My name is</p>
                    <h1 className="intro-name">Ritika Joshi.</h1>
                    <h1 className="intro-tagline">I'm a Tech-Creative at heart!</h1>
                    <div className="intro-tagline-container">
                        <p className="intro-tagline1">
                            I'm a recent graduate from the University of Cincinnati with a bachelor's degree in 
                        </p>
                        <p className="intro-tagline1">
                            Computer Science, actively seeking full-time opportunities in Front-End Development, 
                        </p>
                        <p className="intro-tagline1">
                            Web Development, and Data Analysis. </p>
                    </div>
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
                <p className="intro-tagline1">
                    I can continue to grow and make impactful contributions.
                </p>
                <p className="intro-tagline1">
                    Beyond tech, I thrive in leadership roles. As a Senator-At-Large in the Undergraduate Student Government
                    at the University of Cincinnati, I passionately advocated for student interests and initiatives, contributing to a vibrant campus community.
                </p>
                <p className="intro-tagline1">
                    Fun fact: I had the honor of being the Student Commencement Speaker at my graduation, representing the Spring 2024 undergraduate class with an impactful address at all three graduation ceremonies.
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
                        BECO VENTURES Singapore
                        {activeExperience === 2 && <div className="line"></div>}
                    </div>
                    <div className={`experience-item ${activeExperience === 3 ? 'active' : ''}`} onClick={() => setActiveExperience(3)}>
                        P&G Cincinnati
                        {activeExperience === 3 && <div className="line"></div>}
                    </div>
                </div>

                <div className="experience-details">
                    {activeExperience === 1 && (
                        <div>
                            <div className="experience-heading">
                                <h2>CS Production Control Co-op | TMMK Georgetown, KY</h2>
                                <p className="experience-timeline">May 2023 – August 2023</p>
                            </div>
                            <ul className="experience-bullets">
                                <li>Improved the management process for supplier change requests (SCR) for each car model part number, aiming to enhance efficiency at Toyota's production control department</li>
                                <li>Tasked with integrating the SCR App into the existing QPC Change Point Management interface using Power Apps to streamline the process and enhance data management</li>
                                <li>Engineered a streamlined process for SCR changes, seamlessly integrating the SCR App into the interface while optimizing data management with SQL Servers and prioritizing UX/UI principles for enhanced usability</li>
                                <li>Achieved a 34% increase in workflow efficiency, a 42% improvement in data retrieval speeds, and significantly boosted user satisfaction, benefiting over 5 cross-functional teams at North America's largest automotive plant</li>
                            </ul>
                        </div>
                    )}
                    {activeExperience === 2 && (
                        <div>
                            <div className="experience-heading">
                                <h2>UI Process Engineer Intern | BECO VENTURES, Singapore</h2>
                                <p className="experience-timeline">September 2022 – December 2022</p>
                            </div>
                            <ul className="experience-bullets">
                                <li>Deployed both local and cloud databases, integrated simulated sensors, and created a web dashboard for real-time visualization for the Greenhouse Monitoring Platform, improving data accessibility and monitoring efficiency by 55%</li>
                                <li>Formulated comprehensive Agile charters, including themes, epics, user stories, tasks, and personas for various software projects, leading to a 30% increase in project delivery speed and team alignment</li>
                                <li>Evaluated existing GPS and Weight Tracking Dashboard architecture from vendors, compiled a list of feature inclusions, improvements, and bugs, and prioritized them by urgency and implementation phases to enhance system functionality</li>
                            </ul>
                        </div>
                    )}
                    {activeExperience === 3 && (
                        <div>
                            <div className="experience-heading">
                                <h2>Data Analyst Co-op | UC Simulation Center - P&G Cincinnati, OH</h2>
                                <p className="experience-timeline">January 2022 – April 2022</p>
                            </div>
                            <ul className="experience-bullets">
                                <li>Employed PowerBI for in-depth data analysis, implementing multi-time zone and daylight savings adjustments to ensure accurate insights across diverse datasets</li>
                                <li>Developed a user-friendly Excel interface using VBA (Visual Basic for Applications), specifically tailored to optimize data entry processes and enhance efficiency within the warehouse operations, reducing data entry time by 40%</li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>


            <section id="projects" className="section projects-section" ref={projectsRef}>
    <h1>Projects</h1>
    <div className="projects-grid">
       
        <div className="project-box">
            <a href="https://github.com/RJoshi141/pixie" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon top-right" />
            </a>
            <div className="project-content">
                <h2>Pixie</h2>
                <p>An online pixel art game where you can create art by picking colors from a palette and painting on a grid.</p>
                <p>Features include grid resizing, undo/redo functionality, and a save option for your creations.</p>
                <p className="tech-stack">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>CSS</span>
                    <span>SASS</span>
                    <span>Node.js</span>
                    <span>Express</span>
                </p>
            </div>
        </div>
        <div className="project-box">
            <a href="https://github.com/RJoshi141/reddit-clone" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon top-right" />
            </a>
            <div className="project-content">
                <h2>Reddit Clone</h2>
                <p>A Reddit-like website with functionalities including subreddit creation, post upvoting, and user profiles.</p>
                <p>Users can interact by subscribing to subreddits, submitting posts, and engaging with comments</p>                
                <p className="tech-stack">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                </p>
            </div>
        </div>
        <div className="project-box">
            <a href="https://github.com/RJoshi141/portfolio" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon top-right" />
            </a>
            <div className="project-content">
                <h2>Portfolio</h2>
                <p>This portfolio page showcases my skills, experiences, and projects.</p>
                <p>Features include dynamic content sections, responsive design, and smooth scrolling effects. The site is built with modern web technologies to provide an engaging and interactive user experience.</p>                
                <p className="tech-stack">
                    <span>React</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                </p>
            </div>
        </div>

        
        <div className="project-box">
            <a href="https://github.com/RJoshi141/retro-snake-game" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon top-right" />
            </a>
            <div className="project-content">
                <h2>Retro Snake Game</h2>
                <p>This repository features a classic Snake game implemented in Python using the Turtle graphics library and the freegames module. Dive into this timeless arcade adventure, complete with colorful visuals and a dash of nostalgia.</p>
                <p className="tech-stack">
                    <span>Python</span>
                    <span>Turtle Graphics</span>
                    <span>Freegames Module</span>
                </p>
            </div>
        </div>
        <div className="project-box">
            <a href="https://github.com/RJoshi141/meteor-shooter-game" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon top-right" />
            </a>
            <div className="project-content">
                <h2>Meteor Shooter Game</h2>
                <p>This is a classic arcade-style game where you control a neon blue gun and shoot at falling meteors. The bigger the meteor, the more points you score! Watch out, though—miss too many meteors, and the game will end!</p>
                <p className="tech-stack">
                    <span>Python</span>
                    <span>Pygame</span>
                </p>
            </div>
        </div>
        <div className="project-box">
            <a href="https://github.com/RJoshi141/rock-paper-scissors-lizard-spock" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon top-right" />
            </a>
            <div className="project-content">
                <h2>Rock Paper Scissors Lizard Spock</h2>
                <p>This is an implementation of the classic game Rock Paper Scissors Lizard Spock in Python. The game adds a twist to the traditional Rock Paper Scissors with two additional choices and unique interactions.</p>
                <p className="tech-stack">
                    <span>Python</span>
                </p>
            </div>
        </div>
    </div>
</section>



            




            <div className="social-links">
                <a href="https://www.linkedin.com/in/ritika-joshi-9395591a7/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/RJoshi141" target="_blank" rel="noopener noreferrer" className="social-icon github">
                    <i className="fab fa-github"></i>
                </a>
                <a href="mailto:ritikajoshi141@gmail.com" className="social-icon gmail">
                    <i className="fas fa-envelope"></i>
                </a>
                <div className="social-line"></div>
                <div className="connect-text">Let’s Connect</div>
            </div>
        </div>
    );
};

export default PortfolioPage;