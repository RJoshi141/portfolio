import React from 'react';
import './PortfolioPage.css'; // Import CSS styles for portfolio page

const PortfolioPage = () => {
    return (
        <div className="portfolio-container">
            <div className="intro-container">
                <div className="profile-picture">
                    {/* <img src={`${process.env.PUBLIC_URL}/profile-picture.jpg`} alt="Profile" /> */}
                </div>
                <div className="intro-text">
                    <h1>Hi, I'm [Your Name]</h1>
                    <p>
                        I'm a passionate [Your Profession] with [Number of Years] years of experience. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed suscipit quam sit amet vestibulum consequat. 
                        Integer sed risus quis justo facilisis ultrices. 
                        Etiam interdum, leo vel consectetur mattis, neque ligula ultrices felis, at aliquet odio ipsum non enim.
                    </p>
                </div>
            </div>
            {/* Add your buttons and links here */}
        </div>
    );
};

export default PortfolioPage;
