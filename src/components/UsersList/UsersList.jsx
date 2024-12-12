import { useEffect } from "react";
import { useUsersContext } from "../../context/usersContext";
import User from "./User/User";
import styles from "./UsersList.module.css";
/**
 * Renders a list of users.
 *
 * @component
 * @example
 * return (
 *   <UsersList />
 * )
 */
const UsersList = () => {
  const { users } = useUsersContext();
  useEffect(() => {}, [users]);
  return (
    <div className={styles.container}>
      <h1>Users List</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
