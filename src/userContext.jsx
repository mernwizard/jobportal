import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider(props) {
  const [userData, setUserData] = useState(false);

  return (
    <UserContext.Provider
      value={{
        setUserData,
        userData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
