import "./assets/css/App.css";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
import React, { useState } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <>
      <Header score={score} />
      <CardsContainer incrementScore={incrementScore} />
    </>
  );
};

export default App;
