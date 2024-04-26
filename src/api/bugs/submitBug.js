import axios from "axios";

export default submitBug = async (title, description, severity, assignedTo) => {
  try {
    const response = await axios.post("api/bugs", {
      title,
      description,
      severity,
      assignedTo,
    });
    return response.data.bug;
  } catch (error) {
    return error;
  }
};
