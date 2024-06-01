import React, { useEffect, useState } from 'react';
import './LogoAnimation.css'; // Import CSS styles for animation

const LogoAnimation = () => {
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationCompleted(true);
        }, 3000); // Total duration of the animation (in milliseconds)
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="black-screen">
            <div className={`logo-container ${animationCompleted ? 'hide' : ''}`}>
                <img src={`${process.env.PUBLIC_URL}/R.png`} className="logo R-logo" alt="R Logo" />
                <img src={`${process.env.PUBLIC_URL}/J.png`} className="logo J-logo" alt="J Logo" />
            </div>
        </div>
    );
};

export default LogoAnimation;
