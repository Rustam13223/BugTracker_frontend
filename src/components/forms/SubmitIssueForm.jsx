import React from "react";
import { useUsersContext, UsersProvider } from "../../context/usersContext";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Form.module.css";
import SubmitButton from "../buttons/SubmitButton";
import axios from "axios";
import { useIssuesContext } from "@/context/issuesContext";

const SubmitIssueForm = () => {
  const { users, loading: loadingUsers } = useUsersContext();
  const [submitError, setSubmitError] = useState(null);
  const { createIssue, error } = useIssuesContext();
  const [programmers, setProgrammers] = useState([]);
  useEffect(() => {
    if (!loadingUsers) {
      const programmers = users.filter((user) => user.role === "programmer");
      setProgrammers(programmers);
    }
  }, [users, loadingUsers]);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    priority: Yup.string().required("Priority is required"),
  });
  return (
    <div className={styles.issueFormContainer}>
      <Formik
        initialValues={{
          title: "",
          description: "",
          priority: "",
          assignee: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await createIssue(values);
            if (response.data.error) {
              setSubmitError(response.data.error);
            } else {
              setSubmitError(null);
            }
          } catch (error) {
            setSubmitError(error.message);
          } finally {
            setSubmitting(false);
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
            <label htmlFor="priority">Priority</label>
            <Field
              onChange={handleChange}
              as="select"
              name="priority"
              className={styles.select}
            >
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Field>
            <p className={styles.error}>
              <ErrorMessage name="priority" />
            </p>
            <label htmlFor="assignee">Assignee</label>
            <Field
              onChange={handleChange}
              as="select"
              name="assignee"
              className={styles.select}
            >
              <option value="">Select assignee</option>
              <UsersProvider>
                {programmers.map((user) => (
                  <option key={user.id} value={user.id}>
                    {`${user.first_name} ${user.second_name} ${user.email}`}
                  </option>
                ))}
              </UsersProvider>
            </Field>
            <ErrorMessage name="assignee" />
            <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
            {submitError && <p className={styles.error}>{submitError}</p>}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SubmitIssueForm;
