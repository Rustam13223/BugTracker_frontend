import React from "react";
import styles from "./Issue.module.css";
import { useIssueFilterContext } from "../../../../context/issueFilterContext";
import { useNavigate } from "react-router-dom";

const Issue = ({
  issue: {
    id,
    title,
    description,
    status,
    severity,
    created,
    assigned_to,
    reporter,
  },
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
  const { setFilter } = useIssueFilterContext();
  const navigate = useNavigate();
  return (
    <div className={styles.container} onClick={() => navigate(`/issue/${id}`)}>
      <p>{title}</p>
      <p>{reporter}</p>
      <p>{assigned_to}</p>
      <p>{`${created.slice(0, 10)} ${created.slice(12, 16)}`}</p>
      <p
        style={{ ...statusStyles }}
        className={styles.tag}
        onClick={(e) => {
          setFilter(e.target.innerText.toLowerCase());
          e.stopPropagation();
        }}
      >
        {status.toUpperCase()}
      </p>
      <p
        className={styles.tag}
        style={{ ...severityStyles }}
        onClick={(e) => {
          setFilter(e.target.innerText.toLowerCase());
          e.stopPropagation();
        }}
      >
        {severity.toUpperCase()}
      </p>
    </div>
  );
};

export default Issue;
