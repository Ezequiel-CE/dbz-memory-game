import React from "react";

const Scores = ({ score, bestScore }) => {
  return (
    <div className="score">
      <p>Score: {score}</p>
      <p>Best Score : {bestScore}</p>
    </div>
  );
};

export default Scores;
