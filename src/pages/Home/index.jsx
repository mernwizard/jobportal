import React, { useContext } from "react";
import Card from "../../components/Card";
import { UserContext } from "../../userContext";
import "./index.css";

const Home = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="CardsContainer">
      {userData?.map((user) => {
        return (
          <Card key={user.id} id={user.id} name={user.name} img={user.Image} />
        );
      })}
    </div>
  );
};

export default Home;
