import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import styles from "./MobileNavbar.module.css";
import { useUserContext } from "../../../context/userContext";
import ToggleThemeButton from "../../buttons/ToggleThemeButton";
import { IoClose } from "react-icons/io5";
import NavbarLinks from "../NavbarLinks";

/**
 * Renders the mobile navigation bar component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.mobileNavVisible - Indicates whether the mobile navigation is visible.
 * @param {function} props.setmobileNavVisible - Callback function to set the visibility of the mobile navigation.
 * @returns {JSX.Element} The mobile navigation bar component.
 */
const MobileNavbar = ({ mobileNavVisible, setmobileNavVisible }) => {
  const Navigate = useNavigate();
  const { user, logout } = useUserContext();
  return (
    <div className={`${styles.container} ${mobileNavVisible && styles.isOpen}`}>
      <button
        onClick={() => setmobileNavVisible((prev) => !prev)}
        className={styles.closeBtn}
      >
        <IoClose size={"4em"} />
      </button>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/submit">
              <button className={styles.addIssue}>
                <FaPlus />
                Submit issue
              </button>
            </Link>
          </li>
          <NavbarLinks />
          <div className={styles.authButtons}>
            {user ? (
              <li>
                <button
                  className={styles.authButton}
                  onClick={() => {
                    logout();
                    Navigate("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <button className={styles.authButton}>Sign in</button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <button className={styles.authButton}>Sign up</button>
                  </Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>

      <ToggleThemeButton position="absolute" top="1.5rem" left="2rem" />
    </div>
  );
};

export default MobileNavbar;
