import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useTheme } from "@/context/themeContext";
import SubmitButton from "@/components/buttons/SubmitButton";
import styles from "./Form.module.css";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import FormInput from "./Inputs/FormInput";
import { submitRegistration } from "@/utils/FormUtils/submitRegistration";
import { RegisterValidation } from "../../utils/FormUtils/Schemas/RegisterValidation";
import ReCaptcha from "./Inputs/ReCaptcha";

/**
 * RegisterForm component.
 *
 * @component
 * @example
 * return (
 *   <RegisterForm />
 * )
 */
const RegisterForm = () => {
  const { theme } = useTheme();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const captchaTheme = ["dark", "light"].includes(theme) ? theme : "light";
  const { saveUser } = useUserContext();
  const [submitError, setSubmitError] = useState(null);
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={RegisterValidation}
      onSubmit={(values, { setSubmitting }) =>
        submitRegistration(
          values,
          setSubmitting,
          setSubmitError,
          saveUser,
          navigate,
          captchaValue,
          recaptchaRef,
          setCaptchaError
        )
      }
    >
      {({ isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormInput type="text" name="firstName" label="First Name" />

          <FormInput type="text" name="lastName" label="Last Name" />

          <FormInput type="email" name="email" label="Email" />

          <FormInput type="password" name="password" label="Password" />

          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
          />

          <ReCaptcha
            theme={theme}
            setCaptchaValue={setCaptchaValue}
            captchaError={captchaError}
            captchaTheme={captchaTheme}
            recaptchaRef={recaptchaRef}
          ></ReCaptcha>

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
