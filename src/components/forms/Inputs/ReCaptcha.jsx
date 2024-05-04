import ReCAPTCHA from "react-google-recaptcha";
import styles from "../Form.module.css";

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
