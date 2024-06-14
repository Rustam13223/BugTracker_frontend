import filterBySearchTerm from "../utils/Issues/filterBySearchTerm";

describe("filterBySearchTerm", () => {
  const issues = [
    { title: "Issue 1", description: "Description 1" },
    { title: "Issue 2", description: "Description 2" },
    { title: "Important Issue", description: "Important description" },
  ];

  it("should return all issues if search term is empty", () => {
    const result = filterBySearchTerm(issues, "");
    expect(result).toEqual(issues);
  });

  it("should filter issues by title", () => {
    const result = filterBySearchTerm(issues, "important");
    expect(result).toEqual([issues[2]]);
  });

  it("should filter issues by description", () => {
    const result = filterBySearchTerm(issues, "description 1");
    expect(result).toEqual([issues[0]]);
  });

  it("should filter issues by both title and description", () => {
    const result = filterBySearchTerm(issues, "issue");
    expect(result).toEqual(issues);
  });
});
