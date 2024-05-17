import React from "react";
import styles from "./FilterBar.module.css";
import { useIssueFilterContext } from "../../../../context/issueFilterContext";

const FilterBar = () => {
  const { filters, setFilters } = useIssueFilterContext();
  const handleClick = (filter) => {
    setFilters((prevFilters) => {
      // Determine if the filter is for issue status or severity
      if (filter === "opened" || filter === "closed") {
        // Manage issue status filters: only one can be active, mutually exclusive
        const newFilters = prevFilters.filter(
          (f) => f !== "opened" && f !== "closed"
        );
        if (!prevFilters.includes(filter)) {
          return [...newFilters, filter];
        }
        return newFilters;
      } else if (filter === "") {
        const newFilters = prevFilters.filter(
          (f) =>
            f !== "opened" &&
            f !== "closed" &&
            f !== "low" &&
            f !== "medium" &&
            f !== "high"
        );
        if (!prevFilters.includes(filter)) {
          return [...newFilters];
        }
        return newFilters;
      } else {
        // Manage severity filters: "low", "medium", "high" - only one can be active
        const severityFilters = ["low", "medium", "high"];
        const newFilters = prevFilters.filter(
          (f) => !severityFilters.includes(f)
        ); // Remove all severity filters
        if (!prevFilters.includes(filter)) {
          return [...newFilters, filter]; // Add the selected severity filter
        }

        return newFilters; // If already included, return without re-adding (acts as toggle)
      }
    });
    console.log(filters);
  };
  return (
    <div data-testid="filter-bar" className={styles.filterBar}>
      <ul>
        {/* Apply 'active' class dynamically based on the current filter */}
        <li
          className={
            !filters.includes("opened") &&
            !filters.includes("closed") &&
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
