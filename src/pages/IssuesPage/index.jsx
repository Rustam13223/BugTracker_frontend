import React from "react";
import AllIssues from "../../components/issues/AllIssues/AllIssues";
import { IssueFilterProvider } from "../../context/issueFilterContext";

const IssuesPage = () => {
  return (
    <IssueFilterProvider>
      <AllIssues />
    </IssueFilterProvider>
  );
};

export default IssuesPage;
