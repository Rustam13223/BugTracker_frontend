import React, { useState } from "react";
import { useIssueFilterContext } from "../../../../context/issueFilterContext";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useIssueFilterContext(); // Get setSearchTerm from context
  const [search, setSearch] = useState(searchTerm); // Initialize with the current searchTerm

  const handleChange = (e) => {
    setSearch(e.target.value); // Update local state
    setSearchTerm(e.target.value); // Update context state
  };

  return (
    <input
      data-testid="search-bar"
      className={styles.searchBar}
      value={search} // Controlled component
      onChange={handleChange}
      type="text"
      placeholder="Search..."
    />
  );
};

export default SearchBar;
