import React from "react";
import "./index.css";
import { useHistory } from "react-router";

const Card = ({ name, img, id }) => {
  const history = useHistory();
  return (
    <div className="cardContainer" onClick={() => history.push(`/${id}`)}>
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Card;
