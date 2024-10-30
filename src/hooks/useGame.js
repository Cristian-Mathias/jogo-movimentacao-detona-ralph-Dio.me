// src/hooks/useGame.js
import { useState, useEffect } from 'react';



const useGame = () => {
  const [timeLeft, setTimeLeft] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gamesLost, setGamesLost] = useState(0);
  const [balloonMessage, setBalloonMessage] = useState('');
  const [showBalloon, setShowBalloon] = useState(false);

  const scoreSound = new Audio('/public/audios/hit.m4a');
  scoreSound.volume = 0.1; 

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleGameEnd();
    }

    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    // Reproduz o som sempre que o score aumenta
    if (score > 0) {
      scoreSound.play().catch((error) => console.log("Erro ao reproduzir o som:", error));
    }
  }, [score]); // Executa o efeito apenas quando o score muda

  const handlePlay = () => {
    if (timeLeft === 0) {
      setTimeLeft(20);
      setScore(0);
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setTimeLeft(20);
    setScore(0);
    setLives(3);
    setGamesLost(0);
    setShowBalloon(false);
  };

  const handleClick = () => {
    if (isPlaying) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleCloseBalloon = () => {
    setShowBalloon(false);
  };

  const handleGameEnd = () => {
    if (score >= 10) {
      setBalloonMessage('Parabéns, você ganhou!');
      setShowBalloon(true);
      setIsPlaying(false);
      return;
    }

    if (score < 10) {
      setLives((prevLives) => {
        const newLives = prevLives - 1;
        if (newLives > 0) {
          setBalloonMessage(`Você perdeu! Vidas restantes: ${newLives}`);
          setShowBalloon(true);
        }

        if (newLives === 0) {
          setBalloonMessage('Game Over! Você não tem mais vidas.');
          setShowBalloon(true);
          setIsPlaying(false);
        }

        return Math.max(newLives, 0);
      });

      setGamesLost((prevGamesLost) => {
        const newGamesLost = prevGamesLost + 1;

        if (newGamesLost >= 3) {
          setBalloonMessage('Você perdeu 3 jogos! Game Over!');
          setShowBalloon(true);
          setIsPlaying(false);
          setLives(3); 
          return 0; 
        }
        return newGamesLost;
      });
    }

    setIsPlaying(false);
    setTimeLeft(20);
    setScore(0);
  };

  return {
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
  };
};

export default useGame;
