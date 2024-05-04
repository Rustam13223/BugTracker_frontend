import * as Yup from "yup";

export const IssueValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  severity: Yup.string().required("Severity is required"),
});
