import React, { useContext, useEffect } from "react";
import { useState, createContext } from "react";

const UserContext = createContext();
const useUserContext = () => useContext(UserContext);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  }, []);
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
