import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Card from "../../components/Card";
import { UserContext } from "../../userContext";
import "./index.css";

const Home = () => {
  const history = useHistory();
  const { userData } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [filteredUserData, setFilteredUserData] = useState();
  useEffect(() => {
    const filteredData = userData.filter((data) =>
      data.name.toLowerCase().includes(userName.toLowerCase())
    );
    setFilteredUserData(filteredData);
  }, [userName, userData]);

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search User by name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {filteredUserData?.length !== 0 ? (
        <div className="CardsContainer">
          <>
            {filteredUserData?.map((user) => {
              return (
                <div key={user.id} onClick={() => history.push(`/${user.id}`)}>
                  <Card id={user.id} name={user.name} img={user.Image} />
                </div>
              );
            })}
          </>
        </div>
      ) : (
        <div className="noDataContainer">No Data Found&nbsp; :(</div>
      )}
    </>
  );
};

export default Home;
