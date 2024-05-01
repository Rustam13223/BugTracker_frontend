import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ListIssues.module.css";
import Issue from "./Issue/Issue";

const ListIssues = ({ items: issues }) => {
  return (
    <div className={styles.listIssues}>
      <AnimatePresence>
        {issues.map((issue) => (
          <motion.div
            key={issue.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Issue issue={issue} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ListIssues;
