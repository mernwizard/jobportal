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
        <p>{user[0]?.name}</p>
      </div>
      <div className="detailsContainer">
        <ul>
          <li>Skills:</li>
          <li>Experience:</li>
          <li>Projects:</li>
          <li>Education</li>

          <div className="btnContainer">
            <button className="shortListBtn btn">Shortlist</button>
            <button className="rejectBtn btn">Reject</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SingleUser;
