import React from "react";
import styles from "./Comment.module.css";
import { useUsersContext } from "../../../../context/usersContext";
/**
 * Renders a single comment with user information, comment content, and creation date.
 *
 * @component
 * @param {Object} comment - The comment object containing comment, userId, and createdAt properties.
 * @returns {JSX.Element} - The rendered Comment component.
 */
const Comment = ({ comment: { comment, user, createdAt } }) => {
  return (
    <div className={styles.comment}>
      <p>
        {user.firstName} {user.secondName}
      </p>
      <p>{comment}</p>
      <p>{new Date(createdAt).toLocaleString()}</p>
    </div>
  );
};

export default Comment;
