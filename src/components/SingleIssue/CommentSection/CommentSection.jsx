import styles from "./CommentSection.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUserContext } from "../../../context/userContext";
import Comment from "./Comment/Comment";
import { API_URL } from "../../../utils/config";

/**
 * Renders a comment section for a specific issue.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.issueId - The ID of the issue.
 * @returns {JSX.Element} The rendered CommentSection component.
 */
function CommentSection({ issueId }) {
  const [comment, setComment] = useState("");
  const { user } = useUserContext();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${API_URL}/bugs/${issueId}/comments`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.data.error) {
        setError(response.data.error);
        return;
      }
      setComments(response.data);
    } catch (error) {
      setError("An error occurred while fetching comments.");
    }
  };

  const handleAddComment = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/bugs/${issueId}/comments/create`,
        {
          comment,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.data.error) {
        console.error(response.data.error);
        return;
      }
      fetchComments();
      setComment("");
    } catch (error) {}
  };

  useEffect(() => {
    fetchComments();
  }, [issueId]);

  return (
    <div className={styles.comments}>
      <h3>Comments</h3>
      <div className={styles.addComment}>
        <textarea
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          className={styles.input}
        />
        <button className={styles.submitBtn} onClick={handleAddComment}>
          Add Comment
        </button>
      </div>
      {comments?.map((comment) => (
        <Comment key={comment.comment} comment={comment} />
      ))}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default CommentSection;
