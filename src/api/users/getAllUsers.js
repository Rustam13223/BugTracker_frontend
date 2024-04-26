import axios from "axios";

export default getAllUsers = async () => {
  try {
    const response = await axios.get("api/users");
    return response.data.users;
  } catch (error) {
    return error;
  }
};
