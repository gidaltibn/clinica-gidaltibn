import React from "react";
import "./card.css";

function Card({ image, altText }) {
  return (
    <div className="card">
      <img src={image} alt={altText} className="card-image" />
    </div>
  );
}

export default Card;
