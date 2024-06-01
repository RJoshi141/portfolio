import React from 'react';
import './PortfolioPage.css'; // Import CSS styles for portfolio page

const PortfolioPage = () => {
    return (
        <div className="portfolio-container">
            <img src={`${process.env.PUBLIC_URL}/Logo.png`} className="top-left-logo" alt="Logo" />
            <div className="black-screen">
                <div className="intro-container">
                    <div className="intro-text">
                        <p>Hi there! My name is</p>
                        <h1>Ritika Joshi</h1>
                    </div>
                    {/* Add your buttons and links here */}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
