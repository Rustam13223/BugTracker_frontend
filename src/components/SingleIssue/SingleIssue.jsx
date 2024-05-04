import React from "react";
import styles from "./SingleIssue.module.css";
import { severityStyles, statusStyles } from "@/utils/IssueUtils/tagsStyles";

import CommentSection from "./CommentSection/CommentSection";

const SingleIssue = ({
  issue: {
    title,
    reporter,
    description,
    created,
    assigned_to,
    status,
    severity,
    id,
  },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.id}>
        <p>Issue ID: #{id}</p>
        <p>Created: {new Date(created).toDateString()}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>Reported by: {reporter}</p>
          {assigned_to ? <p>Assigned to: {assigned_to}</p> : "Not assigned"}
          <div className={styles.tags}>
            <p className={styles.tag} style={{ ...statusStyles(status) }}>
              {status}
            </p>
            <p className={styles.tag} style={{ ...severityStyles(severity) }}>
              {severity}
            </p>
          </div>
        </div>
        <div className={styles.description}>
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <CommentSection></CommentSection>
      </div>
    </div>
  );
};

export default SingleIssue;
