import React from "react";

const Card = ({ src, name, id, handleScore }) => {
  return (
    <div onClick={() => handleScore(id)} className="card">
      <img src={src} alt="card" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
