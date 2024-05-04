import styles from "./Navbar.module.css";
import { useUserContext } from "@/context/userContext";
import BugtrackerSvg from "../../assets/BugtrackerSvg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ToggleThemeButton from "../buttons/ToggleThemeButton";
import { FaPlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const { user, logout } = useUserContext();
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const Navigate = useNavigate();
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          <BugtrackerSvg size="60px" />
          <h1>BugTracker</h1>
        </div>
      </Link>
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
          {user ? (
            <li>
              <button
                className={styles.authBtn}
                onClick={() => {
                  logout();
                  Navigate("/login");
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <div className={styles.authButtons}>
              <li>
                <Link to="/login">
                  <button className={styles.authBtn}>Sign in</button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className={styles.authBtn}>Sign up</button>
                </Link>
              </li>
            </div>
          )}
          <li>
            <ToggleThemeButton position="static" />
          </li>
        </ul>
        <button
          onClick={() => setMobileNavVisible((prev) => !prev)}
          className={styles.showMobileMenu}
        >
          <IoMenu size={"4em"} />
        </button>
      </nav>
      <MobileNavbar
        mobileNavVisible={mobileNavVisible}
        setmobileNavVisible={setMobileNavVisible}
      />
    </header>
  );
};

export default Navbar;
