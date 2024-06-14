import { sortIssues } from "../utils/Issues/sortIssues";

describe("sortIssues", () => {
  const issues = [
    {
      created: "2022-01-01",
      severity: "high",
      status: "Open",
    },
    {
      created: "2022-02-01",
      severity: "medium",
      status: "In Progress",
    },
    {
      created: "2022-03-01",
      severity: "low",
      status: "Closed",
    },
  ];

  it("should sort issues by newest", () => {
    const sortedIssues = sortIssues(issues, "newest");
    expect(sortedIssues).toEqual([
      {
        created: "2022-03-01",
        severity: "low",
        status: "Closed",
      },
      {
        created: "2022-02-01",
        severity: "medium",
        status: "In Progress",
      },
      {
        created: "2022-01-01",
        severity: "high",
        status: "Open",
      },
    ]);
  });

  it("should sort issues by oldest", () => {
    const sortedIssues = sortIssues(issues, "oldest");
    expect(sortedIssues).toEqual([
      {
        created: "2022-01-01",
        severity: "high",
        status: "Open",
      },
      {
        created: "2022-02-01",
        severity: "medium",
        status: "In Progress",
      },
      {
        created: "2022-03-01",
        severity: "low",
        status: "Closed",
      },
    ]);
  });

  it("should sort issues by severity", () => {
    const sortedIssues = sortIssues(issues, "severity");
    expect(sortedIssues).toEqual([
      {
        created: "2022-01-01",
        severity: "high",
        status: "Open",
      },
      {
        created: "2022-02-01",
        severity: "medium",
        status: "In Progress",
      },
      {
        created: "2022-03-01",
        severity: "low",
        status: "Closed",
      },
    ]);
  });

  it("should sort issues by status", () => {
    const sortedIssues = sortIssues(issues, "status");
    expect(sortedIssues).toEqual([
      {
        created: "2022-03-01",
        severity: "low",
        status: "Closed",
      },
      {
        created: "2022-02-01",
        severity: "medium",
        status: "In Progress",
      },
      {
        created: "2022-01-01",
        severity: "high",
        status: "Open",
      },
    ]);
  });

  it("should return the original array if sortBy value is invalid", () => {
    const sortedIssues = sortIssues(issues, "invalid");
    expect(sortedIssues).toEqual(issues);
  });
});
