import React from "react";
import styles from "./Issue.module.css";

const Issue = ({
  issue: { title, description, reporter, created, status, severity },
}) => {
  const statusStyles = {
    background: status.toLowerCase() === "opened" ? "green" : "black",
  };
  const severityStyles = {
    background:
      severity.toLowerCase() === "low"
        ? "green"
        : severity.toLowerCase() === "medium"
        ? "orange"
        : "red",
  };
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{`${created.slice(0, 10)} ${created.slice(12, 16)}`}</p>
        <p>Reported by: {reporter}</p>
      </div>
      <div className={styles.tags}>
        <p className={styles.tag} style={{ ...statusStyles }}>
          Status: {status.toUpperCase()}
        </p>
        <p className={styles.tag} style={{ ...severityStyles }}>
          Severity: {severity.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default Issue;
