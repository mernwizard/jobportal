import React, { useEffect, useState } from "react";
import "./index.css";

const SingleUser = (props) => {
  const { match } = props;
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    setCurrentUserId(match.params.id);
  }, []);

  return (
    <div className="singleUserContainer">
      <div className="imgContainer">
        <img src="" alt="" />
      </div>
      <div className="detailsContainer"></div>
    </div>
  );
};

export default SingleUser;
