import { useUsersContext, UsersProvider } from "../../context/usersContext";
import { Formik, ErrorMessage, Field } from "formik";

import { useState } from "react";
import { useEffect } from "react";
import styles from "./Form.module.css";
import SubmitButton from "../buttons/SubmitButton";
import { useIssuesContext } from "@/context/issuesContext";

import SubmitSuccessful from "../modals/SubmitSuccessful/SubmitSuccessful";
import { IssueValidation } from "../../utils/FormUtils/Schemas/IssueValidation";

import CustomSelect from "@/components/forms/Inputs/CustomSelect";
/**
 * SubmitIssueForm component.
 *
 * This component renders a form for submitting an issue.
 *
 * @component
 * @example
 * return (
 *   <SubmitIssueForm />
 * )
 */
const SubmitIssueForm = () => {
  const { users, loading: loadingUsers } = useUsersContext();
  const [submitError, setSubmitError] = useState(null);
  const { createIssue, error } = useIssuesContext();
  const [programmers, setProgrammers] = useState([]);
  const [success, setSuccess] = useState(false);
  const severityOptions = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ];
  const assignedToOptions = programmers.map((programmer) => ({
    label: `${programmer.first_name} ${programmer.second_name}`,
    value: programmer.email,
  }));

  useEffect(() => {
    if (!loadingUsers) {
      const programmers = users.filter((user) => user.role === "PROGRAMMER");
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
              setSuccess(true);
            } catch (error) {
              setSubmitError(error.message);
            } finally {
              setSubmitting(false);
              resetForm();
            }
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <form className={styles.issueForm} onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <Field placeholder="Title" type="text" name="title" />
              <p className={styles.error}>
                <ErrorMessage name="title" />
              </p>
              <label htmlFor="description">Description</label>
              <Field as="textarea" name="description" />
              <p className={styles.error}>
                <ErrorMessage name="description" />
              </p>
              <div className={styles.selects}>
                <div>
                  <label htmlFor="severity">Severity</label>
                  <Field name="severity">
                    {({ field, form }) => (
                      <CustomSelect
                        {...field}
                        options={severityOptions}
                        placeholder="Select severity"
                        onChange={(option) =>
                          form.setFieldValue(field.name, option.value)
                        }
                      />
                    )}
                  </Field>
                  <p className={styles.error}>
                    <ErrorMessage name="severity" />
                  </p>
                </div>
                <div>
                  <label htmlFor="assignedTo">Assign to</label>
                  <Field name="assignedTo">
                    {({ field, form }) => (
                      <CustomSelect
                        {...field}
                        options={assignedToOptions}
                        placeholder="Select assignee"
                        onChange={(option) =>
                          form.setFieldValue(field.name, option.value)
                        }
                      />
                    )}
                  </Field>
                  <p className={styles.error}>
                    <ErrorMessage name="assignedTo" />
                  </p>
                </div>
              </div>
              <SubmitButton height={"40px"} disabled={isSubmitting}>
                Submit
              </SubmitButton>
              {submitError && <p className={styles.error}>{submitError}</p>}
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SubmitIssueForm;
