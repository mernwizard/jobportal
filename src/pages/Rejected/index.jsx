import React, { useContext } from "react";
import Card from "../../components/Card";
import { UserContext } from "../../userContext";

const Rejected = () => {
  const { rejected } = useContext(UserContext);

  return (
    <>
      {rejected.length > 0 ? (
        <div className="CardsContainer">
          {rejected?.map((user) => {
            return (
              <Card
                key={user.id}
                id={user.id}
                name={user.name}
                img={user.Image}
              />
            );
          })}
        </div>
      ) : (
        <div className="noDataContainer">No Data Found&nbsp; :(</div>
      )}
    </>
  );
};

export default Rejected;
