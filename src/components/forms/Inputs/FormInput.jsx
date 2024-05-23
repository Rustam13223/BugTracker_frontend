import { useField } from "formik";
import styles from "../Form.module.css";

/**
 * A reusable form input component.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {string} props.label - The label for the input.
 * @returns {JSX.Element} The rendered FormInput component.
 */
function FormInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} placeholder={label} />
      {meta.touched && meta.error ? (
        <p className={styles.error}>{meta.error}</p>
      ) : null}
    </div>
  );
}

export default FormInput;
