import React, { useState } from 'react';
import LogoAnimation from './components/LogoAnimation';
import PortfolioPage from './components/PortfolioPage';
import SocialIcons from './components/SocialIcons'; // Import the SocialIcons component

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationCompleted(true);
  };

  return (
    <div className="App">
      {!animationCompleted && <LogoAnimation onAnimationComplete={handleAnimationComplete} />}
      {animationCompleted && (
        <>
          <PortfolioPage />
          <SocialIcons /> {/* Render the SocialIcons component */}
        </>
      )}
    </div>
  );
}

export default App;
