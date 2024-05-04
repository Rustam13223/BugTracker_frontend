import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const IssueFilterContext = createContext();
const useIssueFilterContext = () => useContext(IssueFilterContext);

const IssueFilterProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filterIssues = (issues) => {
    return issues.filter((issue) => {
      const issueTags = [
        issue.title,
        issue.description,
        issue.reported,
        issue.assigned_to,
        issue.status,
        issue.severity,
      ]
        .filter((tag) => tag !== undefined && tag !== null)
        .map((tag) => tag.toString().toLowerCase());

      const lowerCaseFilters = filters.map((filter) => {
        // Check if the filter is an object with a value property
        if (typeof filter === "object" && filter.value) {
          return filter.value.toLowerCase();
        }
        // Otherwise, assume it's a string
        return filter.toLowerCase();
      });

      return lowerCaseFilters.every((filterValue) =>
        issueTags.some((tag) => tag.includes(filterValue))
      );
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
