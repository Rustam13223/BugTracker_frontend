const severityLevels = {
  low: 1,
  medium: 2,
  high: 3,
};

/**
 * Sorts an array of issues based on the specified sorting criteria.
 *
 * @param {Array} issues - The array of issues to be sorted.
 * @param {string} sortBy - The sorting criteria. Possible values: "newest", "oldest", "severity", "status".
 * @returns {Array} - The sorted array of issues.
 */
export const sortIssues = (issues, sortBy) => {
  return issues.slice().sort((a, b) => {
    // use slice() to avoid mutating the original array
    switch (sortBy) {
      case "newest":
        return new Date(b.created) - new Date(a.created);
      case "oldest":
        return new Date(a.created) - new Date(b.created);
      case "severity":
        return (
          severityLevels[b.severity.toLowerCase()] -
          severityLevels[a.severity.toLowerCase()]
        );
      case "status":
        return a.status.localeCompare(b.status); // Correctly sort by status
      default:
        return 0;
    }
  });
};
