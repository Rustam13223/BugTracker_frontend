import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Issue from "./Issue/Issue";
import IssueModal from "../../modals/IssueModal/IssueModal";
import styles from "./ListIssues.module.css";

/**
 * Renders a list of issues and handles the selection of an issue to display in a modal.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.items - The array of issues to render.
 * @returns {JSX.Element} The rendered ListIssues component.
 */
const ListIssues = ({ items: issues }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIssueClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.listIssues}>
      {issues.map((issue) => (
        <div key={issue.id} onClick={() => handleIssueClick(issue.id)}>
          <Issue issue={issue} />
        </div>
      ))}

      <AnimatePresence>
        {isModalOpen && (
          <IssueModal
            issue={issues.find((issue) => issue.id === selectedId)}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ListIssues;
