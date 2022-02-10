import "./assets/css/App.css";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  useEffect(() => {
    if (score >= bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardsContainer incrementScore={incrementScore} resetScore={resetScore} />
    </>
  );
};

export default App;
