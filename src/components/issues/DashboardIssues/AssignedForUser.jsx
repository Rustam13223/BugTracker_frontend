import { useEffect, useState } from "react";
import { useUserContext } from "../../../context/userContext";
import { useIssuesContext } from "../../../context/issuesContext";
import { sortIssues } from "../../../utils/Issues/sortIssues";
import { sortIssuesOptions } from "../../../utils/Issues/sortIssuesOptions";
import DashboardIssues from "./DashboardIssues";
/**
 * Renders a component that displays issues assigned to the current user.
 *
 * @component
 * @returns {JSX.Element} The AssignedForUser component.
 */
const AssignedForUser = () => {
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
        (issue) => issue?.assigned_to === user?.email
      );
      const sortedIssues = sortIssues(assignedIssues, sortBy);
      setAssignedIssues(sortedIssues);
    }
  }, [issues, user, loadingIssues, sortBy]);

  return (
    <DashboardIssues
      title="Issues assigned to you"
      issues={assignedIssues}
      error={error}
      sortBy={sortBy}
      handleChange={handleChange}
      selectedOption={selectedOption}
      sortIssuesOptions={sortIssuesOptions}
    />
  );
};

export default AssignedForUser;
