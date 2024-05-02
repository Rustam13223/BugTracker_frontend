import React from "react";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterLinks />
    </footer>
  );
};

export default Footer;
