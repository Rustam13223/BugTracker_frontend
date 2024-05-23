import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useTheme } from "@/context/themeContext";
import SubmitButton from "@/components/buttons/SubmitButton";
import styles from "./Form.module.css";
import { useUserContext } from "../../context/userContext";
import FormInput from "./Inputs/FormInput";
import { submitLogin } from "../../utils/FormUtils/submitLogin";
import { LoginValidation } from "../../utils/FormUtils/Schemas/LoginValidation";
import ReCaptcha from "./Inputs/ReCaptcha";

/**
 * LoginForm component represents a form for user login.
 *
 * @component
 * @example
 * return (
 *   <LoginForm />
 * )
 */
const LoginForm = () => {
  const { theme } = useTheme();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const captchaTheme = ["dark", "light"].includes(theme) ? theme : "light";
  const [submitError, setSubmitError] = useState(null);
  const { saveUser } = useUserContext();
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginValidation}
      onSubmit={async (values, { setSubmitting }) => {
        await submitLogin(
          values,
          setSubmitting,
          setSubmitError,
          saveUser,
          navigate,
          captchaValue,
          recaptchaRef,
          setCaptchaError
        );
      }}
      validateOnChange={false}
      validateOnBlur={true}
    >
      {({ isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <FormInput type="email" name="email" label="Email" />
          <FormInput type="password" name="password" label="Password" />

          <ReCaptcha
            theme={theme}
            setCaptchaValue={setCaptchaValue}
            captchaError={captchaError}
            captchaTheme={captchaTheme}
            recaptchaRef={recaptchaRef}
          ></ReCaptcha>

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
