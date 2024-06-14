import axios from "axios";
import updateUsersRole from "../utils/Users/updateUsersRole";

jest.mock("axios");

describe("updateUsersRole", () => {
  const user = {
    accessToken: "token123",
  };
  const id = "user123";
  const role = "admin";
  const setError = jest.fn();
  const fetchUsers = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update the role of a user and fetch users if successful", async () => {
    const response = {
      data: {},
    };
    axios.patch.mockResolvedValue(response);

    await updateUsersRole(user, id, role, setError, fetchUsers);

    expect(axios.patch).toHaveBeenCalledWith(
      `/api/users/${id}`,
      { role },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    expect(setError).not.toHaveBeenCalled();
    expect(fetchUsers).toHaveBeenCalled();
  });

  it("should set error if the response contains an error message", async () => {
    const response = {
      data: {
        error: "Failed to update user role",
      },
    };
    axios.patch.mockResolvedValue(response);

    await updateUsersRole(user, id, role, setError, fetchUsers);

    expect(setError).toHaveBeenCalledWith(response.data.error);
    expect(fetchUsers).not.toHaveBeenCalled();
  });

  it("should set error if an error occurs during the request", async () => {
    const errorMessage = "An error occurred";
    axios.patch.mockRejectedValue(new Error(errorMessage));

    await updateUsersRole(user, id, role, setError, fetchUsers);

    expect(setError).toHaveBeenCalledWith(errorMessage);
    expect(fetchUsers).not.toHaveBeenCalled();
  });
});
