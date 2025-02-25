import styles from "./Issue.module.css";
import { statusStyles, severityStyles } from "@/utils/Issues/tagsStyles";

/**
 * Renders an issue component.
 *
 * @component
 * @param {Object} issue - The issue object.
 * @param {string} issue.title - The title of the issue.
 * @param {string} issue.reporter - The name of the reporter.
 * @param {string} issue.created - The creation date of the issue.
 * @param {string} issue.status - The status of the issue.
 * @param {string} issue.severity - The severity of the issue.
 * @returns {JSX.Element} The rendered Issue component.
 */
const Issue = ({ issue: { title, reporter, created, status, severity } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{`${created.slice(0, 10)} ${created.slice(12, 16)}`}</p>
        <p>Reported by: {reporter.email}</p>
      </div>
      <div className={styles.tags}>
        <p className={styles.tag} style={{ ...statusStyles(status) }}>
          {status.toUpperCase()}
        </p>
        <p className={styles.tag} style={{ ...severityStyles(severity) }}>
          {severity.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default Issue;
