import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@/context/themeContext";
import SubmitButton from "@/components/buttons/SubmitButton";
import styles from "./Form.module.css";
import axios from "axios";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { theme } = useTheme();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState(null);
  const captchaTheme = ["dark", "light"].includes(theme) ? theme : "light";
  const { user, setUser } = useUserContext();
  const [submitError, setSubmitError] = useState(null);
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        if (!captchaValue) {
          setCaptchaError("reCAPTCHA is required");
          setSubmitting(false);
          return;
        }
        try {
          const response = await axios.post("api/auth/register", {
            firstName: values.firstName,
            secondName: values.lastName,
            email: values.email,
            password: values.password,
            token: captchaValue,
          });
          if (response.data.error) {
            setSubmitError(response.data.error);
          } else if (response.data.accessToken) {
            setUser(response.data);
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
            setSubmitError(
              "No response from server. Check your network connection."
            );
          } else {
            console.log("Error", error.message);
            setSubmitError("An error occurred. Please try again later.");
          }
        }
        recaptchaRef.current.reset();
        setSubmitting(false);
      }}
      onChange={(e) => {
        values[e.target.name] = e.target.value;
      }}
    >
      {({ isSubmitting, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first-name">First name</label>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              id="first-name"
              onChange={handleChange}
            />
            <p className={styles.error}>
              <ErrorMessage name="firstName" />
            </p>
          </div>

          <div>
            <label htmlFor="lastname">Last name</label>
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              id="lastname"
              onChange={handleChange}
            />
            <p className={styles.error}>
              <ErrorMessage name="lastName" />
            </p>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              id="email"
              name="email"
              onChange={handleChange}
            />
            <p className={styles.error}>
              <ErrorMessage name="email" />
            </p>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
            <p className={styles.error}>
              <ErrorMessage name="password" />
            </p>
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              placeholder="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
            />
            <p className={styles.error}>
              <ErrorMessage name="confirmPassword" />
            </p>
          </div>

          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              theme={captchaTheme}
              key={theme}
              sitekey={import.meta.env.VITE_CAPTCHA_KEY}
              onChange={(value) => {
                setCaptchaValue(value);
              }}
              onExpired={() => setCaptchaValue(null)}
            />
            <p className={styles.error}>{captchaError && captchaError}</p>
          </div>

          <SubmitButton disabled={isSubmitting} height="2.5rem" type="submit">
            Sign up
          </SubmitButton>
          <p className={styles.error}>{submitError}</p>

          <Link to="/login">
            <p className={styles.p}>Already have an account</p>
          </Link>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
