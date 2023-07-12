
import React, { createContext, useState } from 'react';

// Create the user context
export const UserContext = createContext();

// UserContextProvider component
export const UserContextProvider = ({ children }) => {
  // Define the initial state for the user context
  const [user, setUser] = useState(null);
    function setUserFn(user) {
        console.log("userFn",user)
        setUser(user)
    }
  // Provide the user context value to the children components
  return (
    <UserContext.Provider value={{ user, setUser: setUserFn }}>
      {children}
    </UserContext.Provider>
  );
};