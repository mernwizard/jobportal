import React from "react";
import "./index.css";

const Card = ({ name, img }) => {
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Card;
