import React from "react";
import styles from "./AllIssues.module.css";

/**
 * Renders the table labels for the issues table.
 *
 * @returns {JSX.Element} The table labels component.
 */
function TableLabels() {
  return (
    <div className={styles.tableLabels}>
      <p className={styles.id}>ID</p>
      <p className={styles.title}>Title</p>
      <p className={styles.reporter}>Reporter</p>
      <p className={styles.assigned}>Assigned to</p>
      <p className={styles.created}>Created</p>
      <p className={styles.status}>Status</p>
      <p className={styles.severity}>Severity</p>
    </div>
  );
}

export default TableLabels;
