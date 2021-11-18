import React, { useContext } from "react";
import Card from "../../components/Card";
import { UserContext } from "../../userContext";
import "./index.css";

const Rejected = () => {
  const { rejected } = useContext(UserContext);

  return (
    <div className="CardsContainer">
      {rejected?.map((user) => {
        return (
          <Card key={user.id} id={user.id} name={user.name} img={user.Image} />
        );
      })}
    </div>
  );
};

export default Rejected;
