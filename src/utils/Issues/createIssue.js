import axios from "axios";

/**
 * Creates a new issue.
 *
 * @param {Object} user - The user object.
 * @param {Object} issueData - The data for the new issue.
 * @param {Function} setLoadingIssues - Function to set loading state.
 * @param {Function} setError - Function to set error state.
 * @param {Function} fetchIssues - Function to fetch issues.
 * @returns {Promise<Object>} - The response from the API.
 */
const createIssue = async (
  user,
  issueData,
  setLoadingIssues,
  setError,
  fetchIssues
) => {
  if (!user) return; // Only create issues if there is a user
  let response;
  try {
    setLoadingIssues(true);
    response = await axios.post("/api/bugs/create", issueData, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`, // Assuming accessToken is available on user
      },
    });
    if (response.data.error) {
      setError(response.data.error);
    } else {
      fetchIssues(); // Re-fetch issues after creating a new issue
    }
  } catch (error) {
    setError(error.message);
  } finally {
    setLoadingIssues(false);
  }
  return response;
};

export default createIssue;
