import { motion } from "framer-motion";
import styles from "./IssueModal.module.css";
import issueStyles from "../../issues/ListIssues/Issue/Issue.module.css";
import { IoClose } from "react-icons/io5";
import SubmitButton from "@/components/buttons/SubmitButton";
import { Link } from "react-router-dom";
import BugtrackerSvg from "@/assets/BugtrackerSvg";
import { statusStyles, severityStyles } from "@/utils/Issues/tagsStyles";

/**
 * Renders a modal component for displaying issue details.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.issue - The issue object containing details like id, title, description, reporter, created, status, severity, and assigned_to.
 * @param {string} props.issue.id - The unique identifier of the issue.
 * @param {string} props.issue.title - The title of the issue.
 * @param {string} props.issue.description - The description of the issue.
 * @param {string} props.issue.reporter - The name of the person who reported the issue.
 * @param {string} props.issue.created - The timestamp when the issue was created.
 * @param {string} props.issue.status - The status of the issue.
 * @param {string} props.issue.severity - The severity level of the issue.
 * @param {string} props.issue.assigned_to - The name of the person assigned to the issue.
 * @param {Function} props.onClose - The function to be called when the modal is closed.
 * @returns {JSX.Element} The rendered IssueModal component.
 */
const IssueModal = ({
  issue: {
    id,
    title,
    description,
    reporter,
    created,
    status,
    severity,
    assigned_to,
  },
  onClose,
}) => {
  const handleClickInside = (e) => {
    e.stopPropagation(); // Prevents the click from propagating to the backdrop
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
              <p
                className={issueStyles.tag}
                style={{ ...statusStyles(status) }}
              >
                Status: {status.toUpperCase()}
              </p>
              <p
                className={issueStyles.tag}
                style={{ ...severityStyles(severity) }}
              >
                Severity: {severity.toUpperCase()}
              </p>
            </div>
          </div>
          <p>{`${created.slice(0, 10)} ${created.slice(12, 16)}`}</p>
          <p>Reported by: {reporter.email}</p>

          <p>
            {assigned_to ? <>Assigned to: {assigned_to}</> : "Not assigned"}
          </p>
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
