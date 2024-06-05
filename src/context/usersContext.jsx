import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useUserContext } from "./userContext";

const UsersContext = createContext();
const useUsersContext = () => useContext(UsersContext);

/**
 * Provides user-related data and functionality to its children components.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} The rendered component.
 */
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

  const updateUsersRole = async (id, role) => {
    try {
      const response = await axios.patch(
        `/api/users/${id}`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      if (response.data.error) {
        setError(response.data.error);
      } else {
        fetchUsers();
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (!loadingUser && user) {
      fetchUsers();
    }
    console.log(users);
  }, [user, loadingUser]);

  return (
    <UsersContext.Provider value={{ users, loading, error, updateUsersRole }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProvider, useUsersContext };
