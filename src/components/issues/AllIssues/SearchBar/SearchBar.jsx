import React from "react";
import styles from "./SearchBar.module.css";
import { useIssueFilterContext } from "../../../../context/issueFilterContext";

const SearchBar = () => {
  const { setSearchTerm } = useIssueFilterContext();
  return (
    <input
      className={styles.searchBar}
      onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      placeholder="Search..."
    />
  );
};

export default SearchBar;
