import axios from "axios";

/**
 * Updates an existing issue.
 *
 * @param {Object} user - The user object.
 * @param {string} id - The ID of the issue to update.
 * @param {Object} issueData - The data to update the issue with.
 * @param {Function} setLoadingIssues - Function to set loading state.
 * @param {Function} setError - Function to set error state.
 * @param {Function} fetchIssues - Function to fetch issues.
 * @returns {Promise<Object>} - The response from the API.
 */
const updateIssue = async (
  user,
  id,
  issueData,
  setLoadingIssues,
  setError,
  fetchIssues
) => {
  if (!user) return; // Only update issues if there is a user
  let response;
  try {
    setLoadingIssues(true);
    response = await axios.patch(`/api/bugs/${id}`, issueData, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`, // Assuming accessToken is available on user
      },
    });
    if (response.data.error) {
      setError(response.data.error);
    } else {
      fetchIssues(); // Re-fetch issues after updating an issue
    }
  } catch (error) {
    setError(error.message);
  } finally {
    setLoadingIssues(false);
  }
  return response;
};

export default updateIssue;
