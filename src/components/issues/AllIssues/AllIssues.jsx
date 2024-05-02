import React, { useEffect } from "react";
import { useIssuesContext } from "../../../context/issuesContext";
import FilterBar from "./FilterBar/FilterBar";
import styles from "./AllIssues.module.css";
import { useIssueFilterContext } from "@/context/issueFilterContext";
import { useState } from "react";
import SlideIn from "@/components/animations/SlideIn";
import Issue from "./Issue/Issue";
import SearchBar from "./SearchBar/SearchBar";

const AllIssues = () => {
  const { issues, loading: loadingIssues, error } = useIssuesContext();
  const [filteredIssues, setFilteredIssues] = useState([]);
  const { filter, searchTerm } = useIssueFilterContext();
  useEffect(() => {
    if (!loadingIssues && issues.length > 0) {
      const filteredIssues = issues.filter(
        (issue) =>
          (issue.status.includes(filter) &&
            issue.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (issue.severity.includes(filter) &&
            issue.title.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredIssues(filteredIssues);
    }
  }, [issues, filter, searchTerm]);

  return (
    <div className={styles.container}>
      <SlideIn from="top" once={true}>
        <FilterBar />
      </SlideIn>
      <SearchBar />

      {filteredIssues.map((issue, index) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default AllIssues;
