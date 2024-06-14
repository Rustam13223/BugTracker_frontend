/**
 * Filters issues based on the provided filters.
 *
 * @param {Array} issues - The list of issues to filter.
 * @param {Array} filters - The filters to apply.
 * @returns {Array} The filtered list of issues.
 */
const filterIssues = (issues, filters) => {
  if (filters.length === 0) return issues;

  return issues.filter((issue) => {
    const statusFilters = ["opened", "in progress", "done", "closed"];
    const severityFilters = ["low", "medium", "high"];

    const issueTags = [
      issue.status.toLowerCase(),
      issue.severity.toLowerCase(),
    ];

    const statusFilter = filters.find((filter) =>
      statusFilters.includes(filter)
    );
    const severityFilter = filters.find((filter) =>
      severityFilters.includes(filter)
    );

    const statusMatch = statusFilter ? issueTags.includes(statusFilter) : true;
    const severityMatch = severityFilter
      ? issueTags.includes(severityFilter)
      : true;

    return statusMatch && severityMatch;
  });
};

export default filterIssues;
