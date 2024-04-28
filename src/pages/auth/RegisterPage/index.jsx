import React, { useContext } from "react";
import AuthLayout from "@/components/Layouts/AuthLayout/AuthLayout";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { useTheme } from "@/context/themeContext";
import SubmitButton from "@/components/buttons/SubmitButton";

const RegisterPage = () => {
  const { theme } = useTheme();
  return (
    <AuthLayout>
      <form>
        <div>
          <label htmlFor="first-name">First name</label>
          <input placeholder="First Name" type="text" id="first-name" />
        </div>
        <div>
          <label htmlFor="lastname">Last name</label>
          <input placeholder="Last Name" type="text" id="lastname" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input placeholder="Email" type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input placeholder="Password" type="password" id="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
          />
        </div>

        <ReCAPTCHA
          theme={theme}
          key={theme}
          className="captcha"
          sitekey={import.meta.env.VITE_CAPTCHA_KEY}
        />
        <SubmitButton type="submit">Sign up</SubmitButton>
        <Link to="/login">
          <p className={styles.p}>Already have an account</p>
        </Link>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
