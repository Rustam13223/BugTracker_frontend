import React, { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";
import { useUserContext } from "./userContext"; // Import user context

const IssuesContext = createContext();
const useIssuesContext = () => useContext(IssuesContext);

const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoadingIssues] = useState(false);
  const [error, setError] = useState(null);
  const { user, loading: loadingUser } = useUserContext(); // Get loading state from UserContext

  const fetchIssues = async () => {
    if (!user) return; // Only fetch issues if there is a user
    try {
      setLoadingIssues(true);
      const response = await axios.get("/api/bugs", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`, // Assuming accessToken is available on user
        },
      });
      if (response.data.error) {
        setError(response.data.error);
        return { error: response.data.error };
      }
      setIssues(response.data.bugs);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingIssues(false);
    }
  };

  const createIssue = async (issueData) => {
    if (!user) return; // Only create issues if there is a user
    try {
      setLoadingIssues(true);
      const response = await axios.post("/api/bugs/create", issueData, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`, // Assuming accessToken is available on user
        },
      });
      if (response.data.error) {
        setError(response.data.error);
      } else {
        setIssues([...issues, response.data.bug]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingIssues(false);
      return response;
    }
  };

  // Effect to fetch issues when user data is loaded and user is authenticated
  useEffect(() => {
    if (!loadingUser && user) {
      fetchIssues();
    }
  }, [user, loadingUser]); // Re-fetch issues when user or their loading state changes

  useEffect(() => {
    console.log(issues);
  }, [issues]);

  return (
    <IssuesContext.Provider value={{ issues, error, loading, createIssue }}>
      {children}
    </IssuesContext.Provider>
  );
};

export { IssuesProvider, useIssuesContext };
