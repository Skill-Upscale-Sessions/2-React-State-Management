import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const addUsername = (user) => setUsername(user);
  console.log(username);

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout, addUsername, username }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUserContext = () => useContext(UserContext);