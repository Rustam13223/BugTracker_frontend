import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./ContactSection.module.css";
import { useOnScreen } from "@/hooks/useOnScreen";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SubmitButton from "@/components/buttons/SubmitButton";
import FooterLinks from "@/components/Layouts/AuthLayout/FooterLinks";
import SlideIn from "../../../components/animations/SlideIn";
const ContactSection = ({ options }) => {
  const [ref, isVisible] = useOnScreen(options);
  return (
    <ParallaxLayer offset={3.0} speed={0.5} className={styles.contactSection}>
      <div
        ref={ref}
        className={styles.container}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <SlideIn key={isVisible} from="left">
          <div className={styles.info}>
            <h1>Unlock Opportunities - Get in Touch</h1>
            <div className={styles.address}>
              <p>
                <span>Address: </span> Zielona Góra, Poland
              </p>
              <p>
                <span>Email: </span>contact@bugtracker.com
              </p>
              <p>
                <span>Phone: </span>+48 123 456 789
              </p>
              <p>
                <span>Hours: </span>Mon-Fri, 9:00-17:00
              </p>
            </div>
            <div className={styles.socials}>
              <FaFacebookSquare size={40} className={styles.socialIcon} />
              <FaSquareXTwitter size={40} className={styles.socialIcon} />
              <FaInstagramSquare size={40} className={styles.socialIcon} />
              <FaLinkedin size={40} className={styles.socialIcon} />
            </div>
          </div>
        </SlideIn>
        <div className={styles.contactForm}>
          <SlideIn key={isVisible + "1"} from="right">
            <form className={styles.form}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea rosw="10" placeholder="Message"></textarea>
              <SubmitButton>Send</SubmitButton>
            </form>
          </SlideIn>
        </div>
      </div>
      <footer className={styles.footer}>
        <FooterLinks />
      </footer>
    </ParallaxLayer>
  );
};

export default ContactSection;
