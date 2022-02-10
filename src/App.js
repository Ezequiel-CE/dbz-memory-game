import "./assets/css/App.css";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import Winner from "./components/views/Winner";
import images from "./assets/images/images";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [win, setWin] = useState(false);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const resetGame = () => {
    setWin(false);
    setScore(0);
    setBestScore(0);
  };

  useEffect(() => {
    if (score >= bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  useEffect(() => {
    if (bestScore === images.length) {
      setWin(true);
    }
  }, [bestScore]);

  return (
    <>
      {win ? (
        <Winner resetGame={resetGame} />
      ) : (
        <>
          <Header score={score} bestScore={bestScore} />
          <CardsContainer
            incrementScore={incrementScore}
            resetScore={resetScore}
          />
        </>
      )}
    </>
  );
};

export default App;
