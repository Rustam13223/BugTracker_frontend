import React, { useEffect, useState } from "react";
import { useIssuesContext } from "../../../context/issuesContext";
import FilterBar from "./FilterBar/FilterBar";
import styles from "./AllIssues.module.css";
import { useIssueFilterContext } from "../../../context/issueFilterContext";
import SlideIn from "../../animations/SlideIn";
import Issue from "./Issue/Issue";
import SearchBar from "./SearchBar/SearchBar";
import SortBar from "./SortBar/SortBar";
import TableLabels from "./TableLabels";

/**
 * Renders the component that displays all the issues.
 *
 * @returns {JSX.Element} The rendered AllIssues component.
 */
const AllIssues = () => {
  const { issues, loading: loadingIssues, error } = useIssuesContext();
  const [filteredIssues, setFilteredIssues] = useState([]);
  const {
    filters,
    searchTerm,
    sortBy,
    filterIssues,
    filterBySearchTerm,
    sortIssues,
  } = useIssueFilterContext();

  useEffect(() => {
    if (!loadingIssues && issues?.length > 0 && !error) {
      let result = filterIssues(issues); // First apply the filters based on tags
      result = filterBySearchTerm(result); // Then filter the already filtered result by search term
      result = sortIssues(result, sortBy); // Finally, sort the result
      setFilteredIssues(result); // Set the filtered and sorted issues
    }
  }, [issues, filters, searchTerm, sortBy, loadingIssues, error]);

  return (
    <div className={styles.container}>
      <SlideIn from="top" once={true}>
        <FilterBar />
      </SlideIn>
      <SearchBar />

      <SortBar />

      <TableLabels />
      {filteredIssues?.map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default AllIssues;
