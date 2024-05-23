import React, { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const IssueFilterContext = createContext();
const useIssueFilterContext = () => useContext(IssueFilterContext);

/**
 * Provides context for managing issue filters and search term.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered component.
 */
const IssueFilterProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filterIssues = (issues) => {
    if (filters.length === 0) return issues;

    return issues.filter((issue) => {
      const statusFilters = ["opened", "in progress", "done", "closed"];
      const severityFilters = ["low", "medium", "high"];

      const issueTags = [
        issue.status.toLowerCase(),
        issue.severity.toLowerCase(),
      ];

      const statusFilter = filters.find((filter) =>
        statusFilters.includes(filter)
      );
      const severityFilter = filters.find((filter) =>
        severityFilters.includes(filter)
      );

      const statusMatch = statusFilter
        ? issueTags.includes(statusFilter)
        : true;
      const severityMatch = severityFilter
        ? issueTags.includes(severityFilter)
        : true;

      return statusMatch && severityMatch;
    });
  };

  const filterBySearchTerm = (issues) => {
    if (!searchTerm.trim()) return issues; // Return all issues if search term is empty
    const lowerSearchTerm = searchTerm.toLowerCase();
    return issues.filter((issue) => {
      return (
        issue.title.toLowerCase().includes(lowerSearchTerm) ||
        (issue.description &&
          issue.description.toLowerCase().includes(lowerSearchTerm))
      );
    });
  };

  return (
    <IssueFilterContext.Provider
      value={{
        filters,
        setFilters,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        filterIssues,
        filterBySearchTerm,
      }}
    >
      {children}
    </IssueFilterContext.Provider>
  );
};

export { useIssueFilterContext, IssueFilterProvider };
