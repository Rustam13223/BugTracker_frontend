import styles from "./DashboardIssues.module.css";
import ListIssues from "../ListIssues/ListIssues";
import CustomSelect from "../../forms/Inputs/CustomSelect";

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
