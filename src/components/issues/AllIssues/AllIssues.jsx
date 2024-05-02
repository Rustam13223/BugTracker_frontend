import React, { useEffect } from "react";
import { useIssuesContext } from "../../../context/issuesContext";
import FilterBar from "./FilterBar/FilterBar";
import styles from "./AllIssues.module.css";
import { useFilterContext } from "@/context/filterContext";
import { useState } from "react";
import SlideIn from "@/components/animations/SlideIn";

const AllIssues = () => {
  const { issues, loading: loadingIssues, error } = useIssuesContext();
  const [filteredIssues, setFilteredIssues] = useState([]);
  const { filter } = useFilterContext();
  useEffect(() => {
    if (!loadingIssues && issues.length > 0) {
      const filteredIssues = issues.filter(
        (issue) =>
          issue.status.includes(filter) || issue.severity.includes(filter)
      );
      console.log(filteredIssues);
      setFilteredIssues(filteredIssues);
    }
  }, [issues, filter]);

  return (
    <div className={styles.container}>
      <SlideIn from="top" once={true}>
        <FilterBar />
      </SlideIn>
      {filteredIssues.map((issue) => (
        <div key={issue.id}>
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllIssues;
