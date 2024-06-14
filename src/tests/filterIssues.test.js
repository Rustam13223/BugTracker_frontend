import filterIssues from "../utils/Issues/filterIssues";

describe("filterIssues", () => {
  const issues = [
    { status: "opened", severity: "low", title: "Issue 1" },
    { status: "in progress", severity: "medium", title: "Issue 2" },
    { status: "done", severity: "high", title: "Issue 3" },
  ];

  it("should return all issues if no filters are provided", () => {
    const result = filterIssues(issues, []);
    expect(result).toEqual(issues);
  });

  it("should filter issues by status", () => {
    const result = filterIssues(issues, ["opened"]);
    expect(result).toEqual([issues[0]]);
  });

  it("should filter issues by severity", () => {
    const result = filterIssues(issues, ["high"]);
    expect(result).toEqual([issues[2]]);
  });

  it("should filter issues by both status and severity", () => {
    const result = filterIssues(issues, ["done", "high"]);
    expect(result).toEqual([issues[2]]);
  });
});
