import React from 'react';
import './PortfolioPage.css'; // Import CSS styles for portfolio page

const PortfolioPage = () => {
    return (
        <div className="portfolio-container">
            <img src={`${process.env.PUBLIC_URL}/Logo.png`} className="top-left-logo" alt="Logo" />
            {/* Add your buttons and links here */}
        </div>
    );
};

export default PortfolioPage;
