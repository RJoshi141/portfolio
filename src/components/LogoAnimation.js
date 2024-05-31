// LogoAnimation.js
import React from 'react';
import './LogoAnimation.css'; // Import CSS styles for animation

// Import SVG components
import { ReactComponent as RLogo } from '../public/R.svg';
import { ReactComponent as JLogo } from '../public/J.svg';


const LogoAnimation = () => {
  return (
    <div className="black-screen">
      <div className="logo-container">
        {/* R Component with Drawing Animation */}
        <RLogo className="r-logo" />
        <svg width="500" height="622" viewBox="0 0 500 622" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="RPath" d="M453.5 597L213 386.227L274.5 386.227L500 568L493 574.5L481 583L469 590L453.5 597Z" fill="none" stroke="white" stroke-width="2" stroke-dasharray="1500" stroke-dashoffset="1500">
            <animate attributeName="stroke-dashoffset" from="1500" to="0" dur="2s" begin="0s" fill="freeze" />
          </path>
          {/* Other SVG elements for R component */}
        </svg>

        {/* J Component with Drawing Animation */}
        <JLogo className="j-logo" />
        <svg width="482" height="622" viewBox="0 0 482 622" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="JPath" d="M285 0H482V51H345.685L337.08 42.5L327.57 33L315.795 22.5L299.945 10L285 0Z" fill="#1EFFF1">
            <animate attributeName="fill" from="transparent" to="#1EFFF1" dur="2s" begin="2s" fill="freeze" />
          </path>
          {/* Other SVG elements for J component */}
        </svg>
      </div>
    </div>
  );
};

export default LogoAnimation;
