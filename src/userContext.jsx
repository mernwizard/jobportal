import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider(props) {
  const [userData, setUserData] = useState([]);
  const [shortlisted, setShortlisted] = useState([]);
  const [rejected, setRejected] = useState([]);

  return (
    <UserContext.Provider
      value={{
        setUserData,
        userData,
        shortlisted,
        setShortlisted,
        rejected,
        setRejected,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
