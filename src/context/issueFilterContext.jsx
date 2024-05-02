import React, { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const IssueFilterContext = createContext();
const useIssueFilterContext = () => useContext(IssueFilterContext);

const IssueFilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <IssueFilterContext.Provider
      value={{ filter, setFilter, searchTerm, setSearchTerm }}
    >
      {children}
    </IssueFilterContext.Provider>
  );
};

export { useIssueFilterContext, IssueFilterProvider };
