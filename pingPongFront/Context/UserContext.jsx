import React, { createContext, useState } from "react";

// Create the user context
export const UserContext = createContext();

// UserContextProvider component
export const UserContextProvider = ({ children }) => {
  // Define the initial state for the user context
  const [userInfo, setUserInfo] = useState(null);

  // Provide the user context value to the children components
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
