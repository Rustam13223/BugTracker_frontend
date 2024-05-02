import React from "react";
import { motion } from "framer-motion";
import styles from "./IssueModal.module.css";
import issueStyles from "../Issue/Issue.module.css";
import { IoClose } from "react-icons/io5";
import SubmitButton from "@/components/buttons/SubmitButton";
import { Link } from "react-router-dom";
import BugtrackerSvg from "@/assets/BugtrackerSvg";

const IssueModal = ({
  issue: { id, title, description, reporter, created, status, severity },
  onClose,
}) => {
  const handleClickInside = (e) => {
    e.stopPropagation(); // Prevents the click from propagating to the backdrop
  };
  const statusStyles = {
    background: status.toLowerCase() === "opened" ? "green" : "black",
  };
  const severityStyles = {
    background:
      severity.toLowerCase() === "low"
        ? "green"
        : severity.toLowerCase() === "medium"
        ? "orange"
        : "red",
  };

  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className={styles.modal} onClick={handleClickInside}>
        <div className={styles.buttons}>
          <BugtrackerSvg size={"2.5rem"} />
          <button className={styles.closeBtn} onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className={styles.top}>
          <div className={styles.header}>
            <h2>{title}</h2>

            <div className={styles.tags}>
              <p className={issueStyles.tag} style={{ ...statusStyles }}>
                Status: {status.toUpperCase()}
              </p>
              <p className={issueStyles.tag} style={{ ...severityStyles }}>
                Severity: {severity.toUpperCase()}
              </p>
            </div>
          </div>
          <p>{`${created.slice(0, 10)} ${created.slice(12, 16)}`}</p>
          <p>Reported by: {reporter}</p>
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <Link to={`/issue/${id}`}>
          <SubmitButton>Go to the issue page</SubmitButton>
        </Link>
      </div>
    </motion.div>
  );
};

export default IssueModal;
