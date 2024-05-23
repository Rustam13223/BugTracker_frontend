/**
 * Sorts an array of issues based on the specified sorting criteria.
 *
 * @param {Array} issues - The array of issues to be sorted.
 * @param {string} sortBy - The sorting criteria. Possible values: "newest", "oldest", "severity", "status".
 * @returns {Array} - The sorted array of issues.
 */
export const sortIssues = (issues, sortBy) => {
  const severityLevels = {
    low: 1,
    medium: 2,
    high: 3,
  };
  return issues.sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.created) - new Date(a.created);
      case "oldest":
        return new Date(a.created) - new Date(b.created);
      case "severity":
        return severityLevels[b.severity] - severityLevels[a.severity]; // Assuming severity is numerical
      case "status":
        return b.status.localeCompare(a.status); // If status is a string
      default:
        return 0;
    }
  });
};
