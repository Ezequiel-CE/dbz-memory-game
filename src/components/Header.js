import React from "react";
import Scores from "./Scores";
import "../assets/css/App.css";

const Header = ({ score, bestScore }) => {
  return (
    <div className="header">
      <div className="text">
        <h1>
          {" "}
          <span className="dbz-title"> Dragon Ball</span> Memory game
        </h1>
        <h3>
          Get points by clicking on an image, but don't click more than once or
          gonna lose!
        </h3>
      </div>
      <Scores score={score} bestScore={bestScore} />
    </div>
  );
};

export default Header;
