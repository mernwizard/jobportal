import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../userContext";
import "./index.css";

const SingleUser = (props) => {
  const { match } = props;
  const { userData } = useContext(UserContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (userData.length > 0) {
      setUser(userData.filter((data) => data.id === match.params.id));
    }
  }, []);

  return (
    <div className="singleUserContainer">
      <div className="imgContainer">
        <img src={user[0]?.Image} alt="" />
      </div>
      <div className="detailsContainer"></div>
    </div>
  );
};

export default SingleUser;
