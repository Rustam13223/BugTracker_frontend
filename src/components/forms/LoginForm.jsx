import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@/context/themeContext";
import SubmitButton from "@/components/buttons/SubmitButton";
import styles from "./Form.module.css";
import axios from "axios";
import { useUserContext } from "../../context/userContext";

const LoginForm = () => {
  const { theme } = useTheme();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const captchaTheme = ["dark", "light"].includes(theme) ? theme : "light";
  const [submitError, setSubmitError] = useState(null);
  const { saveUser } = useUserContext();
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        if (!captchaValue) {
          setCaptchaError("reCAPTCHA is required");
          setSubmitting(false);
          return;
        }
        try {
          const response = await axios.post("/api/auth/login", {
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
            Sign in
          </SubmitButton>
          <p className={styles.error}>{submitError}</p>
          <Link to="/register">
            <p className={styles.p}>Sign up here</p>
          </Link>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
