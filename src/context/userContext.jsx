import React, { useContext, useEffect, useState, createContext } from "react";

const UserContext = createContext();
const useUserContext = () => useContext(UserContext);

/**
 * Provides user-related data and functionality to its child components.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} The rendered component.
 */
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initially true, indicating loading is in progress
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
    }
    setLoading(false); // Set loading to false after attempting to fetch user data
  }, []);

  const saveUser = (user, token) => {
    user.token = token;
    const userString = JSON.stringify(user);
    localStorage.setItem("user", userString);
    setUser(user);
    setLoading(false); // Optionally, set loading to false when done saving
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setLoading(false); // Reset loading after logout
  };

  useEffect(() => {
    if (user && user.role === "ADMIN") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, loading, saveUser, logout, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
