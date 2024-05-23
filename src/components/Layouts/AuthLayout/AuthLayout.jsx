import styles from "./AuthLayout.module.css";
import { Link } from "react-router-dom";
import FooterLinks from "@/components/Footer/FooterLinks";

import BugtrackerSvg from "../../../assets/BugtrackerSvg";
import ToggleThemeButton from "@/components/buttons/ToggleThemeButton";

/**
 * AuthLayout component renders the layout for authentication pages.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered within the layout.
 * @param {string} props.page - The current page name.
 * @returns {JSX.Element} The rendered AuthLayout component.
 */
const AuthLayout = ({ children, page }) => {
  return (
    <>
      <ToggleThemeButton top="1rem" right="1rem" size="2rem" />
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
    </>
  );
};

export default AuthLayout;
