import React from "react";
import styles from "./Issue.module.css";
import { useIssueFilterContext } from "../../../../context/issueFilterContext";
import { useNavigate } from "react-router-dom";
import {
  statusStyles,
  severityStyles,
} from "../../../../utils/Issues/tagsStyles";

/**
 * Renders an individual issue.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.issue - The issue object.
 * @param {string} props.issue.id - The unique identifier of the issue.
 * @param {string} props.issue.title - The title of the issue.
 * @param {string} props.issue.status - The status of the issue.
 * @param {string} props.issue.severity - The severity of the issue.
 * @param {string} props.issue.created - The creation date of the issue.
 * @param {string} props.issue.assigned_to - The person assigned to the issue.
 * @param {string} props.issue.reporter - The person who reported the issue.
 * @returns {JSX.Element} The rendered Issue component.
 */
const Issue = ({
  issue: { id, title, status, severity, created, assignedTo, reporter },
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
        Created by <span>{reporter.email}</span>
      </p>
      <p>
        {assignedTo?.email ? (
          <>
            Assigned to <span>{assignedTo.email}</span>
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
