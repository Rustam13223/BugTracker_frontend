import $api from "../http";

export default class AuthService {
  static async login(email, password, token, setAuthorised) {
    const response = await $api.post("/auth/login", { email, password, token });

    localStorage.setItem("userData", JSON.stringify(response.data));
    // localStorage.setItem("token", response.data.accessToken);
    setAuthorised(true);
  }
  static async registration(
    firstName,
    secondName,
    email,
    password,
    repeatPassword,
    token,
    setAuthorised
  ) {
    const response = await $api.post("/auth/register", {
      firstName,
      secondName,
      email,
      password,
      repeatPassword,
      token,
    });
    localStorage.setItem("userData", JSON.stringify(response.data));
    // localStorage.setItem("token", response.data.accessToken);
    setAuthorised(true);
  }
  // static async logout() {
  //   return $api.post("/logout");
  // }
}
