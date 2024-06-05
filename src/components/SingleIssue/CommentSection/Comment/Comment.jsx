import React from "react";
import styles from "./Comment.module.css";
import { useUsersContext } from "../../../../context/usersContext";
const Comment = ({ comment: { comment, userId, createdAt } }) => {
  const { users } = useUsersContext();
  const user = users.find((user) => user.id === userId);

  return (
    <div className={styles.comment}>
      <p>
        {user.first_name} {user.second_name}
      </p>
      <p>{comment}</p>
      <p>{new Date(createdAt).toLocaleString()}</p>
    </div>
  );
};

export default Comment;
