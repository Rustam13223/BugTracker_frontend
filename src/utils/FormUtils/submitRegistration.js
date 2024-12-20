import axios from "axios";
import { API_URL } from "../config";

/**
 * Submits the registration form with the provided values.
 *
 * @param {Object} values - The form values.
 * @param {Function} setSubmitting - A function to set the submitting state.
 * @param {Function} setSubmitError - A function to set the submit error message.
 * @param {Function} saveUser - A function to save the user data.
 * @param {Function} navigate - A function to navigate to a different page.
 * @param {string} captchaValue - The value of the reCAPTCHA.
 * @param {Object} recaptchaRef - A reference to the reCAPTCHA component.
 * @param {Function} setCaptchaError - A function to set the captcha error message.
 * @returns {Promise<void>} - A promise that resolves when the registration is submitted.
 */
export const submitRegistration = async (
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
    const response = await axios.post(`${API_URL}/auth/register`, {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      captchaToken: captchaValue,
    });
    if (response.data.error) {
      setSubmitError(response.data.error);
    } else if (response.data.token) {
      saveUser(response.data.userData, response.data.token);
      navigate("/dashboard");
    }
    console.log(response);
  } catch (error) {
    if (error.response) {
      setSubmitError(
        error.response.data.error ||
          "An error occurred. Please try again later."
      );
    } else if (error.request) {
      setSubmitError("No response from server. Check your network connection.");
    } else {
      setSubmitError("An error occurred. Please try again later.");
    }
  }
  recaptchaRef.current.reset();
  setSubmitting(false);
};
