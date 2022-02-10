import React, { useState } from "react";
import Card from "./Card";
import images from "../assets/images/images";

const CardsContainer = ({
  incrementScore,
  resetScore,
  addBestScore,
  score,
}) => {
  const [cardsID, setCardsID] = useState([]);

  const handleScore = (id) => {
    if (!cardsID.includes(id)) {
      console.log("gano");
      setCardsID([...cardsID, id]);
      incrementScore();
    } else {
      console.log("perdio");
      setCardsID([]);
      resetScore();
    }
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
  return (
    <div>
      {shuffleArray(images).map((img) => (
        <Card
          handleScore={handleScore}
          key={img.id}
          id={img.id}
          src={img.src}
          name={img.name}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
