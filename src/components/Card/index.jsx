import React from "react";
import "./index.css";

const Card = ({ name, img, id }) => {
  return (
    <div className="cardContainer">
      <div>
        <img src={img} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Card;
