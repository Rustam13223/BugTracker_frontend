import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks";

/**
 * Footer component.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterLinks />
    </footer>
  );
};

export default Footer;
