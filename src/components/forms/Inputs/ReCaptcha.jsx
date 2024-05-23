import ReCAPTCHA from "react-google-recaptcha";
import styles from "../Form.module.css";

/**
 * Renders a ReCaptcha component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.Ref} props.recaptchaRef - The ref for the ReCaptcha component.
 * @param {string} props.captchaTheme - The theme for the ReCaptcha component.
 * @param {string} props.theme - The theme key for the ReCaptcha component.
 * @param {string} props.captchaError - The error message for the ReCaptcha component.
 * @param {function} props.setCaptchaValue - The function to set the value of the ReCaptcha component.
 * @returns {JSX.Element} The rendered ReCaptcha component.
 */
function ReCaptcha(props) {
  return (
    <div>
      <ReCAPTCHA
        ref={props.recaptchaRef}
        theme={props.captchaTheme}
        key={props.theme}
        sitekey={import.meta.env.VITE_CAPTCHA_KEY}
        onChange={(value) => {
          props.setCaptchaValue(value);
        }}
        onExpired={() => props.setCaptchaValue(null)}
      />
      <p className={styles.error}>{props.captchaError && props.captchaError}</p>
    </div>
  );
}

export default ReCaptcha;
