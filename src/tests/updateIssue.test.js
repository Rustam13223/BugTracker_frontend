import axios from "axios";
import updateIssue from "../utils/Issues/updateIssue";

jest.mock("axios");

describe("updateIssue", () => {
  const user = {
    accessToken: "token123",
  };
  const id = "issue123";
  const issueData = {
    title: "Updated Issue",
    description: "This is an updated issue",
  };
  const setLoadingIssues = jest.fn();
  const setError = jest.fn();
  const fetchIssues = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update the issue and fetch issues if successful", async () => {
    const response = {
      data: {},
    };
    axios.patch.mockResolvedValue(response);

    await updateIssue(
      user,
      id,
      issueData,
      setLoadingIssues,
      setError,
      fetchIssues
    );

    expect(axios.patch).toHaveBeenCalledWith(`/api/bugs/${id}`, issueData, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    expect(fetchIssues).toHaveBeenCalled();
    expect(setError).not.toHaveBeenCalled();
    expect(setLoadingIssues).toHaveBeenCalledTimes(2);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(1, true);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(2, false);
  });

  it("should set error if the response contains an error message", async () => {
    const response = {
      data: {
        error: "Failed to update issue",
      },
    };
    axios.patch.mockResolvedValue(response);

    await updateIssue(
      user,
      id,
      issueData,
      setLoadingIssues,
      setError,
      fetchIssues
    );

    expect(setError).toHaveBeenCalledWith(response.data.error);
    expect(fetchIssues).not.toHaveBeenCalled();
    expect(setLoadingIssues).toHaveBeenCalledTimes(2);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(1, true);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(2, false);
  });

  it("should set error if an error occurs during the request", async () => {
    const errorMessage = "An error occurred";
    axios.patch.mockRejectedValue(new Error(errorMessage));

    await updateIssue(
      user,
      id,
      issueData,
      setLoadingIssues,
      setError,
      fetchIssues
    );

    expect(setError).toHaveBeenCalledWith(errorMessage);
    expect(fetchIssues).not.toHaveBeenCalled();
    expect(setLoadingIssues).toHaveBeenCalledTimes(2);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(1, true);
    expect(setLoadingIssues).toHaveBeenNthCalledWith(2, false);
  });

  it("should not update the issue if there is no user", async () => {
    await updateIssue(
      null,
      id,
      issueData,
      setLoadingIssues,
      setError,
      fetchIssues
    );

    expect(axios.patch).not.toHaveBeenCalled();
    expect(fetchIssues).not.toHaveBeenCalled();
    expect(setError).not.toHaveBeenCalled();
    expect(setLoadingIssues).not.toHaveBeenCalled();
  });
});
