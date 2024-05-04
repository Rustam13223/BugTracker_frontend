import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./ContactSection.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SubmitButton from "@/components/buttons/SubmitButton";
import FooterLinks from "@/components/Footer/FooterLinks";
import SlideIn from "../../../components/animations/SlideIn";
import FadeIn from "../../../components/animations/FadeIn";

const ContactSection = ({ offset, speed }) => {
  return (
    <>
      <ParallaxLayer
        offset={offset}
        speed={speed}
        className={styles.contactSection}
      >
        <div className={styles.container}>
          <>
            <SlideIn
              from="left"
              styles={{
                width: "100%",
              }}
            >
              <div className={styles.info}>
                <SlideIn from="left" delay={0.1}>
                  <h1>Unlock Opportunities - Get in Touch</h1>
                </SlideIn>
                <div className={styles.address}>
                  <SlideIn from="left" delay={0.2}>
                    <p>
                      <span>Address: </span> Zielona Góra, Poland
                    </p>
                  </SlideIn>
                  <SlideIn from="left" delay={0.2}>
                    <p>
                      <span>Email: </span>contact@bugtracker.com
                    </p>
                  </SlideIn>
                  <SlideIn from="left" delay={0.3}>
                    <p>
                      <span>Phone: </span>+48 123 456 789
                    </p>
                  </SlideIn>
                  <SlideIn from="left" delay={0.3}>
                    <p>
                      <span>Hours: </span>Mon-Fri, 9:00-17:00
                    </p>
                  </SlideIn>
                </div>
                <SlideIn from="left" delay={0.4}>
                  <div className={styles.socials}>
                    <FaFacebookSquare size={40} className={styles.socialIcon} />
                    <FaSquareXTwitter size={40} className={styles.socialIcon} />
                    <FaInstagramSquare
                      size={40}
                      className={styles.socialIcon}
                    />
                    <FaLinkedin size={40} className={styles.socialIcon} />
                  </div>
                </SlideIn>
              </div>
            </SlideIn>
            <FadeIn
              from="right"
              styles={{
                width: "100%",
              }}
            >
              <form className={styles.form}>
                <SlideIn from="right" delay={0.1}>
                  <input type="text" placeholder="Name" />
                </SlideIn>
                <SlideIn from="right" delay={0.2}>
                  <input type="email" placeholder="Email" />
                </SlideIn>
                <SlideIn from="right" delay={0.3}>
                  <input type="text" placeholder="Subject" />
                </SlideIn>
                <SlideIn from="right" delay={0.4}>
                  <textarea placeholder="Message"></textarea>
                </SlideIn>
                <SlideIn from="right" delay={0.5}>
                  <SubmitButton>Send</SubmitButton>
                </SlideIn>
              </form>
            </FadeIn>
          </>
        </div>
      </ParallaxLayer>
      <footer className={styles.footer}>
        <FooterLinks />
      </footer>
    </>
  );
};

export default ContactSection;
