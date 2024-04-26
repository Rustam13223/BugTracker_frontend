import React from "react";
import AuthLayout from "@/components/Layouts/AuthLayout/AuthLayout";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const captchaKey = import.meta.env.VITE_CAPTCHA_KEY;
  console.log(captchaKey);
  return (
    <AuthLayout page="login">
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input placeholder="Email" type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input placeholder="Password" type="password" id="password" />
        </div>
        <ReCAPTCHA
          theme="dark"
          className={styles.captcha}
          sitekey={captchaKey}
        />
        <button type="submit">Sign in</button>
        <Link to="/register">
          <p className={styles.p}>Sign up here</p>
        </Link>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
