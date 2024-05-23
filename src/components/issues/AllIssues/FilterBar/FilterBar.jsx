import React from "react";
import styles from "./FilterBar.module.css";
import { useIssueFilterContext } from "../../../../context/issueFilterContext";

/**
 * FilterBar component displays a list of filters for issue status and severity.
 * It allows the user to select and apply filters to the issues.
 */
const FilterBar = () => {
  const { filters, setFilters } = useIssueFilterContext();

  const handleClick = (filter) => {
    setFilters((prevFilters) => {
      const statusFilters = ["opened", "in progress", "done", "closed"];
      const severityFilters = ["low", "medium", "high"];

      if (statusFilters.includes(filter)) {
        // If the filter clicked is one of the status filters
        if (prevFilters.includes(filter)) {
          return prevFilters.filter((f) => f !== filter);
        } else {
          // Remove all status filters and add the new one
          return [
            ...prevFilters.filter((f) => !statusFilters.includes(f)),
            filter,
          ];
        }
      } else if (severityFilters.includes(filter)) {
        // Handle severity filters: toggle behavior
        if (prevFilters.includes(filter)) {
          return prevFilters.filter((f) => f !== filter);
        } else {
          // Remove all severity filters and add the new one
          return [
            ...prevFilters.filter((f) => !severityFilters.includes(f)),
            filter,
          ];
        }
      } else {
        // Clear all filters
        return [];
      }
    });
  };

  return (
    <div data-testid="filter-bar" className={styles.filterBar}>
      <ul>
        <li
          className={filters.length === 0 ? styles.active : styles.notActive}
          onClick={() => handleClick("")}
        >
          All issues
        </li>
        <li
          className={
            filters.includes("opened") ? styles.active : styles.notActive
          }
          onClick={() => handleClick("opened")}
        >
          Open
        </li>
        <li
          className={
            filters.includes("in progress") ? styles.active : styles.notActive
          }
          onClick={() => handleClick("in progress")}
        >
          In progress
        </li>
        <li
          className={
            filters.includes("done") ? styles.active : styles.notActive
          }
          onClick={() => handleClick("done")}
        >
          Done
        </li>
        <li
          className={
            filters.includes("closed") ? styles.active : styles.notActive
          }
          onClick={() => handleClick("closed")}
        >
          Closed
        </li>
        <li
          className={filters.includes("low") ? styles.active : styles.notActive}
          onClick={() => handleClick("low")}
        >
          Low
        </li>
        <li
          className={
            filters.includes("medium") ? styles.active : styles.notActive
          }
          onClick={() => handleClick("medium")}
        >
          Medium
        </li>
        <li
          className={
            filters.includes("high") ? styles.active : styles.notActive
          }
          onClick={() => handleClick("high")}
        >
          High
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
