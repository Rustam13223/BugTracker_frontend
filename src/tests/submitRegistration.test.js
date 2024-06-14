import axios from "axios";
import { submitRegistration } from "../utils/FormUtils/submitRegistration";

jest.mock("axios");

describe("submitRegistration", () => {
  const values = {
    firstName: "John",
    lastName: "Doe",
    email: "test@example.com",
    password: "password123",
  };
  const setSubmitting = jest.fn();
  const setSubmitError = jest.fn();
  const saveUser = jest.fn();
  const navigate = jest.fn();
  const captchaValue = "captcha123";
  const recaptchaRef = {
    current: {
      reset: jest.fn(),
    },
  };
  const setCaptchaError = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should submit registration form and save user data if successful", async () => {
    const response = {
      data: {
        accessToken: "token123",
      },
    };
    axios.post.mockResolvedValue(response);

    await submitRegistration(
      values,
      setSubmitting,
      setSubmitError,
      saveUser,
      navigate,
      captchaValue,
      recaptchaRef,
      setCaptchaError
    );

    expect(axios.post).toHaveBeenCalledWith("api/auth/register", {
      firstName: values.firstName,
      secondName: values.lastName,
      email: values.email,
      password: values.password,
      token: captchaValue,
    });
    expect(saveUser).toHaveBeenCalledWith(response.data);
    expect(navigate).toHaveBeenCalledWith("/dashboard");
    expect(setSubmitting).toHaveBeenCalledWith(false);
    expect(recaptchaRef.current.reset).toHaveBeenCalled();
    expect(setSubmitError).not.toHaveBeenCalled();
    expect(setCaptchaError).not.toHaveBeenCalled();
  });

  it("should set submit error if the response contains an error message", async () => {
    const response = {
      data: {
        error: "Email already exists",
      },
    };
    axios.post.mockResolvedValue(response);

    await submitRegistration(
      values,
      setSubmitting,
      setSubmitError,
      saveUser,
      navigate,
      captchaValue,
      recaptchaRef,
      setCaptchaError
    );

    expect(setSubmitError).toHaveBeenCalledWith(response.data.error);
    expect(setSubmitting).toHaveBeenCalledWith(false);
    expect(recaptchaRef.current.reset).toHaveBeenCalled();
    expect(saveUser).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
    expect(setCaptchaError).not.toHaveBeenCalled();
  });

  it("should set submit error if an error occurs during the request", async () => {
    const errorMessage = "An error occurred";
    axios.post.mockRejectedValue(new Error(errorMessage));

    await submitRegistration(
      values,
      setSubmitting,
      setSubmitError,
      saveUser,
      navigate,
      captchaValue,
      recaptchaRef,
      setCaptchaError
    );

    expect(setSubmitError).toHaveBeenCalledWith(
      "An error occurred. Please try again later."
    );
    expect(setSubmitting).toHaveBeenCalledWith(false);
    expect(recaptchaRef.current.reset).toHaveBeenCalled();
    expect(saveUser).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
    expect(setCaptchaError).not.toHaveBeenCalled();
  });

  it("should set submit error if there is no response from the server", async () => {
    axios.post.mockRejectedValue({ request: "No response" });

    await submitRegistration(
      values,
      setSubmitting,
      setSubmitError,
      saveUser,
      navigate,
      captchaValue,
      recaptchaRef,
      setCaptchaError
    );

    expect(setSubmitError).toHaveBeenCalledWith(
      "No response from server. Check your network connection."
    );
    expect(setSubmitting).toHaveBeenCalledWith(false);
    expect(recaptchaRef.current.reset).toHaveBeenCalled();
    expect(saveUser).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
    expect(setCaptchaError).not.toHaveBeenCalled();
  });

  it("should set captcha error if captcha value is missing", async () => {
    const emptyCaptchaValue = "";
    await submitRegistration(
      values,
      setSubmitting,
      setSubmitError,
      saveUser,
      navigate,
      emptyCaptchaValue,
      recaptchaRef,
      setCaptchaError
    );

    expect(setCaptchaError).toHaveBeenCalledWith("reCAPTCHA is required");
    expect(setSubmitting).toHaveBeenCalledWith(false);
    expect(recaptchaRef.current.reset).not.toHaveBeenCalled();
    expect(saveUser).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
    expect(setSubmitError).not.toHaveBeenCalled();
  });
});
