import { useEffect, useState } from "react";
import { useUserContext } from "../../../context/userContext";
import { useIssuesContext } from "../../../context/issuesContext";
import { sortIssues } from "../../../utils/IssueUtils/sortIssues";
import { sortIssuesOptions } from "../../../utils/IssueUtils/sortIssuesOptions";
import DashboardIssues from "./DashboardIssues";

const CreatedByUser = () => {
  const { user } = useUserContext();
  const { issues, loading: loadingIssues, error } = useIssuesContext();
  const [sortBy, setSortBy] = useState("newest"); // [1
  const [assignedIssues, setAssignedIssues] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    setSortBy(option.value);
  };
  useEffect(() => {
    if (!loadingIssues && user) {
      const assignedIssues = issues.filter(
        (issue) => issue?.reporter === user?.email
      );
      const sortedIssues = sortIssues(assignedIssues, sortBy);
      setAssignedIssues(sortedIssues);
    }
  }, [issues, user, loadingIssues, sortBy]);

  return (
    <DashboardIssues
      title="Issues submited by you"
      issues={assignedIssues}
      error={error}
      sortBy={sortBy}
      handleChange={handleChange}
      selectedOption={selectedOption}
      sortIssuesOptions={sortIssuesOptions}
    />
  );
};

export default CreatedByUser;
