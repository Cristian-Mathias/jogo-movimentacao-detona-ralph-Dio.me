
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GameBoard from './components/GameBoard/GameBoard';
import ResponseBalloon from './components/ResponseBalloon/Balloon';
import useGame from './hooks/useGame';

const App = () => {
  const {
    timeLeft,
    isPlaying,
    score,
    lives,
    gamesLost,
    balloonMessage,
    showBalloon,
    handlePlay,
    handlePause,
    handleReset,
    handleClick,
    handleCloseBalloon,
  } = useGame();

  return (
    <>
      <Header
        timeLeft={timeLeft}
        score={score}
        lives={lives}
      />
      <GameBoard
        isPlaying={isPlaying}
        onClick={handleClick}
      />
      <Footer
        isPlaying={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
        onReset={handleReset}
      />
      {showBalloon && (
        <ResponseBalloon
          message={balloonMessage}
          onClose={handleCloseBalloon}
        />
      )}
    </>
  );
};

export default App;
