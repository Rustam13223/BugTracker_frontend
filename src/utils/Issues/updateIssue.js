import axios from "axios";
import { API_URL } from "../config";

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

    let bug_status_dict = {
      "open": "OPEN",
      "in progress": "IN_PROGRESS",
      "closed": "CLOSED",
      "done": "DONE"
    }

    if (issueData.status) {
      issueData.status = bug_status_dict[issueData.status];
    }

    response = await axios.patch(`${API_URL}/bugs/${id}`, issueData, {
      headers: {
        Authorization: `Bearer ${user.token}`, // Assuming accessToken is available on user
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
