import styles from "./CommentSection.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUserContext } from "../../../context/userContext";
import Comment from "./Comment/Comment";

function CommentSection({ issueId }) {
  const [comment, setComment] = useState("");
  const { user } = useUserContext();
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/api/bugs/${issueId}/comments`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (response.data.error) {
        console.error(response.data.error);
        return;
      }
      setComments(response.data.comments);
      console.log(response.data.comments);
    } catch (error) {
      //@TODO: Handle error
    }
  };

  const handleAddComment = async () => {
    try {
      const response = await axios.post(
        `/api/bugs/${issueId}/comments/create`,
        {
          comment,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
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
    </div>
  );
}

export default CommentSection;
