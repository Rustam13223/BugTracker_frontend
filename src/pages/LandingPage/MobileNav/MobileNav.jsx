import React from "react";
import styles from "./MobileNav.module.css";
import { IoMenu } from "react-icons/io5";
import ToggleThemeButton from "@/components/buttons/ToggleThemeButton";

const MobileNav = ({ mobileNavVisible, setMobileNavVisible, scroll }) => {
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
          <div className={styles.btnGroup}>
            <button className={styles.loginBtn}>Sign in</button>
            <button className={styles.registerBtn}>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
