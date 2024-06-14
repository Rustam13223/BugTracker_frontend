/**
 * Filters issues based on the provided search term.
 *
 * @param {Array} issues - The list of issues to filter.
 * @param {string} searchTerm - The search term to apply.
 * @returns {Array} The filtered list of issues.
 */
const filterBySearchTerm = (issues, searchTerm) => {
  if (!searchTerm.trim()) return issues; // Return all issues if search term is empty
  const lowerSearchTerm = searchTerm.toLowerCase();
  return issues.filter((issue) => {
    return (
      issue.title.toLowerCase().includes(lowerSearchTerm) ||
      (issue.description &&
        issue.description.toLowerCase().includes(lowerSearchTerm))
    );
  });
};

export default filterBySearchTerm;
