import React from "react";
import Scores from "./Scores";
import "../assets/css/App.css";

const Header = ({ score }) => {
  return (
    <div className="header">
      <div className="text">
        <h1>Memory game</h1>
        <h3>
          Get points by clicking on an image, but don't click more than once or
          gonna lose!
        </h3>
      </div>
      <Scores score={score} />
    </div>
  );
};

export default Header;
