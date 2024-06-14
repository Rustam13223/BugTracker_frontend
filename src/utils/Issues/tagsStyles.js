const statusStyles = (status) => ({
  background:
    status.toLowerCase() === "opened"
      ? "var(--color-status-open)"
      : status.toLowerCase() === "closed"
      ? "var(--color-status-closed)"
      : status.toLowerCase() === "in progress"
      ? "#ffa500"
      : "green",
});

/**
 * Returns the background color based on the severity level.
 *
 * @param {string} severity - The severity level of the issue.
 * @returns {object} - An object containing the background color based on the severity level.
 */
const severityStyles = (severity) => ({
  background:
    severity.toLowerCase() === "low"
      ? "var(--color-severity-low)"
      : severity.toLowerCase() === "medium"
      ? "var(--color-severity-medium)"
      : "var(--color-severity-high",
});

export { statusStyles, severityStyles };
