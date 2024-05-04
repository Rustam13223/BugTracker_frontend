import { useUsersContext } from "../../context/usersContext";

const UsersList = () => {
  const { users } = useUsersContext();
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.second_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
