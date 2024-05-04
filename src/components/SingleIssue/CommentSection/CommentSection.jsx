import styles from "./CommentSection.module.css";

function CommentSection() {
  return (
    <div className={styles.comments}>
      <h3>Comments</h3>
      <p>No comments yet</p>
    </div>
  );
}

export default CommentSection;
