import axios from "axios";

export default getAllBugs = async () => {
  try {
    const response = await axios.get("api/bugs");
    return response.data.bugs;
  } catch (error) {
    return error;
  }
};
