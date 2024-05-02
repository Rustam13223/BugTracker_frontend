import React, { useEffect, useState } from "react";
import { useUserContext } from "../../../context/userContext";
import { useIssuesContext } from "../../../context/issuesContext";
import styles from "./AssignedForUser.module.css";
import ListIssues from "../ListIssues/ListIssues";

const AssignedForUser = () => {
  const { user } = useUserContext();
  const { issues, loading: loadingIssues, error } = useIssuesContext();
  const [sortCategory, setSortCategory] = useState("newest"); // [1
  const [assignedIssues, setAssignedIssues] = useState([]);
  useEffect(() => {
    if (!loadingIssues && user) {
      const assignedIssues = issues.filter(
        (issue) => issue?.assigned_to === user?.email
      );
      const severityLevels = {
        low: 1,
        medium: 2,
        high: 3,
      };
      const sortedIssues = assignedIssues.sort((a, b) => {
        switch (sortCategory) {
          case "newest":
            return new Date(b.created) - new Date(a.created);
          case "oldest":
            return new Date(a.created) - new Date(b.created);
          case "severity":
            return severityLevels[b.severity] - severityLevels[a.severity]; // Assuming severity is numerical
          case "status":
            return b.status.localeCompare(a.status); // If status is a string
          default:
            return 0;
        }
      });
      setAssignedIssues(sortedIssues);
    }
  }, [issues, user, loadingIssues, sortCategory]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Issues assigned to you</h3>
        {/*choose sorting method*/}

        {assignedIssues.length > 0 ? (
          <select
            name="sort"
            className={styles.select}
            onChange={(e) => setSortCategory(e.target.value.toLowerCase())}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="severity">Severity</option>
            <option value="status">Status</option>
          </select>
        ) : (
          ""
        )}
      </div>
      {assignedIssues.length === 0 ? (
        error ? (
          <p>{error}</p>
        ) : (
          <p>No issues assigned to you</p>
        )
      ) : (
        <ListIssues items={assignedIssues} />
      )}

      {/* <ul>
        {assignedIssues.map((issue) => (
          <li key={issue.id}>{issue.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default AssignedForUser;
