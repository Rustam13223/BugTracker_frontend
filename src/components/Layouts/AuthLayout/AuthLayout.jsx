import React from "react";
import styles from "./AuthLayout.module.css";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import svg from "@/assets/bugtracker.svg";
import BugtrackerSvg from "../../../assets/BugtrackerSvg";

const AuthLayout = ({ children, page }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link to="/">
            <BugtrackerSvg size="100px" />
          </Link>

          <p>
            {page === "login" ? "Sign in" : "Sign up"} to{" "}
            <span className={styles.title}>BugTracker</span>
          </p>
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
