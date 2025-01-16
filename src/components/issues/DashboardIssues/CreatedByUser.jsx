import { useEffect, useState } from "react";
import { useUserContext } from "../../../context/userContext";
import { useIssuesContext } from "../../../context/issuesContext";
import { sortIssues } from "../../../utils/Issues/sortIssues";
import { sortIssuesOptions } from "../../../utils/Issues/sortIssuesOptions";
import DashboardIssues from "./DashboardIssues";

/**
 * Renders a component that displays issues submitted by the current user.
 *
 * @returns {JSX.Element} The rendered component.
 */
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
    if (!loadingIssues && user && issues) {
      const assignedIssues = issues.filter(
        (issue) => issue?.reporter.email === user?.email
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
