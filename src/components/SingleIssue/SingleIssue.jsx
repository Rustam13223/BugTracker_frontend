import React from "react";
import styles from "./SingleIssue.module.css";
import { severityStyles, statusStyles } from "@/utils/IssueUtils/tagsStyles";
import { useUserContext } from "@/context/userContext";
import CommentSection from "./CommentSection/CommentSection";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { useUsersContext } from "../../context/usersContext";
import CustomSelect from "@/components/forms/Inputs/CustomSelect";
import { useIssuesContext } from "../../context/issuesContext";
/**
 * Renders a single issue with its details and allows editing of certain fields.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.issue - The issue object containing the issue details.
 * @param {string} props.issue.title - The title of the issue.
 * @param {string} props.issue.reporter - The email of the reporter of the issue.
 * @param {string} props.issue.description - The description of the issue.
 * @param {string} props.issue.created - The timestamp when the issue was created.
 * @param {string} props.issue.assigned_to - The email of the user assigned to the issue.
 * @param {string} props.issue.status - The status of the issue.
 * @param {string} props.issue.severity - The severity of the issue.
 * @param {string} props.issue.id - The unique ID of the issue.
 * @returns {JSX.Element} The rendered SingleIssue component.
 */
const SingleIssue = ({
  issue: {
    title,
    reporter,
    description,
    created,
    assigned_to,
    status,
    severity,
    id,
  },
}) => {
  const { updateIssue } = useIssuesContext();
  const { user } = useUserContext();
  const { users } = useUsersContext();
  const programmers = users.filter((user) => user.role === "programmer");
  const [showEditDescription, setShowEditDescription] = useState(false);
  const [showEditTitle, setShowEditTitle] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const [newTitle, setNewTitle] = useState(title);
  const [changes, setChanges] = useState({});
  const [newAssignee, setNewAssignee] = useState(assigned_to);
  const [newStatus, setNewStatus] = useState(status);
  const [newSeverity, setNewSeverity] = useState(severity);
  const [savedSuccessfully, setSavedSuccessfully] = useState(false);

  const canEdit = reporter === user.email;
  const isAssigned = assigned_to === user.email;
  const assigneeOptions = programmers.map((programmer) => ({
    value: programmer.id,
    label: `${programmer.first_name} ${programmer.second_name}`,
  }));
  const statusOptions = [
    { value: "opened", label: "Open" },
    { value: "in progress", label: "In Progress" },
    { value: "closed", label: "Closed" },
    { value: "done", label: "Done" },
  ];
  const severityOptions = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];
  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
    setChanges((prev) => ({ ...prev, description: e.target.value }));
  };
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
    setChanges((prev) => ({ ...prev, title: e.target.value }));
  };
  const handleAssigneeChange = (selectedOption) => {
    setNewAssignee(selectedOption.value);
    setChanges((prev) => ({ ...prev, assigned_to: selectedOption.value }));
  };
  const handleStatusChange = (selectedOption) => {
    setNewStatus(selectedOption.value);
    setChanges((prev) => ({ ...prev, status: selectedOption.value }));
  };
  const handleSeverityChange = (selectedOption) => {
    setNewSeverity(selectedOption.value);
    setChanges((prev) => ({ ...prev, severity: selectedOption.value }));
  };
  const handleSave = async () => {
    try {
      const response = await updateIssue(id, { ...changes });
      if (!response.data.error) {
        setSavedSuccessfully(true);
        setChanges({});
        setTimeout(() => {
          setSavedSuccessfully(false);
        }, 3000);
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.id}>
        <p>Issue ID: #{id}</p>
        <p>Created: {new Date(created).toDateString()}</p>
        {Object.keys(changes).length > 0 && (
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
        )}
        {savedSuccessfully && Object.keys(changes).length === 0 && (
          <p className={styles.success}>Saved successfully</p>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h2>
            {showEditTitle ? (
              <input
                type="text"
                value={newTitle}
                className={styles.editTitle}
                onChange={(e) => handleTitleChange(e)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setShowEditTitle(false); // Hide the input field
                  }
                }}
              />
            ) : (
              newTitle
            )}{" "}
            {canEdit && (
              <FaRegEdit
                onClick={() => setShowEditTitle((prev) => !prev)}
                className={styles.editIcon}
              />
            )}
          </h2>
          <p>Reported by: {reporter}</p>
          {canEdit ? (
            <CustomSelect
              options={assigneeOptions}
              value={newAssignee}
              label="Assigned to"
              placeholder={assigned_to}
              onChange={(selectedOption) => {
                handleAssigneeChange(selectedOption);
              }}
            />
          ) : assigned_to ? (
            <p>{assigned_to}</p>
          ) : (
            "Not assigned"
          )}
          <div className={styles.tags}>
            {canEdit || isAssigned ? (
              <CustomSelect
                label="Status"
                options={statusOptions}
                value={newStatus}
                onChange={(selectedOption) => {
                  handleStatusChange(selectedOption);
                }}
              />
            ) : (
              <p className={styles.tag} style={{ ...statusStyles(status) }}>
                {status}
              </p>
            )}

            {canEdit ? (
              <CustomSelect
                label="Severity"
                options={severityOptions}
                value={newSeverity}
                onChange={(selectedOption) => {
                  handleSeverityChange(selectedOption);
                }}
              />
            ) : (
              <p className={styles.tag} style={{ ...severityStyles(severity) }}>
                {severity}
              </p>
            )}
          </div>
        </div>
        <div className={styles.description}>
          <h3>
            Description{" "}
            {canEdit && (
              <FaRegEdit
                onClick={() => setShowEditDescription((prev) => !prev)}
                className={styles.editIcon}
              />
            )}
          </h3>
          {showEditDescription ? (
            <textarea
              className={styles.editDescription}
              value={newDescription}
              onChange={(e) => handleDescriptionChange(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  setShowEditDescription(false);
                }
              }}
            ></textarea>
          ) : (
            <p>{newDescription}</p>
          )}
        </div>
        <CommentSection></CommentSection>
      </div>
    </div>
  );
};

export default SingleIssue;
