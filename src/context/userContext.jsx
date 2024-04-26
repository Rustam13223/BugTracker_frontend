import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { useUser } from "@hooks/useUser";

const UserContext = createContext();

const userContext = ({ children }) => {
  const { user, setUser } = useUser();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default userContext;
