import styles from "./DashboardIssues.module.css";
import ListIssues from "../ListIssues/ListIssues";
import CustomSelect from "../../forms/Inputs/CustomSelect";

/**
 * Renders a component that displays a list of user issues.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the component.
 * @param {Array} props.issues - The list of user issues.
 * @param {string} props.error - The error message, if any.
 * @param {function} props.handleChange - The function to handle the change event.
 * @param {Object} props.selectedOption - The selected option.
 * @param {Array} props.sortIssuesOptions - The options for sorting the issues.
 * @returns {JSX.Element} The rendered component.
 */
const UserIssues = ({
  title,
  issues,
  error,
  handleChange,
  selectedOption,
  sortIssuesOptions,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {issues.length > 0 && (
          <CustomSelect
            value={selectedOption ? selectedOption.value : ""}
            onChange={handleChange}
            options={sortIssuesOptions}
          />
        )}
      </div>
      {issues.length === 0 ? (
        error ? (
          <p>{error}</p>
        ) : (
          <p>No issues found</p>
        )
      ) : (
        <ListIssues items={issues} />
      )}
    </div>
  );
};

export default UserIssues;
