import React from "react";
import styles from "./FilterBar.module.css";
import { useIssueFilterContext } from "@/context/issueFilterContext";

const FilterBar = () => {
  const { filter, setFilter } = useIssueFilterContext();
  const handleClick = (filter) => {
    setFilter(filter);
    console.log(filter);
  };
  return (
    <div className={styles.filterBar}>
      <ul>
        {/* Apply 'active' class dynamically based on the current filter */}
        <li
          className={filter === "" ? styles.active : styles.notActive}
          onClick={() => handleClick("")}
        >
          All issues
        </li>
        <li
          className={filter === "opened" ? styles.active : styles.notActive}
          onClick={() => handleClick("opened")}
        >
          Open issues
        </li>
        <li
          className={filter === "closed" ? styles.active : styles.notActive}
          onClick={() => handleClick("closed")}
        >
          Closed issues
        </li>
        <li
          className={filter === "low" ? styles.active : styles.notActive}
          onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
        >
          Low
        </li>
        <li
          className={filter === "medium" ? styles.active : styles.notActive}
          onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
        >
          Medium
        </li>
        <li
          className={filter === "high" ? styles.active : styles.notActive}
          onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
        >
          High
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
