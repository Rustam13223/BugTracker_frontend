import styles from "./MobileNav.module.css";
import { IoMenu } from "react-icons/io5";
import ToggleThemeButton from "@/components/buttons/ToggleThemeButton";
import { useUserContext } from "../../../context/userContext";
import { Link } from "react-router-dom";

/**
 * Mobile navigation component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.mobileNavVisible - Flag indicating whether the mobile navigation is visible.
 * @param {function} props.setMobileNavVisible - Function to toggle the visibility of the mobile navigation.
 * @param {function} props.scroll - Function to scroll to a specific section.
 * @returns {JSX.Element} The MobileNav component.
 */
const MobileNav = ({ mobileNavVisible, setMobileNavVisible, scroll }) => {
  const { user } = useUserContext();
  return (
    <>
      <div
        className={`${styles.container} ${mobileNavVisible && styles.isOpen}`}
      >
        <ToggleThemeButton position="absolute" left="1.5rem" top="1.5rem" />
        <button
          style={{
            display: "block",
          }}
          className={styles.mobileNavBtn}
          onClick={() => setMobileNavVisible((prev) => !prev)}
        >
          <IoMenu size={"3em"} />
        </button>
        <div className={styles.menu}>
          <nav className={styles.nav}>
            <button className={styles.navBtn} onClick={() => scroll(0)}>
              Start
            </button>
            <button className={styles.navBtn} onClick={() => scroll(1)}>
              Features
            </button>
            <button className={styles.navBtn} onClick={() => scroll(2)}>
              Testimonials
            </button>
            <button className={styles.navBtn} onClick={() => scroll(3)}>
              Contact
            </button>
          </nav>
          {user ? (
            <Link className={styles.link} to="/dashboard">
              <button className={styles.loginBtn}>Go To Dashboard</button>
            </Link>
          ) : (
            <div className={styles.btnGroup}>
              <Link className={styles.link} to="/login">
                <button className={styles.loginBtn}>Sign in</button>
              </Link>
              <Link className={styles.link} to="/register">
                <button className={styles.registerBtn}>Sign up</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
