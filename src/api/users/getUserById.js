import axios from "axios";

export default getUserById = async (userId) => {
  try {
    const response = await axios.get("api/users/" + userId);
    return response.data.user;
  } catch (error) {
    return error;
  }
};
