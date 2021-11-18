import React, { useContext } from "react";
import Card from "../../components/Card";
import { UserContext } from "../../userContext";

const ShortListed = () => {
  const { shortlisted } = useContext(UserContext);

  return (
    <div className="CardsContainer">
      {shortlisted?.map((user) => {
        return (
          <Card key={user.id} id={user.id} name={user.name} img={user.Image} />
        );
      })}
    </div>
  );
};

export default ShortListed;
