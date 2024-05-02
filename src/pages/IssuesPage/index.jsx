import React from "react";
import AllIssues from "../../components/issues/AllIssues/AllIssues";
import { FilterProvider } from "../../context/filterContext";

const IssuesPage = () => {
  return (
    <FilterProvider>
      <AllIssues />
    </FilterProvider>
  );
};

export default IssuesPage;
