import styles from "./Issue.module.css";
import { statusStyles, severityStyles } from "@/utils/IssueUtils/tagsStyles";

const Issue = ({ issue: { title, reporter, created, status, severity } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{`${created.slice(0, 10)} ${created.slice(12, 16)}`}</p>
        <p>Reported by: {reporter}</p>
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
