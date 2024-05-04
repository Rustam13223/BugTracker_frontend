const statusStyles = (status) => ({
  background:
    status.toLowerCase() === "opened"
      ? "var(--color-status-open)"
      : "var(--color-status-closed)",
});

const severityStyles = (severity) => ({
  background:
    severity.toLowerCase() === "low"
      ? "var(--color-severity-low)"
      : severity.toLowerCase() === "medium"
      ? "var(--color-severity-medium)"
      : "var(--color-severity-high",
});

export { statusStyles, severityStyles };
