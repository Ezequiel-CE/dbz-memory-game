import React from "react";
import gokuWin from "../../assets/images/goku-win.png";

const Winner = ({ resetGame }) => {
  return (
    <div className="win-view dbz-title">
      <h1>You Win</h1>
      <button onClick={resetGame}>Try again</button>
      <img src={gokuWin} alt="goku" />
    </div>
  );
};

export default Winner;
