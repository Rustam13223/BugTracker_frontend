import axios from "axios";
import { API_URL } from "../config";

/**
 * Updates the role of a user.
 *
 * @param {Object} user - The current user object.
 * @param {string} id - The ID of the user to update.
 * @param {string} role - The new role to assign to the user.
 * @param {Function} setError - Function to set error state.
 * @param {Function} fetchUsers - Function to fetch users.
 * @returns {Promise<Object>} - The response from the API.
 */
const updateUsersRole = async (user, id, role, setError, fetchUsers) => {
  try {
    const response = await axios.patch(
      `${API_URL}/users/${id}?role=${role}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (response.data.error) {
      setError(response.data.error);
    } else {
      fetchUsers();
    }
  } catch (error) {
    setError(error.message);
  }
};

export default updateUsersRole;
