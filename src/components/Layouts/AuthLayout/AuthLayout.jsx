import React from "react";
import styles from "./AuthLayout.module.css";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";

const AuthLayout = ({ children, page }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link to="/">
            <img
              className={styles.img}
              src="/bugtracker.svg"
              alt="bugtracker-logo"
            />
          </Link>
          <p>{page === "login" ? "Sign in" : "Sign up"} to BugTracker</p>
        </div>
        <main className={styles.formWrapper}>{children}</main>
      </div>
      <footer className={styles.footer}>
        <FooterLinks />
      </footer>
    </div>
  );
};

export default AuthLayout;
