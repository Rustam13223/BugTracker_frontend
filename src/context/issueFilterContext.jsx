import React, { createContext, useState, useContext } from "react";
import filterBySearchTerm from "../utils/Issues/filterBySearchTerm";
import filterIssues from "../utils/Issues/filterIssues";
import { sortIssues } from "../utils/Issues/sortIssues";

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

  return (
    <IssueFilterContext.Provider
      value={{
        filters,
        setFilters,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        filterIssues: (issues) => filterIssues(issues, filters),
        filterBySearchTerm: (issues) => filterBySearchTerm(issues, searchTerm),
        sortIssues: (issues) => sortIssues(issues, sortBy),
      }}
    >
      {children}
    </IssueFilterContext.Provider>
  );
};

export { useIssueFilterContext, IssueFilterProvider };
