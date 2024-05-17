import React, { useEffect } from "react";
import styles from "./User.module.css";
import CustomSelect from "../../forms/Inputs/CustomSelect";
import { useUserContext } from "../../../context/userContext";
import { useState } from "react";
import ConfirmRoleChange from "@/components/modals/ConfirmRoleChange/ConfirmRoleChange";
import { useUsersContext } from "../../../context/usersContext";

/**
 * User component displays information about a user and allows an admin to change their role.
 *
 * @component
 * @param {Object} user - The user object containing user information.
 * @param {string} user.first_name - The first name of the user.
 * @param {string} user.second_name - The last name of the user.
 * @param {string} user.role - The role of the user.
 * @param {string} user.email - The email address of the user.
 * @param {string} user.id - The unique identifier of the user.
 * @returns {JSX.Element} The rendered User component.
 */
const User = ({ user: { first_name, second_name, role, email, id } }) => {
  const { isAdmin } = useUserContext();
  const { updateUsersRole } = useUsersContext();
  const [selectedRole, setSelectedRole] = useState(role);
  const [showConfirmRoleChange, setShowConfirmRoleChange] = useState(false);
  const rolesOptions = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "programmer",
      label: "Programmer",
    },
    { value: "support", label: "Support" },
  ];
  const handleRoleChange = (selectedOption) => {
    if (selectedOption.value === role) return;

    setSelectedRole(selectedOption.value);
    setShowConfirmRoleChange(true);
  };
  const handleCancelRoleChange = () => {
    setSelectedRole(role);
    setShowConfirmRoleChange(false);
  };
  const handleConfirmRoleChange = async () => {
    try {
      await updateUsersRole(id, selectedRole);
    } catch (error) {
      console.log(error);
    }
    setShowConfirmRoleChange(false);
  };
  const roleStyles = {
    background:
      role?.toLowerCase() === "admin"
        ? "#ED0101"
        : role?.toLowerCase() === "programmer"
        ? "#009DD1"
        : role?.toLowerCase() === "support" && "#94D2BD",
  };
  return (
    <>
      <div className={styles.container}>
        <p className={styles.id}>{id}</p>
        <p>
          {first_name} {second_name}
        </p>
        <p>{email}</p>
        {isAdmin ? (
          <CustomSelect
            options={rolesOptions}
            value={selectedRole}
            placeholder="Select role"
            disabled={role === "admin"}
            onChange={(selectedOption) => handleRoleChange(selectedOption)}
          />
        ) : (
          <p style={roleStyles} className={styles.role}>
            {role}
          </p>
        )}
      </div>
      {showConfirmRoleChange && (
        <ConfirmRoleChange
          user={{ first_name, second_name, role }}
          newRole={selectedRole}
          handleConfirm={handleConfirmRoleChange}
          handleCancel={handleCancelRoleChange}
        />
      )}
    </>
  );
};

export default User;
