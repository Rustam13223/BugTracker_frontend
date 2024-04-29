import React, { useRef, useState } from "react";
import { Parallax } from "@react-spring/parallax";
import { FaArrowUp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

import styles from "./LandingPage.module.css";
import ToggleThemeButton from "@/components/buttons/ToggleThemeButton";
import BugtrackerSvg from "../../assets/BugtrackerSvg";

import HeroSection from "./HeroSection/HeroSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import ContactSection from "./ContactSection/ContactSection";
import MobileNav from "./MobileNav/MobileNav";

const index = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };
  const parallax = useRef(null);
  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div onClick={() => scroll(0)} className={styles.logo}>
          <BugtrackerSvg size={"50px"} />
          <h1>BugTracker</h1>
        </div>
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
          <Link to="/login">
            <button className={styles.loginBtn}>Sign in</button>
          </Link>
          <Link to="/register">
            <button className={styles.registerBtn}>Sign up</button>
          </Link>
          <ToggleThemeButton
            color="white"
            position="static"
            left="2rem"
            bottom="2rem"
          />
        </nav>
        <button
          onClick={() => setMobileNavVisible((prev) => !prev)}
          className={styles.mobileNavBtn}
        >
          <IoMenu size={"3em"} />
        </button>

        <MobileNav
          setMobileNavVisible={setMobileNavVisible}
          mobileNavVisible={mobileNavVisible}
          scroll={scroll}
        />
      </header>
      <Parallax
        pages={4}
        style={{
          top: "0",
          left: "0",
          background:
            "linear-gradient(45deg,var(--color-surface-100),var(--color-surface-200),var(--color-primary-100))",
        }}
        ref={parallax}
      >
        <HeroSection options={options} />
        <FeaturesSection options={options} />
        <TestimonialSection options={options} />
        <ContactSection options={options} />
      </Parallax>
    </div>
  );
};

export default index;
