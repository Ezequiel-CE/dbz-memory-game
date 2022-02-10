import React from "react";

const Scores = ({ score, bestScore }) => {
  return (
    <div>
      <p>score: {score}</p>
      <p>Best Score : {bestScore}</p>
    </div>
  );
};

export default Scores;
