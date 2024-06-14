import React, { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";
import { useUserContext } from "./userContext"; // Import user context
import createIssue from "../utils/Issues/createIssue";
import updateIssue from "../utils/Issues/updateIssue";

const IssuesContext = createContext();
const useIssuesContext = () => useContext(IssuesContext);

/**
 * Provides a context for managing issues.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} The rendered component.
 */
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

  // Effect to fetch issues when user data is loaded and user is authenticated
  useEffect(() => {
    if (!loadingUser && user) {
      fetchIssues();
    }
  }, [user, loadingUser]); // Re-fetch issues when user or their loading state changes

  return (
    <IssuesContext.Provider
      value={{
        issues,
        error,
        loading,
        createIssue: (issueData) =>
          createIssue(user, issueData, setLoadingIssues, setError, fetchIssues),
        updateIssue: (id, issueData) =>
          updateIssue(
            user,
            id,
            issueData,
            setLoadingIssues,
            setError,
            fetchIssues
          ),
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export { IssuesProvider, useIssuesContext };
