import React, { useContext } from "react";
import { useHistory } from "react-router";
import Card from "../../components/Card";
import { UserContext } from "../../userContext";
import "./index.css";

const Home = () => {
  const history = useHistory();
  const { userData } = useContext(UserContext);

  return (
    <div className="CardsContainer">
      {userData?.map((user) => {
        return (
          <div onClick={() => history.push(`/${user.id}`)}>
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              img={user.Image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
