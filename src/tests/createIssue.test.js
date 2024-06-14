import axios from "axios";
import createIssue from "../utils/Issues/createIssue";

jest.mock("axios");

describe("createIssue", () => {
  const user = {
    accessToken: "token123",
  };
  const issueData = {
    title: "Sample Issue",
    description: "This is a sample issue",
  };
  const setLoadingIssues = jest.fn();
  const setError = jest.fn();
  const fetchIssues = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new issue and fetch issues if successful", async () => {
    const response = {
      data: {},
    };
    axios.post.mockResolvedValue(response);

    await createIssue(user, issueData, setLoadingIssues, setError, fetchIssues);

    expect(axios.post).toHaveBeenCalledWith("/api/bugs/create", issueData, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    expect(setError).not.toHaveBeenCalled();
    expect(fetchIssues).toHaveBeenCalled();
    expect(setLoadingIssues).toHaveBeenCalledTimes(2);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(1, true);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(2, false);
  });

  it("should set error if the response contains an error message", async () => {
    const response = {
      data: {
        error: "Failed to create issue",
      },
    };
    axios.post.mockResolvedValue(response);

    await createIssue(user, issueData, setLoadingIssues, setError, fetchIssues);

    expect(setError).toHaveBeenCalledWith(response.data.error);
    expect(fetchIssues).not.toHaveBeenCalled();
    expect(setLoadingIssues).toHaveBeenCalledTimes(2);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(1, true);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(2, false);
  });

  it("should set error if an error occurs during the request", async () => {
    const errorMessage = "An error occurred";
    axios.post.mockRejectedValue(new Error(errorMessage));

    await createIssue(user, issueData, setLoadingIssues, setError, fetchIssues);

    expect(setError).toHaveBeenCalledWith(errorMessage);
    expect(fetchIssues).not.toHaveBeenCalled();
    expect(setLoadingIssues).toHaveBeenCalledTimes(2);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(1, true);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(2, false);
  });

  it("should not create an issue if there is no user", async () => {
    await createIssue(null, issueData, setLoadingIssues, setError, fetchIssues);

    expect(axios.post).not.toHaveBeenCalled();
    expect(setError).not.toHaveBeenCalled();
    expect(fetchIssues).not.toHaveBeenCalled();
    expect(setLoadingIssues).not.toHaveBeenCalled();
  });
});
