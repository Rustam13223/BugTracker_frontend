import { useContext, useEffect, useState, createContext } from "react";

const UserContext = createContext();
const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initially true, indicating loading is in progress

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
    }
    setLoading(false); // Set loading to false after attempting to fetch user data
  }, []);

  const saveUser = (user) => {
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

  return (
    <UserContext.Provider value={{ user, loading, saveUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
