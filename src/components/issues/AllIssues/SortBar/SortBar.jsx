import { useEffect, useState } from "react";
import CustomSelect from "../../../forms/Inputs/CustomSelect";
import { useIssueFilterContext } from "../../../../context/issueFilterContext";
import { useUsersContext } from "../../../../context/usersContext";
import styles from "./SortBar.module.css";

const SortBar = () => {
  const { setSortBy, setFilters, filters } = useIssueFilterContext();
  const [selectedUser, setSelectedUser] = useState(null);
  const { users } = useUsersContext();

  const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "severity", label: "Severity" },
    { value: "status", label: "Status" },
  ];
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]); // Default to the first option

  const usersOptions = users
    .filter((user) => user.role === "programmer")
    .map((user) => ({
      value: user.email,
      label: `${user.first_name} ${user.second_name}`,
    }));
  const newUsersOptions = [{ value: null, label: "All" }, ...usersOptions];

  const handleSortChange = (option) => {
    setSelectedOption(option);
    setSortBy(option.value);
  };

  const handleUserChange = (option) => {
    setSelectedUser(option);
    if (option.value === null) {
      setFilters((prevFilters) =>
        prevFilters.filter((f) => f.type !== "assignedTo")
      );
    } else {
      setFilters((prevFilters) => [
        ...prevFilters.filter((f) => f.type !== "assignedTo"),
        { type: "assignedTo", value: option.value },
      ]);
    }
  };
  useEffect(() => {
    if (!filters.some((f) => f.type === "assignedTo")) {
      setSelectedUser({ value: null, label: "All" });
    }
  }, [filters]);

  return (
    <div className={styles.sortBar}>
      <CustomSelect
        value={selectedOption ? selectedOption.value : ""}
        onChange={handleSortChange}
        options={sortOptions}
        label="Sort by"
      />
      <CustomSelect
        value={selectedUser ? selectedUser.value : ""}
        options={newUsersOptions}
        onChange={handleUserChange}
        label="Assigned to"
      />
    </div>
  );
};

export default SortBar;
