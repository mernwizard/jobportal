import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import "./index.css";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setUserData(data));
  };

  return (
    <div className="CardsContainer">
      {userData?.map((user) => {
        return <Card key={user.id} name={user.name} img={user.Image} />;
      })}
    </div>
  );
};

export default Home;
