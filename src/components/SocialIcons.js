import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './PortfolioPage.css'; // Ensure the path is correct

const SocialIcons = () => {
  return (
    <>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ritika-joshi-9395591a7/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/RJoshi141" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ritikajoshi141@gmail.com" target="_blank" rel="noopener noreferrer">
  <FaEnvelope />
</a>

      </div>
      <div className="social-line"></div>
      <div className="connect-text">Let’s Connect</div>

    </>
  );
};

export default SocialIcons;
