import axios from "axios";

export default getBugById = async (bugId) => {
  try {
    const response = await axios.get("api/bugs/" + bugId);
    return response.data.bug;
  } catch (error) {
    return error;
  }
};
