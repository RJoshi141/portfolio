import React, { useState } from 'react';
import LogoAnimation from './components/LogoAnimation';
import PortfolioPage from './components/PortfolioPage';

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationCompleted(true);
  };

  return (
    <div className="App">
      <LogoAnimation onAnimationComplete={handleAnimationComplete} />
      {animationCompleted && <PortfolioPage />}
    </div>
  );
}

export default App;
