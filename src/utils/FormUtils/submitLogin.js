import axios from "axios";

export const submitLogin = async (
  values,
  setSubmitting,
  setSubmitError,
  saveUser,
  navigate,
  captchaValue,
  recaptchaRef,
  setCaptchaError
) => {
  if (!captchaValue) {
    setCaptchaError("reCAPTCHA is required");
    setSubmitting(false);
    return;
  }
  try {
    const response = await axios.post("api/auth/login", {
      email: values.email,
      password: values.password,
      token: captchaValue,
    });
    if (response.data.error) {
      setSubmitError(response.data.error);
    } else if (response.data.accessToken) {
      saveUser(response.data);
      navigate("/dashboard");
    }
  } catch (error) {
    if (error.response) {
      setSubmitError(
        error.response.data.error ||
          "An error occurred. Please try again later."
      );
    } else if (error.request) {
      console.log(error.request);
      setSubmitError("No response from server. Check your network connection.");
    } else {
      console.log("Error", error.message);
      setSubmitError("An error occurred. Please try again later.");
    }
  }
  recaptchaRef.current.reset();
  setSubmitting(false);
};
