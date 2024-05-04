import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIssuesContext } from "@/context/issuesContext";
import SingleIssue from "../../components/SingleIssue/SingleIssue";

const SingleIssuePage = () => {
  const { issues } = useIssuesContext();
  const { issueId } = useParams(); // Extract issueId from URL parameters
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    // Convert issueId to a number if it is stored as a number in your issues
    const numericIssueId = parseInt(issueId);
    // Find the issue from the issues array using the numericIssueId
    const foundIssue = issues.find((issue) => issue.id === numericIssueId);
    setIssue(foundIssue); // Set the found issue to state
  }, [issues, issueId]); // Depend on issues and issueId to re-run when either changes

  return <div>{issue && <SingleIssue issue={issue} />}</div>;
};

export default SingleIssuePage;
