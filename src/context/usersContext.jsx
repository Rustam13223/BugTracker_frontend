import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useUserContext } from "./userContext";

const UsersContext = createContext();
const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, loading: loadingUser } = useUserContext();

  const fetchUsers = async () => {
    try {
      if (!user) return;
      const response = await axios.get("/api/users", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setUsers(response.data.users);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loadingUser && user) {
      fetchUsers();
    }
  }, [user, loadingUser]);

  return (
    <UsersContext.Provider value={{ users, loading, error }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProvider, useUsersContext };
