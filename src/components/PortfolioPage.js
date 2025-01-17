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
                <p className="intro-text"></p>
                    <p className="intro-text">Hi there! My name is</p>
                    <h1 className="intro-name">Ritika Joshi.</h1>
                    <h1 className="intro-tagline">I'm a Tech-Creative at heart!</h1>
                    <div className="intro-tagline-container">
                        <p className="intro-tagline1">
                        Welcome to my portfolio! I'm a recent graduate from the University of Cincinnati with a bachelor's</p>
                        <p className="intro-tagline1">
                        degree in Computer Science. I'm on the lookout for exciting opportunities in Front-End Development,</p>
                        <p className="intro-tagline1">
                         Full Stack, Web Development, and Software Developement. </p>
                        <p className="intro-tagline1">Feel free to explore my work, and don't hesitate to reach out if you'd like to connect.</p>
                    </div>
                </div>
            </div>

            <section id="about" className="section about-section" ref={aboutRef}>
                <h1>About Me</h1>
                <p className="intro-tagline1">
                    I'm a passionate developer with a love for creating beautiful, functional web applications.
                </p>
                <p className="intro-tagline1">
                     My passion for tech began early, driving me to work on exciting projects and constantly learn. I'm excited to contribute my skills and grow with a dynamic team.
                </p>
                <p className="intro-tagline1">
                    Beyond tech, I thrive in leadership roles. As a Senator-At-Large in the Undergraduate Student Government
                    at the University of Cincinnati, I passionately advocated for student interests and initiatives, contributing to a vibrant campus community.
                </p>
                <p className="intro-tagline1">
                    <span style={{ color: '#1EFFF1' }}>Fun fact:</span> I had the honor of being the Student Commencement Speaker at my graduation, representing the Spring 2024 undergraduate class with an impactful address at all three graduation ceremonies.
                     <a href="https://www.uc.edu/news/articles/2024/04/uc-recognizes-its-largest-graduating-class-in-history-in-three-days-of-commencement.html#:~:text=Undergraduate%20student%20speaker%20Ritika%20Joshi" target="_blank" rel="noopener noreferrer" className="speech-button">Check out the highlights</a></p>
            </section>

            <section id="experience" className="section experience-section" ref={experienceRef}>
                <h1>Experience</h1>
                <div className="experience-menu">
                    <div className={`experience-item ${activeExperience === 1 ? 'active' : ''}`} onClick={() => setActiveExperience(1)}>
                        Bright Mind Enrichment San Francicso
                        {activeExperience === 1 && <div className="line"></div>}
                    </div>
                    <div className={`experience-item ${activeExperience === 2 ? 'active' : ''}`} onClick={() => setActiveExperience(2)}>
                        Toyota Motors Manufacturing Kentucky
                        {activeExperience === 2 && <div className="line"></div>}
                    </div>
                    <div className={`experience-item ${activeExperience === 3 ? 'active' : ''}`} onClick={() => setActiveExperience(3)}>
                        BECO VENTURES Singapore
                        {activeExperience === 3 && <div className="line"></div>}
                    </div>
                    <div className={`experience-item ${activeExperience === 4 ? 'active' : ''}`} onClick={() => setActiveExperience(4)}>
                        P&G Cincinnati
                        {activeExperience === 4 && <div className="line"></div>}
                    </div>
                </div>

                <div className="experience-details">
                    {activeExperience === 1 && (
                        <div>
                            <div className="experience-heading">
                                <h2>UI/UX Web Developer | BMEAS San Francicso, CA</h2>
                                <p className="experience-timeline">September 2024 – Present</p>
                            </div>
                            <ul className="experience-bullets">
                                <li>Led the integration of front-end features with back-end services by developing and consuming RESTful APIs, ensuring seamless data flow and functionality</li>
                                <li>Owned the integration of front-end features with back-end services by developing and consuming RESTful APIs, ensuring seamless data flow and functionality</li>
                                <li>Deployed Figma, WordPress, HTML, and CSS to design and develop interfaces that enhanced usability, accessibility, and visual appeal</li>
                                <li>Achieved a 15% increase in website traffic and improved user engagement metrics by elevating cross-device accessibility and implementing responsive designs</li>
                            </ul>
                        </div>
                    )}
                    {activeExperience === 2 && (
                        <div>
                            <div className="experience-heading">
                                <h2>STEM Co-op [Production Control] | TMMK Georgetown, KY</h2>
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
                    {activeExperience === 3 && (
                        <div>
                            <div className="experience-heading">
                                <h2>CS Intern [UI Process Engineer] | BECO VENTURES, Singapore</h2>
                                <p className="experience-timeline">September 2022 – December 2022</p>
                            </div>
                            <ul className="experience-bullets">
                                <li>Deployed both local and cloud databases, integrated simulated sensors, and created a web dashboard for real-time visualization for the Greenhouse Monitoring Platform, improving data accessibility and monitoring efficiency by 55%</li>
                                <li>Formulated comprehensive Agile charters, including themes, epics, user stories, tasks, and personas for various software projects, leading to a 30% increase in project delivery speed and team alignment</li>
                                <li>Evaluated existing GPS and Weight Tracking Dashboard architecture from vendors, compiled a list of feature inclusions, improvements, and bugs, and prioritized them by urgency and implementation phases to enhance system functionality</li>
                            </ul>
                        </div>
                    )}
                    {activeExperience === 4 && (
                        <div>
                            <div className="experience-heading">
                                <h2>CS Co-op [Data Analyst] | UC Simulation Center - P&G Cincinnati, OH</h2>
                                <p className="experience-timeline">January 2022 – April 2022</p>
                            </div>
                            <ul className="experience-bullets">
                                <li>Developed a multi-time zone analytics system integrated with a VBA-powered Excel interface, enhancing efficiency in global data entry workflows</li>
                                <li>Designed and implemented dynamic data visualizations in Power BI, providing actionable insights to optimize warehouse operations</li>
                                <li>Deployed automated testing frameworks using RESTful APIs and PyTest, ensuring the accuracy and reliability of analytics systems</li>
                                <li>Streamlined warehouse data entry processes, achieving a 40% reduction in processing time and significantly boosting operational efficiency</li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>


            <section id="projects" className="section projects-section" ref={projectsRef}>
            <h1>Projects</h1>
            <div className="projects-grid">
            <div className="project-box">
            <a href="https://github.com/RJoshi141/cinemate" target="_blank" rel="noopener noreferrer" className="project-link">
            <FaGithub className="github-icon top-right" />
            </a>
            <div className="project-content">
                <h2>Cinemate</h2>
                <p>Discover and track your favorite movies with personalized recommendations and detailed insights, all in one sleek app.</p>
                <p>Features include a customizable watchlist, movie trivia, interactive quizzes, and the ability to explore films by genre, actor, or director.</p>
                <p className="tech-stack">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>Tailwind CSS</span>
                    <span>TMDB API</span>
                </p>
            </div>
        </div>
        <div className="project-box">
                <a href="https://github.com/RJoshi141/Capstone-Project" target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub className="github-icon top-right" />
                </a>
                <div className="project-content">
                    <h2>EventReady</h2>
                    <p>This web application offers an easy-to-use platform that simplifies event management and creation.</p>
                    <p>It provides a range of tools and resources to help aspiring event planners become proficient at organizing and budgeting for various events.</p>
                    <p className="tech-stack">
                        <span>JavaScript</span>
                        <span>Django</span>
                        <span>MUI</span>
                        <span>React</span>
                    </p>
                </div>
        </div>
        <div className="project-box">
            <a href="https://github.com/RJoshi141/KroDash" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon top-right" />
            </a>
            <div className="project-content">
                <h2>KroDash</h2>
                <p>Built a Flask-based retail data dashboard on Heroku for efficient data processing.</p>
                <p>Improved Kroger’s data analysis with visualizations, boosting decision-making and inventory management.</p>
                <p className="tech-stack">
                    <span>SQLAlchemy</span>
                    <span>Azure PostgreSQL</span>
                    <span>HTML</span>
                    <span>Heroku</span>
                    <span>JavaScript</span>
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
            <a href="https://github.com/RJoshi141/skycast" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon top-right" /></a>
            <div className="project-content">
                <h2>SkyCast</h2>
                <p>Skycast is a sleek and user-friendly weather application designed to provide real-time weather information for any city around the world.</p>
                <p>It offers a detailed city weather forecast, and parameters like temperature, humidity, & wind speed.</p>                
                <p className="tech-stack">
                    <span>Vercel</span>
                    <span>React</span>
                    <span>Axios</span>
                    <span>OpenWeatherMap API</span>
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
                <p>This repository features a classic Snake game implemented in Python using the Turtle graphics library and the freegames module.</p>
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
                <p>In this classic arcade-style game, control a neon blue gun to shoot falling meteors. Larger meteors score more points, but missing too many ends the game.</p>
                <p className="tech-stack">
                    <span>Python</span>
                    <span>Pygame</span>
                </p>
            </div>
        </div>
        <div className="project-box">
                <a href="https://github.com/RJoshi141/matrix" target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub className="github-icon top-right" />
                </a>
                <div className="project-content">
                    <h2>Matrix</h2>
                    <p>The iconic green text from The Matrix is now live in your browser, letting you experience the falling code effect as if you're in the movie itself!</p>
                    <p className="tech-stack">
                        <span>HTML</span>
                        <span>JavaScript</span>
                    </p>
                </div>
        </div>
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
            <a href="https://github.com/RJoshi141/portfolio" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon top-right" />
            </a>
            <div className="project-content">
                <h2>Portfolio</h2>
                <p>This portfolio page showcases my skills, experiences, and projects.</p>
                <p>Features include dynamic content sections, responsive design, and smooth scrolling effects.</p>                
                <p className="tech-stack">
                    <span>React</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                </p>
            </div>
        </div>
        <div className="project-box">
            <a href="https://github.com/RJoshi141/TextbasedGame" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon top-right" />
            </a>
            <div className="project-content">
                <h2>Office Adventure Game</h2>
                <p>A text-based adventure set in the quirky world of The Office.</p>
                <p>Play as a secret agent on a mission to defeat the Beast of Scranton, navigating through suspenseful challenges and critical decisions within the chaos of Dunder Mifflin.</p>                
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
