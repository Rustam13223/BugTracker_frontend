import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Issue from "./Issue/Issue";
import IssueModal from "./IssueModal/IssueModal";
import styles from "./ListIssues.module.css";

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
        <motion.div
          key={issue.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          layoutId={issue.id}
          onClick={() => handleIssueClick(issue.id)}
        >
          <Issue issue={issue} />
        </motion.div>
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
