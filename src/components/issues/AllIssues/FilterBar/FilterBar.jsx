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
      // Status filters that should be mutually exclusive
      const statusFilters = ["opened", "in progress", "done", "closed"];

      if (statusFilters.includes(filter)) {
        // If the filter clicked is one of the status filters
        if (prevFilters.includes(filter)) {
          // If filter is already active, deactivate it
          return prevFilters.filter((f) => f !== filter);
        } else {
          // Deactivate all other status filters and activate the clicked one
          return prevFilters
            .filter((f) => !statusFilters.includes(f)) // Remove any active status filters
            .concat(filter); // Add the clicked filter
        }
      } else if (filter === "") {
        // Clear all filters
        return [];
      } else {
        // Handle severity filters: toggle behavior
        const severityFilters = ["low", "medium", "high"];
        if (prevFilters.includes(filter)) {
          return prevFilters.filter((f) => f !== filter);
        } else {
          return prevFilters
            .filter((f) => !severityFilters.includes(f)) // Remove other severity filters
            .concat(filter); // Add the clicked severity filter
        }
      }
    });
  };

  return (
    <div data-testid="filter-bar" className={styles.filterBar}>
      <ul>
        {/* Apply 'active' class dynamically based on the current filter */}
        <li
          className={
            !filters.includes("opened") &&
            !filters.includes("closed") &&
            !filters.includes("in progress") &&
            !filters.includes("done") &&
            !filters.includes("low") &&
            !filters.includes("medium") &&
            !filters.includes("high")
              ? styles.active
              : styles.notActive
          }
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
          onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
        >
          Low
        </li>
        <li
          className={
            filters.includes("medium") ? styles.active : styles.notActive
          }
          onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
        >
          Medium
        </li>
        <li
          className={
            filters.includes("high") ? styles.active : styles.notActive
          }
          onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
        >
          High
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
