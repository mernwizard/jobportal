import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../userContext";
import "./index.css";

const SingleUser = (props) => {
  const { match } = props;
  const history = useHistory();
  const { userData, shortlisted, setShortlisted, rejected, setRejected } =
    useContext(UserContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(userData.filter((data) => data.id === match.params.id));
    if (userData.length > 0) {
    }
  }, []);

  const handleShortlist = async (data) => {
    await setShortlisted([...shortlisted, data[0]]);
    history.push("/");
  };

  const handleReject = async (data) => {
    await setRejected([...rejected, data[0]]);
    await history.push("/");
  };

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
            <button
              className="shortListBtn btn"
              onClick={() => handleShortlist(user)}
            >
              Shortlist
            </button>
            <button
              className="rejectBtn btn"
              onClick={() => handleReject(user)}
            >
              Reject
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SingleUser;
