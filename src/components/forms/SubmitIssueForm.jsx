import { useUsersContext, UsersProvider } from "../../context/usersContext";
import { Formik, ErrorMessage, Field } from "formik";

import { useState } from "react";
import { useEffect } from "react";
import styles from "./Form.module.css";
import SubmitButton from "../buttons/SubmitButton";
import { useIssuesContext } from "@/context/issuesContext";

import SubmitSuccessful from "../modals/SubmitSuccessful/SubmitSuccessful";
import { IssueValidation } from "../../utils/FormUtils/Schemas/IssueValidation";

const SubmitIssueForm = () => {
  const { users, loading: loadingUsers } = useUsersContext();
  const [submitError, setSubmitError] = useState(null);
  const { createIssue, error } = useIssuesContext();
  const [programmers, setProgrammers] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!loadingUsers) {
      const programmers = users.filter((user) => user.role === "programmer");
      setProgrammers(programmers);
    }
  }, [users, loadingUsers]);
  return (
    <>
      <SubmitSuccessful open={success} setOpen={setSuccess} />
      <div className={styles.issueFormContainer}>
        <Formik
          initialValues={{
            title: "",
            description: "",
            severity: "",
            assignedTo: "",
          }}
          validationSchema={IssueValidation}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await createIssue(values);
            } catch (error) {
              setSubmitError(error.message);
            } finally {
              setSubmitting(false);
              resetForm();
              setSuccess(true);
            }
          }}
        >
          {({ isSubmitting, handleSubmit, handleChange }) => (
            <form className={styles.issueForm} onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <Field
                onChange={handleChange}
                placeholder="Title"
                type="text"
                name="title"
              />
              <p className={styles.error}>
                <ErrorMessage name="title" />
              </p>
              <label htmlFor="description">Description</label>
              <Field onChange={handleChange} as="textarea" name="description" />
              <ErrorMessage name="description" />
              <label htmlFor="severity">Severity</label>
              <Field
                onChange={handleChange}
                as="select"
                name="severity"
                className={styles.select}
              >
                <option value="">Select severity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Field>
              <p className={styles.error}>
                <ErrorMessage name="severity" />
              </p>
              <label
                htmlFor="assignedTo
            "
              >
                Assignee
              </label>
              <Field
                onChange={handleChange}
                as="select"
                name="assignedTo"
                className={styles.select}
              >
                <option value="">Select assignee</option>
                <UsersProvider>
                  {programmers.map((user) => (
                    <option key={user.id} value={user.email}>
                      {`${user.first_name} ${user.second_name} ${user.email}`}
                    </option>
                  ))}
                </UsersProvider>
              </Field>
              <ErrorMessage name="assignedTo" />
              <SubmitButton height={"40px"} disabled={isSubmitting}>
                Submit
              </SubmitButton>
              {submitError && <p className={styles.error}>{error}</p>}
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SubmitIssueForm;
