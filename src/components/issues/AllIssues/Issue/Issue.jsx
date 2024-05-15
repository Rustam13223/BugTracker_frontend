import React from "react";
import styles from "./Issue.module.css";
import { useIssueFilterContext } from "../../../../context/issueFilterContext";
import { useNavigate } from "react-router-dom";
import {
  statusStyles,
  severityStyles,
} from "../../../../utils/IssueUtils/tagsStyles";

const Issue = ({
  issue: { id, title, status, severity, created, assigned_to, reporter },
}) => {
  const navigate = useNavigate();
  return (
    <div
      data-testid="issue"
      className={styles.container}
      onClick={() => navigate(`/issue/${id}`)}
    >
      <p className={styles.id}>{id}</p>
      <p>{title}</p>
      <p>
        Created by <span>{reporter}</span>
      </p>
      <p>
        {assigned_to ? (
          <>
            Assigned to <span>{assigned_to}</span>
          </>
        ) : (
          "Not assigned"
        )}
      </p>
      <p>{`${created.slice(0, 10)} ${created.slice(12, 16)}`}</p>
      <p style={{ ...statusStyles(status) }} className={styles.tag}>
        {status.toUpperCase()}
      </p>
      <p className={styles.tag} style={{ ...severityStyles(severity) }}>
        {severity.toUpperCase()}
      </p>
    </div>
  );
};

export default Issue;
