import axios from "axios";

export default login = async (email, password) => {
  try {
    const response = await axios.post("api/auth/login", {
      email,
      password,
    });
    if (response.data.error) {
      console.log(response.data.error);
      return response.data.error;
    }
    localStorage.setItem("user", response.data);
  } catch (error) {
    return error;
  }
  return response.data;
};
