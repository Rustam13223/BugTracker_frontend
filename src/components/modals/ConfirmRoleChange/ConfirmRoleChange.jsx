import React from "react";
import { motion } from "framer-motion";
import styles from "./ConfirmRoleChange.module.css";
import SubmitButton from "@/components/buttons/SubmitButton";

/**
 * Renders a modal for confirming a role change.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.user - The user object.
 * @param {string} props.newRole - The new role.
 * @param {Function} props.handleConfirm - The function to handle the confirmation.
 * @param {Function} props.handleCancel - The function to handle the cancellation.
 * @returns {JSX.Element} The ConfirmRoleChange component.
 */
const ConfirmRoleChange = ({ user, newRole, handleConfirm, handleCancel }) => {
  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.modal}>
        <div className={styles.content}>
          <p>
            Are you sure you want to change the role of {user.first_name}{" "}
            {user.second_name}
          </p>
          {user.role && (
            <>
              <p>From</p>
              <p className={styles.oldRole}>{user.role}</p>
            </>
          )}

          <p>To</p>
          <p className={styles.newRole}>{newRole}</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleConfirm} className={styles.confirmBtn}>
            Yes
          </button>
          <button onClick={handleCancel} className={styles.cancelBtn}>
            No
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfirmRoleChange;
