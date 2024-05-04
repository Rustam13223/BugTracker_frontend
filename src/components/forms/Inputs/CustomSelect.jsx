import Select from "react-select";

const CustomSelect = ({ onChange, value, label, options }) => {
  // Custom styles for the select

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "var(--color-surface-150)",
      borderColor: state.isFocused
        ? "(var--color-primary-100)"
        : "var(--color-surface-300)",
      boxShadow: state.isFocused ? "0 0 0 0.2rem rgba(0,123,255,.25)" : "none",
      "&:hover": {
        borderColor: state.isFocused
          ? "(var--color-primary-100)"
          : "(var--color-primary-100)",
      },
      width: "250px",
      color: "var(--color-surface-900)",
      marginTop: "0.5rem",
    }),
    menu: (base) => ({
      ...base,
      // override the menu border color
      borderColor: "#ced4da",
      padding: "0",
      width: "250px",
    }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: 0, // Remove padding at the top inside the dropdown
      paddingBottom: 0, // Remove padding at the bottom inside the dropdown
      borderBottom: "1px solid var(--color-surface-300)",
      width: "250px",
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isFocused
        ? "var(--color-surface-200)"
        : isSelected
        ? "var(--color-surface-100)"
        : "var(--color-surface-100)",
      color: "var(--color-surface-900)",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "var(--color-surface-100)",
      },

      borderLeft: "1px solid var(--color-surface-300)",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isDisabled
        ? "var(--color-surface-700)"
        : "var(--color-surface-700)", // Change this color as needed
    }),
  };

  return (
    <div>
      <label>{label}</label>
      <Select
        styles={customStyles}
        options={options}
        onChange={onChange}
        value={options.find((option) => option.value === value)}
        placeholder="Select..."
      />
    </div>
  );
};

export default CustomSelect;
