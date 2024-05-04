import styles from "./SubmitSuccessful.module.css";
import { motion } from "framer-motion";
import { Checkmark } from "react-checkmark";
import { Link } from "react-router-dom";

const SubmitSuccessful = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <Checkmark size="xxLarge" color="var(--color-primary-100)" />
            <h2>Issue submitted successfully!</h2>
            <Link to="/all-issues">
              <button>View all issues</button>
            </Link>
            <Link to="/dashboard">
              <button>Go to dashboard</button>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SubmitSuccessful;
