import React from "react";
import styles from "./Authenticated.module.css";
import { Link } from "react-router-dom";
import { useUserContext } from "@/context/userContext";

const Authenticated = () => {
  const { logout } = useUserContext();
  return (
    <div className={styles.container}>
      <h1>You are already logged in</h1>
      <p>
        Go to your <Link to="/dashboard">dashboard</Link>
      </p>
      <p>
        Or{" "}
        <button onClick={() => logout()} className={styles.logOutBtn}>
          logout
        </button>
      </p>
    </div>
  );
};

export default Authenticated;
