import axios from "axios";

export default Register = async (
  firstName,
  secondName,
  email,
  password,
  repeatPassword,
  token
) => {
  try {
    const response = await axios.post("api/auth/register", {
      firstName,
      secondName,
      email,
      password,
      repeatPassword,
      token,
    });
    if (response.data.error) {
      console.log(response.data.error);
      return response.data.error;
    }

    localStorage.setItem("user", response.data);
  } catch (error) {
    console.log(error);
  }
  return response.data;
};
